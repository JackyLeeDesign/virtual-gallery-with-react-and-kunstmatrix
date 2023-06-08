import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GameCardStore from "../../../store/GameCardStore";
configure({ adapter: new Adapter() });
import React from "react";
import BadgeText from "../../common/BadgeText";
import GameCard from "../GameCard";
import Card from "../GameCard/Card";
import getRandom from "../../../util/getRandom";
import {
  jsxEmptyExpression,
  tsConstructSignatureDeclaration
} from "@babel/types";
import { resolve } from "dns";
describe("GameCard:UI Test", () => {
  // 測試 PicCard 畫面
  test("UI test", () => {
    const gameCardStore = new GameCardStore();
    const wrapper = mount(<GameCard gameCardStore={gameCardStore} />);
    // 開始測試
    expect(wrapper.find(Card)).toHaveLength(16);
    expect(wrapper.find(".gameArea")).toHaveLength(1);
    expect(wrapper.find(BadgeText)).toHaveLength(1);
  });
});
describe("GameCard:Action Test", () => {
  // 測試 PicCard style 樣式選擇
  test("Start Click test", () => {
    const gameCardStore = new GameCardStore();
    const wrapper = mount(<GameCard gameCardStore={gameCardStore} />);
    // 點擊開始遊戲，所有卡片翻至背面
    expect(wrapper.find(".white")).toHaveLength(0);
    wrapper.find(BadgeText).simulate("click");
    expect(wrapper.find(".white")).toHaveLength(16);
    // 再次點擊，遊戲結束，所有卡片翻至正面
    wrapper.find(BadgeText).simulate("click");
    expect(wrapper.find(".white")).toHaveLength(0);
  });
  test("One Card Click test", () => {
    const gameCardStore = new GameCardStore();
    const wrapper = mount(<GameCard gameCardStore={gameCardStore} />);
    // 點擊隨機一張卡牌，顯示其對應顏色
    let randomNum = getRandom(15);
    let randomCard = wrapper.find(Card).at(randomNum);
    // 點擊開始
    wrapper.find(BadgeText).simulate("click");
    randomCard = wrapper.find(Card).at(randomNum);
    expect(randomCard.find(".white")).toHaveLength(1);
    // 點擊第一次翻開該卡
    randomCard.simulate("click");
    randomCard = wrapper.find(Card).at(randomNum);
    expect(randomCard.find(".white")).toHaveLength(0);
    // 點擊第二次覆蓋該卡
    randomCard.simulate("click");
    randomCard = wrapper.find(Card).at(randomNum);
    expect(randomCard.find(".white")).toHaveLength(1);
    wrapper.find(BadgeText).simulate("click");
  });
  test("Cards Click Success test", () => {
    const gameCardStore = new GameCardStore();
    gameCardStore.testFlag = true;
    const wrapper = mount(<GameCard gameCardStore={gameCardStore} />);
    expect(wrapper.find(".show")).toHaveLength(0);
    // 遊戲開始
    wrapper.find(BadgeText).simulate("click");
    expect(wrapper.find(".white")).toHaveLength(16);
    let selectCard;
    for (let i = 0; i <= 15; i++) {
      selectCard = wrapper.find(Card).at(i);
      selectCard.simulate("click");
      for (let j = 0; j <= 15; j++) {
        if (i != j) {
          selectCard = wrapper.find(Card).at(j);
          selectCard.simulate("click");
          selectCard = wrapper.find(Card).at(i);
          selectCard.simulate("click");
        }
      }
    }
    expect(wrapper.find(".white")).toHaveLength(0);
    expect(wrapper.find(".show")).toHaveLength(1);
    wrapper.find(BadgeText).simulate("click");
    gameCardStore.testFlag = false;
  });
});
describe("GameCard:setTime Test", () => {
  test("Two Cards Click", async () => {
    const gameCardStore = new GameCardStore();
    const fackPromise = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
    const wrapper = mount(<GameCard gameCardStore={gameCardStore} />);
    wrapper.find(BadgeText).simulate("click");
    // 點擊第一張卡
    let randomNum = getRandom(15);
    let randomCard = wrapper.find(Card).at(randomNum);
    randomCard.simulate("click");
    // 點擊第二張卡
    let randomNum1 = getRandom(15);
    if (randomNum !== randomNum1) {
      randomCard = wrapper.find(Card).at(randomNum1);
      randomCard.simulate("click");
      await fackPromise();
      wrapper.update();
      randomCard = wrapper.find(Card).at(randomNum1);
      expect(randomCard.find(".white")).toHaveLength(
        gameCardStore.successState[randomNum1] ? 0 : 1
      );
    }
    wrapper.find(BadgeText).simulate("click");
  });
  // test("unMount", async () => {
  //   const gameCardStore = new GameCardStore();
  //   const wrapper = mount(<GameCard gameCardStore={gameCardStore} />);
  //   wrapper.unmount();
  //   const componentWillUnmount = jest.fn();
  //   expect(componentWillUnmount).toHaveBeenCalled(1);
  // });
});
