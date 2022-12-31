export {};

// 曜日のみ可能な変数
let dayOfTheWeek: string = '日';
dayOfTheWeek = '月';
dayOfTheWeek = '空'; // errorにしたい

let dayOfTheWeek2: '日'|'月'|'火'|'水'|'木'|'金'|'土' = '日';
dayOfTheWeek2 = '日';
dayOfTheWeek2 = '月';
dayOfTheWeek2 = '火';
dayOfTheWeek2 = '水';
dayOfTheWeek2 = '木';
dayOfTheWeek2 = '金';
dayOfTheWeek2 = '土';
//dayOfTheWeek2 = '空'; // errorにしたい

//function a(): string
//{
//  return "";
//}
//dayOfTheWeek2 = a(); // error
function a2(): '日'|'月'|'火'|'水'|'木'|'金' // 不足は許容される
{
  return "日";
}
dayOfTheWeek2 = a2();

let month: 1|2|3|4|5|6|7|8|9|10|11|12 = 1;
month = 1;
month = 12;
//month = -1; // error
//month = 0; // error
//month = 1.1; // error
//month = 13; // error

let TRUE: true = true;
//TRUE = false; // error


