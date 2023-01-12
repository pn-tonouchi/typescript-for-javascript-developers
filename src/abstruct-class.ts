export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry(): string {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry(): string {
    return 'grrr';
  }
}

const lion = new Lion();
const tiger = new Tiger();
console.log({
  lion,
  lCry: lion.cry(),
  tiger,
  TCry: tiger.cry(),
});
