import { Person, sum } from './sums/sum';

const ollie: Person = new Person("Ollie", 56);
console.log(`Wow, Ollie is only ${ollie.age}`);
console.log(sum(50, 3));