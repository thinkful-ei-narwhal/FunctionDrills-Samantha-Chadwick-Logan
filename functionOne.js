function getYearOfBirth(age) {
  return 2020 - age;
}

function createGreeting(name, age) {
  if (name === undefined || age === undefined) {
    throw new error("arguments invalid");
  }

  if (age < 0) {
    throw new error("age cannot be naegative");
  }

  if (typeof age !== "number") {
    throw new TypeError("age must be a number");
  }

  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old.
  I was born in ${yob}.`;
}

try {
  const greeting1 = createGreeting("rich", 18);
  console.log(greeting1);
} catch (e) {
  console.error(e.message);
}
