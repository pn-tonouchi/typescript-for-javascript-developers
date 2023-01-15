export {};
console.log('\n' + __filename);

// ２つのジェネリクスの型引数を持つ特殊な型
// Record<K, T>

type Prefectures = 'Tokyo' | 'Kanagawa' | 'Saitama' | 'Chiba';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 10000 },
  Kanagawa: { kanji_name: '神奈川', confirmed_cases: 3730 },
  Saitama: { kanji_name: '埼玉', confirmed_cases: 3120 },
  Chiba: { kanji_name: '千葉', confirmed_cases: true }, // エラーが出ない
};
console.log({covid19Japan});

// 型定義すると...
//const covid19Japan: {
//  Tokyo:Covid19InfectionInfo;
//  Kanagawa:Covid19InfectionInfo;
//  Saitama:Covid19InfectionInfo;
//  Chiba:Covid19InfectionInfo;
//  Shiga:Covid19InfectionInfo;
//} = {
//  Tokyo: { kanji_name: '東京', confirmed_cases: 10000 },
//  Kanagawa: { kanji_name: '神奈川', confirmed_cases: 3730 },
//  Saitama: { kanji_name: '埼玉', confirmed_cases: 3120 },
//  Chiba: { kanji_name: '千葉', confirmed_cases: true }, // エラーにはなるが...
//};

const covid19Record: Record<Prefectures, Covid19InfectionInfo> ={
  Tokyo: { kanji_name: '東京', confirmed_cases: 10000 },
  Kanagawa: { kanji_name: '神奈川', confirmed_cases: 3730 },
  Saitama: { kanji_name: '埼玉', confirmed_cases: 3120 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 48 },
};
console.log({covid19Record});




