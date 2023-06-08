import { observable, computed, action, reaction } from "mobx";
class ChangePageStore {
  @observable showPage = 0;
  @observable topIconState = false;
  @observable scrollyState = 0;
  @computed get page() {
    return this.showPage;
  }
  @action changeState = input => {
    this.showPage = input;
  };

  // Scroll改變 => 顯示或隱藏 sideIcon
  @computed get scrollyValue() {
    return this.scrollyState;
  }
  @computed get topIconDisplay() {
    return this.topIconState;
  }

  @action changeScrollyValue = input => {
    this.scrollyState = input;
  };
  reaction1 = reaction(
    () => this.scrollyState,
    input => {
      if (input <= 10) {
        this.topIconState = false;
      } else {
        this.topIconState = true;
      }
    }
  );
}
export default ChangePageStore;
