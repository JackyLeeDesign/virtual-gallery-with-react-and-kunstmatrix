import React, { Suspense } from "react";
import "./index.css";
import MusicPlayer from "../../MusicPlayer";
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
// 獲取螢幕高度
const windowHeight = window.innerHeight;

const MainContent = () => {
  return (
    <div className="virtual-gallery-container">
      <div className="virtual-gallery-iframe">
        <MusicPlayer />
        <iframe
          allowFullScreen="true"
          frameBorder="0"
          scrolling="no"
          src="https://art.kunstmatrix.com/apps/artspaces/?external=true&uid=92744&exhibition=11837676"
          width="100%"
          style={{ height: `${windowHeight}px` }}
        ></iframe>
      </div>
    </div>
  );
};
export default MainContent;
