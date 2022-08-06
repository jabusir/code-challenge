"use strict";

// Print all entries, across all of the sources, in chronological order.

const checkIfAllDrained = (sources) => {
  for (let source of sources) {
    if (!source.drained) {
      return false;
    }
  }
  return true;
};

module.exports = (logSources, printer) => {
  const min_heap = [];
  let allDrained = false;

  while (!allDrained) {
    allDrained = checkIfAllDrained(logSources);
    for (let source of logSources) {
      const popped = source.pop();
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

  return console.log("Sync sort complete.");
};
