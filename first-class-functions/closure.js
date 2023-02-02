const createPrinter = () => {
  const number = 42;
  //The below arrow function has access to internal variable of createPrinter function is a concept of Closure.
  return () => {
    console.log(`My fav number is ${number}`);
  };
};

const printer = createPrinter();
printer();

//Lets try to print number from outside of the scope of function createPrinter
console.log(number);
//This will throw an error due to out of scope
