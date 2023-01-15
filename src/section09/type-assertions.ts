export {};
console.log('\n' + __filename);

let name: any = 'Tono';
let length = name.length; // any型になっているので文字列等も代入できる

let length1: number = name.length;
let length2 = name.length as number; 
let length3 = (name as string).length; 
let length4 = (<string>name).length; // 非推奨

console.log({name: name, length: length1});


