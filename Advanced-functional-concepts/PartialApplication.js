// Partial Application is when we take some arguments & we fix some of them to set value and final result is less number of arguments
const add = (x, y, z) => x + y + z;

const addPartial = (x) => (y, z) => add(x, y, z);

const add5 = addPartial(5);
const sum = add5(6, 7);

console.log(sum);
