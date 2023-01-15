export {};
console.log('\n' + __filename);

//#region number
let year: number = 1977;
//let age: number = 0x2d;
let age: number = Math.trunc((20221230 - 19770603) / 10000);
// ってことは...
function returnNumber(): number{
  return 0;
}
console.log({ year, age, returnNumber: returnNumber() });
//#endregion

//#region string
let myname: string = 'tonouchi';
console.log({ myname });
//#endregion

