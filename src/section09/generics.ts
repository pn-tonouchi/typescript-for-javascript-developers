export {};
console.log('\n' + __filename);

//const echo = (arg: number): number => {
//  return arg;
//}
//
//const echo = (arg: string): string => {
//  return arg;
//}

const echo = <T>(arg: T): T => {
  return arg;
}

console.log({
  n: echo<number>(123),
  s: echo<string>('abc'),
  b: echo<boolean>(true)
});



class Mirror<T> {
  constructor(public value: T){}

  echo(): T {
    return this.value;
  }
}

console.log({
  n: new Mirror<number>(456).echo(),
  s: new Mirror<string>('def').echo(),
  b: new Mirror<boolean>(false).echo(),
});
