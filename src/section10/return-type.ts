export {};
console.log('\n' + __filename);

function add(a: number, b: number) {
  return a + b;
}
console.log({ a:add(1, 2) });

// 戻り値型を取得する
type ReturnTypeFromAdd = ReturnType<typeof add>;


