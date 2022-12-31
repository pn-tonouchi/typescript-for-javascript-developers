export {};

const sum = (...values: number[]): number => {
//  let result = 0;
//  values.forEach(value => {
//    result += value;
//  });
//  return result;

  const reducer = (accumulator: number, currentValue: number): number => {
    return accumulator + currentValue;
  }
  return values.reduce(reducer);
}

const value = sum(1, 2, 3, 4, 5);
console.log({value});


