export {};
console.log('\n' + __filename);

// Exclude: union型からある型だけ除外したい
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>; // SomeTypesから string | numberを除外する
type NonFUnctionType = Exclude<SomeTypes, DebugType>; // SomeTypesから DebugTypeを除外する

// 関数型を除外する場合の別解
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// Extract: 抽出
type FunctionTypeByExtruct = Extract<SomeTypes, DebugType>;
type FunctionTypeByExtruct2 = Extract<SomeTypes, Function>;
type FunctionTypeByExtruct3 = Extract<SomeTypes, boolean>; // 無いと neverになっている

// NonNullable: unionから null, undefinedを排除する
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

