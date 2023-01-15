export {};
console.log('\n' + __filename);

enum Months {
  January = 1, 
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
  Unknown = '(unknown)',
}

let month: Months = Months.January;
month = Months.July;
console.log({month});


enum Colors {
  Red = '#FF0000',
  Green = '#00FF00',
  Blue = '#0000FF',
  White = '#FFFFFF',
  Black = '#000000',
}

let color = Colors.Red;
console.log({color});

// append
enum Colors {
  Yellow = '#FFFF00',
}
color = Colors.Yellow;
console.log({color});

