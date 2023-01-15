export {};
console.log('\n' + __filename);

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log({type: typeof fooCompatible});

// 代入可能
fooCompatible = barCompatible;
barCompatible = fooCompatible;

console.log({type: typeof fooCompatible});

let fooIncompatible: string;
let barIncompatible: number = 1;

//fooIncompatible = barIncompatible; // error
barIncompatible = fooCompatible; // number -> string に変わってしまう！
console.log({type: typeof barIncompatible});

let fooString: string;
let barString: string;

let fooStringLiteal: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteal;
//fooStringLiteal = fooString; // error

