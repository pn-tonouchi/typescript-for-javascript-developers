export {};
console.log('\n' + __filename);

function add(a: number, b: number) {
  return a + b;
}
console.log({ a:add(1, 2) });

// 戻り値型を取得する
type ReturnTypeFromAdd = ReturnType<typeof add>;

//type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R // 推論(infer)した結果を Rに代入...
  ? R 
  : any;

// inferとは?



