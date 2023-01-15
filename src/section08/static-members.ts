export {};
console.log('\n' + __filename);

class Me {
  static isProgrammer: boolean = false;
  static firstName: string = 'Noboru';
  static lastName: string = 'Tonouchi';

  static hello() {
    return `my name is ${this.firstName} ${this.lastName}.`;
  }
}

Me.isProgrammer = true;
console.log({programmer: Me.isProgrammer, hello: Me.hello()});
