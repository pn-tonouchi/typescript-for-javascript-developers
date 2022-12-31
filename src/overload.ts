export {};

// 宣言
function double(value: number): number;
function double(value: string): string;

// 実態では any型で受け取る
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else if (typeof value === 'string') {
    return value + value;
  }
}

//function double(value: string): string {
//  return value + value;
//}

const num = double(100);
const str = double('abc, ');
//const bool = double(true); // error
console.log({num, str});

