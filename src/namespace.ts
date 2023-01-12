export {};

namespace Jpn {
  export namespace Tokyo {
    export class Person{
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person{
      constructor(public name: string) {}
    }
  }
}

namespace Eng {
  export class Person{
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const jpn = new Jpn.Tokyo.Person('外内');
const eng  = new Eng.Person('Noboru', '', 'Tonouchi');
console.log({jpn, eng});

