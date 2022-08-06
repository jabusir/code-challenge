"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

const checkIfAllDrained = (sources) => {
  for (let source of sources) {
    if (!source.drained) {
      return false;
    }
  }
  return true;
};

module.exports = async (logSources, printer) => {
  const min_heap = [];
  let allDrained = false;
  while (!allDrained) {
    allDrained = checkIfAllDrained(logSources);

    for (let source of logSources) {
      const popped = await source.popAsync();
      if (popped) {
        min_heap.push(popped);
      }
    }
  }
  min_heap.sort((a, b) => a.date.getTime() - b.date.getTime());

  for (let el of min_heap) {
    printer.print(el);
  }

  printer.done();
  return new Promise((resolve, reject) => {
    resolve(console.log("Async sort complete."));
  });
};
