export {};
console.log('\n' + __filename);

type Profile = {
  name: string;
  age: number;
}

const me: Profile = {
  name: 'Tono',
  age: 45,
};

me.age++;

console.log({me});

type PersonalDataType = Readonly<Profile>;

const me2: PersonalDataType = {
  name: 'Tono',
  age: 45,
};

//me2.age++; // error

console.log({me2});


