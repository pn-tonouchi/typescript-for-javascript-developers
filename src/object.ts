export{}

let profile1: object = { name: 'Tono' };
profile1 = { birthYear: 1977 }; // updateしてしまっているけど気が付かないかも！

let profile2: { 
  name: string;
} = { name: 'Tono' };
profile2 = { name: 'Tonouchi' };

console.log({ profile1, profile2 });
