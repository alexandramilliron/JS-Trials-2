"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`)
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = []
  for (const i in items) {
    if (i % 2 == 0) {
      result.push(items[i]);
    }
  }
  return result
}


// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort((a, b) => (a - b));
  const slice = items.slice(0, n);
  slice.reverse();

  return slice
}


