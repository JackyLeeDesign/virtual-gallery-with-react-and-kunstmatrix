import React, { Suspense } from "react";
import GameCardStore from "../../../store/GameCardStore";
import SectionContent from "../SectionContent";
import AnimationBanner from "../animationBanner/BannerStyle1";
import AnimationBanner2 from "../animationBanner/BannerStyle2";
import BadgeText from "../../common/BadgeText";
import PicGallery from "../PicGallery";
import GameCard from "../GameCard";
import banner01 from "../../../../assets/images/banner01.png";
import draw00 from "../../../../assets/images/draw00.png";
import draw01 from "../../../../assets/images/draw01.jpg";
import draw02 from "../../../../assets/images/draw02.png";
import draw03 from "../../../../assets/images/draw03.jpg";
import draw04 from "../../../../assets/images/draw04.png";
import draw05 from "../../../../assets/images/draw05.jpg";
import draw06 from "../../../../assets/images/draw06.png";
import draw07 from "../../../../assets/images/draw07.png";
import draw08 from "../../../../assets/images/draw08.png";
import draw09 from "../../../../assets/images/draw09.png";
import draw10 from "../../../../assets/images/draw10.png";
import draw11 from "../../../../assets/images/draw11.png";
import draw12 from "../../../../assets/images/draw12.png";
import draw13 from "../../../../assets/images/draw13.png";
import draw14 from "../../../../assets/images/draw14.png";
import draw15 from "../../../../assets/images/draw15.jpg";
import draw16 from "../../../../assets/images/draw16.jpg";
import draw17 from "../../../../assets/images/draw17.png";
import draw18 from "../../../../assets/images/draw18.png";
import draw19 from "../../../../assets/images/draw19.png";
import draw20 from "../../../../assets/images/draw20.png";
import draw21 from "../../../../assets/images/draw21.jpg";
import draw22 from "../../../../assets/images/draw22.png";
import draw23 from "../../../../assets/images/draw23.png";
import draw24 from "../../../../assets/images/draw24.png";
import draw25 from "../../../../assets/images/draw25.jpg";
import draw26 from "../../../../assets/images/draw26.jpg";
import draw27 from "../../../../assets/images/draw27.png";
import draw28 from "../../../../assets/images/draw28.png";
import draw29 from "../../../../assets/images/draw29.jpg";
import draw30 from "../../../../assets/images/draw30.png";
import draw31 from "../../../../assets/images/draw31.jpg";
import draw32 from "../../../../assets/images/draw32.jpg";
import draw33 from "../../../../assets/images/draw33.jpg";
import draw34 from "../../../../assets/images/draw34.png";
import web01 from "../../../../assets/images/web01.png";
import web02 from "../../../../assets/images/web02.png";
import web03 from "../../../../assets/images/web03.png";
// import web04 from "../../../assets/images/web04.png";
import web05 from "../../../../assets/images/web05.png";
import web06 from "../../../../assets/images/web06.png";
import web07 from "../../../../assets/images/web07.png";
import web08 from "../../../../assets/images/web08.png";
import web09 from "../../../../assets/images/web09.png";
import web10 from "../../../../assets/images/web10.png";
import web11 from "../../../../assets/images/web11.png";
import web12 from "../../../../assets/images/web12.png";
// import game01 from "../../../../assets/images/game01.png";
import award01 from "../../../../assets/images/award01.png";
import award02 from "../../../../assets/images/award02.png";
import award03 from "../../../../assets/images/award03.png";
import ico_Balsamiq from "../../../../assets/images/ico_Balsamiq.png";
import ico_csharp from "../../../../assets/images/ico_csharp.png";
import ico_sai from "../../../../assets/images/ico_sai.png";
import ico_jest from "../../../../assets/images/ico_jest.png";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import YouTube from "react-youtube";
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
const gameCardStore = new GameCardStore();
const MainContent = () => {
  return (
    <div>
      <PicGallery pics={[banner01]} picStyle={1} />
      <div className="wd80 ml10">
        <SectionContent
          TextCss="text_pink_"
          Title="I Am A Coder Programmer I Write Code"
        >
          <div>
            <AnimationBanner2 />
            I am a full-stack engineer. <br />
            Enjoy simplifying complex tasks and automating tedious work using
            digital tools to save costs. <br />
            I have experience in Python, C#.NET, VB, Vue, and React development,
            and have developed OCR recognition systems, web crawlers, automatic
            email systems, Oracle Netsuite ERP membership and sales tax systems.
            <br />
            I have also assisted clients with web design, banner creation, and
            illustration. Additionally, I use digital tools such as Alteryx
            (data automation) and UIPath (process automation) to assist and
            solve business problems. <br />
            My interests include studying finance, graphics, and programming,
            and combining knowledge from these three areas to solve real-life
            problems.
            <br />
            <br />
            我是一位全端工程師。
            <br />
            喜歡將複雜的事情變簡單，將繁雜瑣碎的工作自動化，透過數位工具取代人力，節省成本。
            <br />
            有 Python、C# .net、VB、Vue、React 開發經驗，曾撰寫過 OCR
            辨識系統、網路爬蟲與自動寄信系統、Oracle Netsuite ERP
            會員與營業稅系統開發，協助客戶進行網頁設計、網頁 banner 或插圖繪製。
            <br />
            興趣是研究財會、繪圖與程式開發，透過這三個領域的知識結合，解決生活上的問題。
            <br />
            <br />
            <a
              href="mailto:jackyleeidea@gmail.com"
              style={{
                color: "#919191",
                fontFamily: "Neucha",
              }}
            >
              email : jackyleeidea@gmail.com
            </a>
          </div>
        </SectionContent>
        <SectionContent TextCss="text_orange" Title="My Skills">
          <BadgeText
            color="red"
            title={<FontAwesomeIcon icon={faHtml5} />}
            text="Html5"
          />
          <BadgeText
            color="orange"
            title={<FontAwesomeIcon icon={faCss3} />}
            text="Css3"
          />
          <BadgeText
            color="yellow"
            title={<FontAwesomeIcon icon={faBootstrap} />}
            text="Bootstrap"
          />
          <BadgeText
            color="green"
            title={<FontAwesomeIcon icon={faJs} />}
            text="Javascript"
          />
          <BadgeText
            color="blue"
            title={<FontAwesomeIcon icon={faMicrosoft} />}
            text="C#"
          />
          <BadgeText
            color="cyan"
            title={<FontAwesomeIcon icon={faReact} />}
            text="React"
          />
          <BadgeText
            color="purple"
            title={<FontAwesomeIcon icon={faVuejs} />}
            text="Vue"
          />
          <BadgeText
            color="gray"
            title={<img src={ico_jest} style={{ width: 1 + "em" }} />}
            text="Jest"
          />
          <BadgeText
            color="red"
            title={<img src={ico_sai} style={{ width: 1 + "em" }} />}
            text="Sai"
          />
          <BadgeText
            color="orange"
            title={<img src={ico_Balsamiq} style={{ width: 1 + "em" }} />}
            text="Balsamiq"
          />
          <BadgeText
            color="yellow"
            title={<FontAwesomeIcon icon={faFigma} />}
            text="Figma、Illustrator、Photoshop"
          />
        </SectionContent>
        <SectionContent TextCss="text_green" Title="My Works">
          <div>
            <AnimationBanner />
            <div className="fr">
              <FontAwesomeIcon icon={faAngleUp} />
              　css animation
            </div>
            <br />
            <div className="darkgray">Web Design：</div>
            <PicGallery pics={[web01, web02]} picStyle={2} />
            <PicGallery pics={[web03]} picStyle={2} />
            <PicGallery pics={[web05, web06]} picStyle={4} />
            <PicGallery
              pics={[web07, web08, web09, web10, web11, web12]}
              picStyle={2}
            />
          </div>
          <br />
          <div className="darkgray">Graphic Design：</div>
          <br />
          <PicGallery
            pics={[
              draw00,
              draw01,
              draw02,
              draw03,
              draw04,
              draw05,
              draw06,
              draw07,
              draw08,
              draw09,
              draw10,
              draw11,
              draw12,
              draw13,
              draw14,
              draw15,
              draw16,
              draw17,
              draw18,
              draw19,
              draw20,
              draw21,
              draw22,
              draw23,
              draw24,
              draw25,
              draw26,
              draw27,
              draw28,
              draw29,
              draw30,
              draw31,
              draw32,
              draw33,
              draw34,
            ]}
            picStyle={4}
          />
          <br />
          <div className="darkgray">Game Design：</div>
          <br />
          <div>
            Game(made by Python)：
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
          <YouTube videoId="hNy5Ff5Yca0" />
          <br></br>
          <br></br>
          <div>
            Installation art(DEMO)：
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
          <YouTube videoId="oTOvg4c154E" />
          {/* <GameCard gameCardStore={gameCardStore} /> */}
          <br />
        </SectionContent>
        <SectionContent TextCss="text_blue" Title="Awards">
          <PicGallery pics={[award01, award02]} picStyle={3} />
          <PicGallery pics={[award03]} picStyle={4} />
        </SectionContent>
      </div>
    </div>
  );
};
export default MainContent;
