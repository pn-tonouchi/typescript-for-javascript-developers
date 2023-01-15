export {};
console.log('\n' + __filename);

type Profile = {
  name: string;
  age: number;
}

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

// ↓Partial型の定義↓
type Optional<T> = {
  [P in keyof T]?: T[P];
};
type Optional2<T> = {
  [P in keyof T]?: T[P] | null; // null許容
};

type OptionalProfile = Optional<Profile>;
type Optional2Profile = Optional2<Profile>;


