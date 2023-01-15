export {};
console.log('\n' + __filename);


class Person {
  name: string;
  age: number;

  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('taro', 18);
console.log(taro);

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;

const param: Profile = ['jiro', 19];
console.log(new Person(...param));

