/*function adultFilter(persons) {
  const adults = [];
  for(let i=0; persons.length>i; i++){
    if(persons[i].age > 18){
      adults.push(persons[i])
    }
  }
  return adults;
}*/

function adultFilter(persons) {
  return persons.age > 18;
}


const persons = [
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

const result = persons.filter(adultFilter);

console.log(result);