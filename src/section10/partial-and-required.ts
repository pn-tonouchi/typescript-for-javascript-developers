export {};
console.log('\n' + __filename);

// UtilityTypes TypeScriptが用意する標準的な型

type Profile = {
  name: string;
  age: number;
  zip?: number;
};

// Optionalにするには...

// 解１(あまりよくない)
type Profile2 = {
  name?: string;
  age?: number;
};

// 解
type PartialType = Partial<Profile>;

// 逆に必須にするには...
type RequiredType = Required<Profile>;

