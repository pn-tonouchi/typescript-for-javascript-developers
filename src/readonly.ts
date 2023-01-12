export {};

class VisaCard{
  readonly owner: string;

  constructor (owner: string) {
    this.owner = owner;
  }
}

class MasterCard{
  constructor (public readonly owner: string) {
  //constructor (readonly owner: string) { // 省略も可能でも記述しておいたほうがいい
  }
}

let card1 = new VisaCard('Tono');
//card1.owner = 'aaa'; // error

let card2 = new MasterCard('Tono');
//card2.owner = 'aaa'; // error

console.log({card1, card2});
