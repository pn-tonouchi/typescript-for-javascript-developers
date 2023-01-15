export {};
console.log('\n' + __filename);

const kansu = (): number => 43;
let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
console.log({numberAny, numberUnknown, sumAny });

//console.log(typeof numberUnknown); // -> number
//let sumUnknown = numberUnknown + 10; // error
if (typeof numberUnknown === 'number')
{
  // typeガードすることで安全に実行できると解釈される
  let sumUnknown = numberUnknown + 10;
  console.log({sumUnknown});
}
//let sumUnknown = numberUnknown as number + 10;
