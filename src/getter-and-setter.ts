export {};

// * owner
//   * 所有者
//   * 初期化時に設定できる
//   * 読み取り専用、参照可能
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる
//   * 更新可能、参照不可

class MyNumberCard{
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number){
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  //#region getter, setter
  get owner() {
    return this._owner;
  }
  set secretNumber(value: number) {
    this._secretNumber = value;
  }
  //#endregion
}

const card = new MyNumberCard('Tono', 123456);
console.log({card, owner: card.owner, secretNumber: card.secretNumber});

//card.owner = 'Who';
card.secretNumber = 456789;
console.log({card, owner: card.owner, secretNumber: card.secretNumber});

