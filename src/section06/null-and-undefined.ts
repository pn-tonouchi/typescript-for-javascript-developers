export {};
console.log('\n' + __filename);

//#region null, undefined
let absence: null = null; // nullのみ許容
// absence = 0; error!
// absence = undefined; error!
let data: undefined = undefined; // undefinedのみ許容
// data = ""; error!
// data = null; error!
//#endregion


