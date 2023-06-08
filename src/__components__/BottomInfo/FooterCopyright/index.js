import React from "react";
import style from "./index.css";
import PropTypes from "prop-types";
const FooterCopyright = props => {
  return <div className={style.footer_copyright}>{props.children}</div>;
};
FooterCopyright.propTypes = {
  children: PropTypes.node
};
export default FooterCopyright;
