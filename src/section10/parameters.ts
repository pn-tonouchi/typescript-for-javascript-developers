export {};
console.log('\n' + __filename);

const debugProfile = (name: string, age: number) => {
  console.log({name, age});
}

debugProfile('Tono', 45);

type Profile = Parameters<typeof debugProfile>;

let profile: Profile = ['aaa', 100];
debugProfile(...profile);

