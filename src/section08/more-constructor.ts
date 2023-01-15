export {};
console.log('\n' + __filename);

class Person {
  // コンストラクタにアクセス修飾子を記述することでプロパティになる
  // しかも初期化処理をコンストラクタ内に書かないでもいいという。
  constructor(public name: string, protected age: number) {}
}

const me = new Person('Tono', 45);
console.log({me});
