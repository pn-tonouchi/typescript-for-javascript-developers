export {};

let bmi: (height: number, weight: number) => number = function(
  height: number, 
  weight: number
): number {
  return weight / (height * height);
};

let myBMI2 = function (height: number, weight: number): number{
  return weight / (height * height);
}(1.67, 75);

let myBMI = bmi(1.67, 75);
console.log({myBMI, myBMI2});

