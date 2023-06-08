import React from "react";
import SectionContent from "../SectionContent";
import PicAndInfo from "../PicAndInfo";
import ContactForm from "../ContactForm";
import userPic from "../../../../assets/images/userPic.png";
const MainContent = () => {
  return (
    <div>
      <div className="wd80 ml10">
        <SectionContent TextCss="text_pink_" Title="About Me">
          <PicAndInfo pic={userPic}>
            <font className="darkgray">2015/09 - 2016/09</font>
            <br />
            楊孟翰教授個人網頁、實驗室網頁設計開發與維護
            <br />
            <br />
            <font className="darkgray">2016/07 - 2016/09</font>
            <br />
            旭浩官網開發維護
            <br />
            <br />
            <font className="darkgray">2016/07 - 2016/09</font>　
            <br />
            網路爬蟲系統開發
            <br />
            <br />
            <font className="darkgray">2016/10 - 2017/12</font>　
            <br />
            行政院科技部-災害防救應用科技方案 **內部評鑑獲得優選** 　
            <br />
            <br />
            <font className="darkgray">2017/01 - 2017/03</font>
            <br />
            普比亞官網開發
            <br />
            <br />
            <font className="darkgray">2017/02 - 2017/02</font>
            <br />
            行政院災害防救專家諮詢委員會 網頁美編設計
            <br />
            <br />
            <font className="darkgray">2017/03 - 2017/05</font>
            <br />
            愛家好物集網頁開發
            <br />
            <br />
            <font className="darkgray">2017/06 - 2017/06</font>
            <br />
            3D展覽館 網頁美編設計
            <br />
            <br />
            <font className="darkgray">2018/06 - 2019/06</font>
            <br />
            勞保局NDR+FTP收寄信系統
            <br />
            勞保局批次申報系統(vb轉.net)
            <br />
            台中科博館讀寫卡系統
            <br />
            勞保局網頁前端維護(html、css跨平台修改)
            <br />
            <br />
          </PicAndInfo>
        </SectionContent>
        <SectionContent TextCss="text_orange" Title="Contact Me">
          <ContactForm />
        </SectionContent>
      </div>
    </div>
  );
};
export default MainContent;
