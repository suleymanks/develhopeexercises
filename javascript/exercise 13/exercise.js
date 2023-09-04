function calculateAverageAge(people) {
  const totalAge = people.reduce((total, person) => {
    console.log(total);
    return total + person.age;
  }, 0)
  return totalAge / people.length;
}

const people = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(people);
console.log(people);
console.log(average);