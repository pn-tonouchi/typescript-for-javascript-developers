export {};

const nextYaerSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
}

let salary = nextYaerSalary(500);
console.log({salary});
