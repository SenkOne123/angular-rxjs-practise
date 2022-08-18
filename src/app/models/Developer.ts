import Person from "./Person";

export default class Developer extends Person {
  profession: string;

  constructor(name: string, age: number, profession: string) {
    super(name, age);
    this.profession = profession;
    this.name = name;
    this.age = age;
  }

  get developerInfo(): string {
    return `The developer name is ${this.name}, age: ${this.age}, profession: ${this.profession}`
  }
}
