export {};

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

let myBMI = bmi(1.67, 75);
console.log({myBMI});

// bmi(身長, 体重, console.log出力有無)
let bmi2: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean // default undefined
): number =>
{
  let bmi = weight / (height * height);

  if (printable) {
    console.log({bmi});
  }

  return bmi;
}

bmi2(1.67, 75);
