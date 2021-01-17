"use strict";

// Your mission is to print out all of the entries, across all of the *async* sources, in chronological order.

module.exports = (logSources, printer) => {
  return new Promise((resolve, reject) => {
    resolve(console.log("Async sort complete."));
  });
};
