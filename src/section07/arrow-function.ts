export {};
console.log('\n' + __filename);

let bmi = (height: number, weight: number): number => {
  return weight / (height * height);
};

let bmi2: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / (height * height);
};

let bmi3: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

let myBMI = bmi(1.67, 75);
console.log({myBMI});

