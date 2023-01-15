export {};
console.log('\n' + __filename);

//type Exclude<T, U> = T extends U ? never : T;

// ↓ 展開すると
//type MyExclude = 
//(string extends string | number ? never : string)
//| (number extends string | number ? never : number)
//| (DebugType extends string | number ? never : DebugType);

// ↓ 評価すると
//type MyExclude = 
// never
//| never
//| DebugType;

// ↓ すなわち
//type MyExclude = DebugType;


// Exclude: union型からある型だけ除外したい
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>; // SomeTypesから string | numberを除外する
//type MyFunctionType = MyExclude;

// Extract: 抽出
type FunctionTypeByExtruct = Extract<SomeTypes, DebugType>;

// NonNullable: unionから null, undefinedを排除する
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

// これ書ける
console.log({
    true: true ? '1' : '0',
    false: false ? '1': '0'
  });
