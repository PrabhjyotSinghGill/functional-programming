const person = {
  name: "Jimmy Smith",
  age: 40,
  hairColor: "brown",
  eyeColor: "blue",
};

const careerData = {
  title: "developer",
  company: "ABC Software",
};

//Spread Operator
const personWithCareerData = {
  ...person,
  ...careerData,
};
console.log(personWithCareerData);
//In this example it creates the object with all the properties of person & careerData
// {
//     name: 'Jimmy Smith',
//     age: 40,
//     hairColor: 'brown',
//     eyeColor: 'blue',
//     title: 'developer',
//     company: 'ABC Software'
//   }
