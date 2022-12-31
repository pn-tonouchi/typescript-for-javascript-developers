export{}

//#region void
let foo: void = undefined;
function returnNothing(): void{
  // console.log("I don't return anything.");
}
console.log({ returnNothing: returnNothing() });
//#endregion
