export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;

  //constructor(public name: string, public speed: number = 80) {
  //  super(name);
  //}
  constructor(public name: string, speed: number = 80) {
    super(name);
    this.speed = speed;
  }

  run(): string {
    return `${super.run()} ${this.speed}km/h.`;
  }
} 

let animal = new Animal('none');
let lion = new Lion('Simba', 100);
console.log({ 
  animal,
  run1: animal.run()
});
console.log({ 
  lion,
  run2: lion.run()
});

