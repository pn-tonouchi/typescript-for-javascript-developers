export {};

class Person {
  //#region properties
  name: string;
  birth: Date;
  //#endregion

  //#region constructor, destruntor
  constructor (name: string, birth: Date){
    this.name = name;
    this.birth = birth;
  };
  //#endregion

  //#region methods
  calcAge(): number {
    const formatDate = (date: Date): number => {
      const y: number = date.getFullYear();
      const m: number = date.getMonth() + 1;
      const d: number = date.getDay();
      return parseInt((y) + (("00" + m).slice(-2)) + (("00" + d).slice(-2)));
    }

    const result: number = Math.trunc((formatDate(new Date()) - formatDate(this.birth)) / 10000); 
    return result;
  }
  //#endregion
}

let taro = new Person('Taro', new Date(1977, 6, 3));
console.log({taro, age:taro.calcAge()});

let hanako = new Person('Hanako', new Date(1999, 10, 23));
console.log({hanako});
