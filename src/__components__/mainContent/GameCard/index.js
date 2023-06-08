import React, { Fragment } from "react";
import style from "./index.css";
import Card from "./Card";
import { observer } from "mobx-react";
import BadgeText from "../../common/BadgeText";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MultipleStyle from "classnames";

class GameArea extends React.Component {
  componentWillUnmount() {
    clearTimeout(this.closeTimeOut);
    this.props.gameCardStore.reaction1();
  }

  render() {
    const { gameCardStore } = this.props;
    const closeCard = () =>
      new Promise((resolve, reject) => {
        this.closeTimeOut = setTimeout(() => {
          gameCardStore.closeCard();
          gameCardStore.setcloseCardFlag();
          resolve(true);
        }, 1000);
      });
    const selectCardStyle = (colorValue, openOrClose) => {
      if (openOrClose) {
        switch (colorValue) {
          case 0:
            return style.red;
          case 1:
            return style.orange;
          case 2:
            return style.yellow;
          case 3:
            return style.green;
          case 4:
            return style.blue;
          case 5:
            return style.purple;
          case 6:
            return style.gray;
          case 7:
            return style.darkgray;
        }
      } else {
        return style.white;
      }
    };
    const cardItems = gameCardStore.value.map((value, index, arr) => {
      if ((index + 1) % 4 == 0 || index + 1 == arr.length) {
        return (
          <Fragment key={index}>
            <Card
              cardStyle={selectCardStyle(value, gameCardStore.cardStyle[index])}
              key={index}
              clickFnc={() => {
                gameCardStore.changeCardState(index);
                if (gameCardStore.closeCardFlagStyle) {
                  if (!gameCardStore.testFlag) {
                    closeCard();
                  } else {
                    gameCardStore.closeCard();
                    gameCardStore.setcloseCardFlag();
                  }
                }
              }}
            />
            <br />
          </Fragment>
        );
      } else {
        return (
          <Fragment key={index}>
            <Card
              cardStyle={selectCardStyle(value, gameCardStore.cardStyle[index])}
              key={index}
              clickFnc={() => {
                gameCardStore.changeCardState(index);
                if (gameCardStore.closeCardFlagStyle) {
                  if (!gameCardStore.testFlag) {
                    closeCard();
                  } else {
                    gameCardStore.closeCard();
                    gameCardStore.setcloseCardFlag();
                  }
                }
              }}
            />
          </Fragment>
        );
      }
    });
    return (
      <div className={style.gameArea}>
        <div
          className={MultipleStyle(
            style.successText,
            gameCardStore.successText ? style.show : style.hide
          )}
        >
          Success !
        </div>
        {cardItems}
        <BadgeText
          color="green"
          title={<FontAwesomeIcon icon={faCaretRight} />}
          text={gameCardStore.startGameBool ? "End Game" : "Start Game"}
          onClick={gameCardStore.startAndEndGame}
        />
      </div>
    );
  }
}
export default observer(GameArea);
