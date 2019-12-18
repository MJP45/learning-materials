export const sum = (a, b) => {
  return a + b;
};

export class Person {
  name: string;
  _age: number;

  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  getNameString() {
    return `Hello my name is ${this.name}`;
  }

  get age() {
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }
}
