import { observable, computed, action, reaction } from "mobx";
class GameCardStore {
  // 戲是否開始
  @observable startGameState = false;
  // 是否顯示成功訊息
  @observable successText = false;
  // 所有未成功卡牌翻面旗標
  @observable closeCardFlag = false;
  // 測試用變數
  @observable testFlag = false;
  // 遊戲是否已完成
  @computed get EndGame() {
    return !this.successState.includes(false);
  }
  // 初始遊戲顏色陣列
  @observable valueState = [1, 7, 6, 5, 2, 4, 0, 3, 0, 4, 3, 1, 5, 6, 2, 7];
  @observable cardState = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ];
  @observable successState = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ];
  @computed get cardStyle() {
    return this.cardState;
  }
  @computed get value() {
    return this.valueState;
  }
  @computed get startGameBool() {
    return this.startGameState;
  }
  @computed get closeCardFlagStyle() {
    return this.closeCardFlag;
  }
  @action setcloseCardFlag = () => {
    this.closeCardFlag = false;
  };
  @action endGame = () => {
    if (this.startGameState) {
      this.successState.fill(false);
      this.cardState.fill(false);
      this.startGameState = true;
      this.successText = false;
    }
  };
  // 開始與結束按鈕
  @action startAndEndGame = () => {
    if (!this.startGameState) {
      this.successState.fill(false);
      this.cardState.fill(false);
      this.startGameState = true;
      this.successText = false;
    } else {
      this.successState.fill(true);
      this.cardState.fill(true);
      this.startGameState = false;
    }
  };
  @action changeCardState = (input) => {
    if (!this.successState[input]) {
      this.cardState[input] = !this.cardState[input];
    }
  };
  // var promise1 = new Promise(function(resolve, reject) {
  //   setTimeout(function() {
  //     resolve('foo');
  //   }, 1000);
  // });
  @action closeCard = () => {
    this.cardState.forEach((value, index) => {
      if (this.successState[index] == false) {
        this.cardState[index] = false;
      }
    });
  };
  reaction1 = reaction(
    () => this.cardState.map(() => {}),
    (input) => {
      if (this.startGameBool && !this.EndGame) {
        let countOpen = 0;
        let preClickItem;
        this.cardState.some((element, index) => {
          if (element && !this.successState[index]) {
            countOpen += 1;
            // 找到第一張開啟的卡片時，儲存該張卡片狀態
            if (countOpen == 1) {
              preClickItem = index;
            }
            // 找到第二張開啟的卡片時，與第一張卡片比較
            if (countOpen == 2) {
              if (this.valueState[preClickItem] == this.valueState[index]) {
                this.successState[preClickItem] = true;
                this.successState[index] = true;
                countOpen = 0;
                if (this.EndGame) {
                  this.successText = true;
                  this.startGameState = false;
                }
                return true;
              } else {
                this.closeCardFlag = true;
                countOpen = 0;
                return true;
              }
            }
          }
        });
      }
    }
  );
}
export default GameCardStore;
