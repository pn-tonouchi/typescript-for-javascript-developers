export{}

//#region array
let numbers: number[] = [1, 2, 3];
let strings: string[] = ['A', 'B', 'C'];
let numbers2d: number[][] = [[50, 100], [150, 300]];
// 共用型（指定の型のいずれか）
let objects: (string | number | boolean)[] = [1, false, 'A'];

//#region 非推奨の書き方
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['A', 'B', 'C'];
let numbers2d2: Array<Array<number>> = [[50, 100], [150, 300]];
let objects2: Array<string | number | boolean> = [1, false, 'A'];
//#endregion
//#endregion
