const Person = ({ name, age, job }) => {
  // _variable is a representation of private variables
  var _name = name;
  var _age = age;
  var _job = job;

  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,
    setJob: (newJob) => (_job = newJob),
  };
};

const me = Person({ name: "Gill", age: 25, job: "software developer" });
console.log(me.getName());
