class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(stringfy) {
    const parsed = JSON.parse(stringfy);
    return new Person (
      parsed.id,
      parsed.firstName,
      parsed.lastName,
      parsed.age
    );
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);
