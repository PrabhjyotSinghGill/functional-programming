// REDUCE : Built in Array function
//Takes an array of data and reduce it to a single value.
const numbers = [5, 7, 2, 40, 23, 14, 8, 4, 11];

const sum = numbers.reduce((acc, x) => {
  console.log(`acc id ${acc}`);
  console.log(`x is ${x}`);

  return acc + x;
}, 0);

