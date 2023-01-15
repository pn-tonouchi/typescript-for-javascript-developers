export {};
console.log('\n' + __filename);

//#region never（戻ってこない関数の戻り値の型指定）
//let bar: never = undefined; error
function error(message: string): never{
  throw new Error(message);
}
try {
  let result = error('test');
  console.log({ errorresult: result });
} catch (error) {
  console.log({ error });
}
//#endregion

