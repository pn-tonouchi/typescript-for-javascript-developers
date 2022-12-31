export {};

function bmi(height: number, weight: number): number{
  return weight / (height * height);
}

let myBMI = bmi(1.67, 75);
console.log({myBMI});

