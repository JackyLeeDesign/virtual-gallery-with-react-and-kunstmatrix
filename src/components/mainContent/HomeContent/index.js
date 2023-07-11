import React, { Suspense } from "react";
import "./index.css";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faVuejs,
  faFontAwesome,
  faFigma,
  faBootstrap,
  faMicrosoft,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MainContent = () => {
  return (
    <div className="virtual-gallery-container">
      <div className="virtual-gallery-iframe">
        <iframe allowfullscreen="true" frameborder="0" scrolling="no" src="https://art.kunstmatrix.com/apps/artspaces/?external=true&uid=92744&exhibition=11837676" width="100%" height="600"></iframe>
      </div>
    </div>
  );
};
export default MainContent;
