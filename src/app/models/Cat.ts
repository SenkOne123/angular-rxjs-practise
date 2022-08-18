import Animal from "./Animal";

export default class Cat extends Animal {
  color: string;
  constructor(name: string, legs: number, sayPhrase: string, color: string) {
    super(name, legs, sayPhrase);
    this.color = color;
    this.name = "my cat!";
    this.legs = 4;
  }


}
