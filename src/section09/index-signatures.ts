export {};
console.log('\n' + __filename);

//let profile: { [index: string]: string | number } = {};
//  ↓
// how to write index signatures
// {[index: typeForIndex]: typeForValue}
interface Profile {
  underTewnty: boolean;
  [index: string]: string | number | boolean;
}
let profile: Profile = { name: 'tono', underTewnty: true };

profile.age = 19;
profile['a'] = 0;

console.log(profile);
