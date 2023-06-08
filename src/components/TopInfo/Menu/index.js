import React, { Component } from "react";
// get our fontawesome imports
import {
  faMedal,
  faEnvelopeOpenText,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { CgPiano, CgMusic } from "react-icons/Cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./index.css";
import { inject, observer } from "mobx-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

@observer
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { openJackyAndJungClickTimes: 0 };
  }

  render() {
    const { changePageStore, name } = this.props;
    return (
      <div>
        <div className={style.topbar}>
          <div className={style.pointercurserLeft}>
            <Link to="/mine">
              <FontAwesomeIcon icon={faMedal} className={style.TopAnimate} />
            </Link>
          </div>
          <div
            className={style.pointercurserLeft}
            onClick={() => {
              changePageStore.changeState(0);
            }}
          >
            {name}
          </div>
          <div className={style.pointercurserRight}>
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              onClick={() => changePageStore.changeState(1)}
            />
          </div>
          {/* <div className={style.pointercurserRight}>
            <CgPiano onClick={() => changePageStore.changeState(2)} />
          </div>
          <div className={style.pointercurserRight}>
            <CgMusic onClick={() => changePageStore.changeState(3)} />
          </div> */}

          <div className={style.clear} />
          <div
            className={style.meterleft}
            style={{ width: changePageStore.scrollyValue + "%" }}
          />
          <div
            className={style.meterright}
            style={{ width: 100 - changePageStore.scrollyValue + "%" }}
          />
          <div className={style.clear} />
        </div>
        <div className={style.topblock} />
      </div>
    );
  }
}
Menu.propTypes = {
  // An object taking on a particular shape
  changePageStore: PropTypes.shape({
    showPage: PropTypes.number,
    page: PropTypes.number,
    changeState: PropTypes.func,
  }),
  name: PropTypes.string,
};
export default inject("changePageStore")(observer(Menu));
