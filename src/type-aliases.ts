export{}

type Mojiretsu = string; // 別名は先頭大文字にする決まり
const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';
console.log({fooString, fooMojiretsu});

type Profile = {
  name: string;
  age: number;
};
const example1: Profile = {
  name: 'Tono',
  age: 2022-1977,
};

type Profile2 = typeof example1;
const example2: Profile2 = {
  name: 'Tono',
  age: 2022-1977,
};
console.log({example1, example2});
