//Sort is a mutating function as it change the original array.
//Viceversa Slice function makes a copy first and doesn't change original array.
const mixedUpNumbers = [10, 2, 4, 6, 3, 1, 5, 9, 8, 0];

// Comparator Function
const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const descending = (a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
};

// Sort takes function as an argument.
const sortedNumbers = mixedUpNumbers.slice().sort(descending);

console.log(sortedNumbers);
