"use strict";


// 1. countWords
function countWords(phrase) {
  
  const word_counts = {};
  const words = phrase.toLowerCase().split(" ");

  for (const word of Object.values(words)) {
    if (word in word_counts) {
      word_counts[word] += 1;
    } else {
      word_counts[word] = 1;
    }
  }

  return word_counts;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  
  const melon_prices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas'],
  };

  if (price in melon_prices) {
    melon_prices[price].sort();
    return (melon_prices[price]);
  } 
    
  return;

}
