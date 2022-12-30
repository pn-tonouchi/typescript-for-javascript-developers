//export {};

// boolean
let isFinished: boolean = true;
isFinished = false;
//isFinished = 1;
console.log({ isFinished });

// number
let year: number = 1977;
console.log({ year });
//let age: number = 0x2d;
let age: number = Math.trunc((20221230 - 19770603) / 10000);
console.log({ age });

// string
let myname: string = 'tonouchi';
console.log({ myname });

// array
let numbers: number[] = [1, 2, 3];
let strings: string[] = ['A', 'B', 'C'];
let numbers2d: number[][] = [[50, 100], [150, 300]];
// 共用型（指定の型のいずれか）
let objects: (string | number | boolean)[] = [1, false, 'A'];

// 非推奨の書き方
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['A', 'B', 'C'];
let numbers2d2: Array<Array<number>> = [[50, 100], [150, 300]];
let objects2: Array<string | number | boolean> = [1, false, 'A'];

// tuple(型の順序性の制約ある配列)
let tuple: [string, number] = ['Tono', 45];

// any（型不定）
// any.ts

