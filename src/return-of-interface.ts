export {};

class Mahoutsukai {}
class Souryo {}

class Taro extends Mahoutsukai {}
//class Taro extends Mahoutsukai, Souryo {} // error
let taro = new Taro();
console.log({taro});


interface Kenja{
  Ionazun(): void;
}
interface Senshi {
  Kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  Ionazun(): void {
  }
  Kougeki(): void {
  }
}

let jiro = new Jiro();
console.log({jiro});

//taro.Ionazun(); // error
jiro.Ionazun();
