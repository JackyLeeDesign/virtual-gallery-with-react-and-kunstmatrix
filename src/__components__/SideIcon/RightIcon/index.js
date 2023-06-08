import React from "react";
import {
  faHome,
  faArrowAltCircleUp
  // faArrowAltCircleLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./index.css";
import { inject, observer } from "mobx-react";
import PropTypes from "prop-types";
import MultipleStyle from "classnames";
const RightIcon = props => {
  const { changePageStore } = props;
  return (
    <div className={style.rightarea}>
      <div title="Go to Top">
        <FontAwesomeIcon
          className={MultipleStyle(
            style.fali,
            changePageStore.topIconDisplay ? style.display : style.ndisplay
          )}
          icon={faArrowAltCircleUp}
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        />
      </div>
      {/* <div>
        <FontAwesomeIcon className={style.fali} icon={faArrowAltCircleLeft} />
      </div> */}
      <div>
        <FontAwesomeIcon
          className={style.fali}
          icon={faHome}
          onClick={() => changePageStore.changeState(0)}
        />
      </div>
    </div>
  );
};
RightIcon.propTypes = {
  // An object taking on a particular shape
  changePageStore: PropTypes.shape({
    showPage: PropTypes.number,
    page: PropTypes.number,
    changeState: PropTypes.func
  })
};
export default inject("changePageStore")(observer(RightIcon));
