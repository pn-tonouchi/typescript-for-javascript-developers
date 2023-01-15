export {};
console.log('\n' + __filename);

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
}

// ここから必要なプロパティを取り出す
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
let profile: SimpleProfile = {name: 'tono', weight: 75};
console.log({profile});

// 逆に要らないプロパティを指定する
type SimpleProfile2 = Omit<DetailedProfile, 'name' | 'weight'>;
let profile2: SimpleProfile2 = {height: 167.1 };
console.log({profile2});
