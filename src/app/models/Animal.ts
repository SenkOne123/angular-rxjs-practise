export default class Animal {
  name: string;
  legs: number;
  sayPhrase: string;

  constructor(name: string, legs: number, sayPhrase: string) {
    this.name = name;
    this.legs = legs;
    this.sayPhrase = sayPhrase;
  }

  say() {
    console.log(this.sayPhrase)
  }
}
