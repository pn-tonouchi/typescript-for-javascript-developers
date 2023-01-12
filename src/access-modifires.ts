export {};

class Person {
  //#region properties
  public name: string;
  private birth: Date;
  protected nationality: string;
  //#endregion

  //#region constructor, destruntor
  constructor (name: string, birth: Date, nationality: string){
    this.name = name;
    this.birth = birth;
    this.nationality = nationality;
  };
  //#endregion

  //#region methods
  private calcAge(): number {
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

class Android extends Person {
  constructor (name: string, birth: Date, nationality: string){
    super(name, birth, nationality); // 親クラス同名メソッド呼び出し
  };

  profile(): string {
    //return `name:${this.name}, birth:${this.birth}, nationality:${this.nationality}`; // error
    return `name:${this.name}, nationality:${this.nationality}`;
  }
}

let taro = new Person('Taro', new Date(1977, 6, 3), 'Japan');
//console.log({person: taro, name:taro.name, birth: taro.birth.toDateString()}); // error
console.log({person: taro, name:taro.name});

