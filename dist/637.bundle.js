"use strict";(self.webpackChunkjackylee=self.webpackChunkjackylee||[]).push([[637],{9637:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_t});var a,r,s,i,c,o,l,m,d,p,g,u,_,y=n(7294),x=n(3269),h=n(5671),C=n(9466),B=n(3229),b=n(2188);const E=(a=function(){function e(){(0,h.Z)(this,e),(0,x.Z)(this,"startGameState",r,this),(0,x.Z)(this,"successText",s,this),(0,x.Z)(this,"closeCardFlag",i,this),(0,x.Z)(this,"testFlag",c,this),(0,x.Z)(this,"valueState",o,this),(0,x.Z)(this,"cardState",l,this),(0,x.Z)(this,"successState",m,this),(0,x.Z)(this,"setcloseCardFlag",d,this),(0,x.Z)(this,"endGame",p,this),(0,x.Z)(this,"startAndEndGame",g,this),(0,x.Z)(this,"changeCardState",u,this),(0,x.Z)(this,"closeCard",_,this),this.reaction1=(0,b.U5)((()=>this.cardState.map((()=>{}))),(e=>{if(this.startGameBool&&!this.EndGame){let e,t=0;this.cardState.some(((n,a)=>{if(n&&!this.successState[a]&&(t+=1,1==t&&(e=a),2==t))return this.valueState[e]==this.valueState[a]?(this.successState[e]=!0,this.successState[a]=!0,t=0,this.EndGame&&(this.successText=!0,this.startGameState=!1),!0):(this.closeCardFlag=!0,t=0,!0)}))}}))}return(0,C.Z)(e,[{key:"EndGame",get:function(){return!this.successState.includes(!1)}},{key:"cardStyle",get:function(){return this.cardState}},{key:"value",get:function(){return this.valueState}},{key:"startGameBool",get:function(){return this.startGameState}},{key:"closeCardFlagStyle",get:function(){return this.closeCardFlag}}]),e}(),r=(0,B.Z)(a.prototype,"startGameState",[b.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),s=(0,B.Z)(a.prototype,"successText",[b.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),i=(0,B.Z)(a.prototype,"closeCardFlag",[b.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),c=(0,B.Z)(a.prototype,"testFlag",[b.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),(0,B.Z)(a.prototype,"EndGame",[b.Fl],Object.getOwnPropertyDescriptor(a.prototype,"EndGame"),a.prototype),o=(0,B.Z)(a.prototype,"valueState",[b.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[1,7,6,5,2,4,0,3,0,4,3,1,5,6,2,7]}}),l=(0,B.Z)(a.prototype,"cardState",[b.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0]}}),m=(0,B.Z)(a.prototype,"successState",[b.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0]}}),(0,B.Z)(a.prototype,"cardStyle",[b.Fl],Object.getOwnPropertyDescriptor(a.prototype,"cardStyle"),a.prototype),(0,B.Z)(a.prototype,"value",[b.Fl],Object.getOwnPropertyDescriptor(a.prototype,"value"),a.prototype),(0,B.Z)(a.prototype,"startGameBool",[b.Fl],Object.getOwnPropertyDescriptor(a.prototype,"startGameBool"),a.prototype),(0,B.Z)(a.prototype,"closeCardFlagStyle",[b.Fl],Object.getOwnPropertyDescriptor(a.prototype,"closeCardFlagStyle"),a.prototype),d=(0,B.Z)(a.prototype,"setcloseCardFlag",[b.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return()=>{this.closeCardFlag=!1}}}),p=(0,B.Z)(a.prototype,"endGame",[b.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return()=>{this.startGameState&&(this.successState.fill(!1),this.cardState.fill(!1),this.startGameState=!0,this.successText=!1)}}}),g=(0,B.Z)(a.prototype,"startAndEndGame",[b.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return()=>{this.startGameState?(this.successState.fill(!0),this.cardState.fill(!0),this.startGameState=!1):(this.successState.fill(!1),this.cardState.fill(!1),this.startGameState=!0,this.successText=!1)}}}),u=(0,B.Z)(a.prototype,"changeCardState",[b.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return e=>{this.successState[e]||(this.cardState[e]=!this.cardState[e])}}}),_=(0,B.Z)(a.prototype,"closeCard",[b.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return()=>{this.cardState.forEach(((e,t)=>{0==this.successState[t]&&(this.cardState[t]=!1)}))}}}),a);var Z=n(3058),S=n(7537);const w=n.p+"src/components/mainContent/animationBanner/BannerStyle1/assets/banner.png",f=n.p+"src/components/mainContent/animationBanner/BannerStyle1/assets/boy1.png",v=n.p+"src/components/mainContent/animationBanner/BannerStyle1/assets/boy2.png",G=n.p+"src/components/mainContent/animationBanner/BannerStyle1/assets/boy3.png",T=n.p+"src/components/mainContent/animationBanner/BannerStyle1/assets/girl1.png",k=n.p+"src/components/mainContent/animationBanner/BannerStyle1/assets/girl2.png",N=n.p+"src/components/mainContent/animationBanner/BannerStyle1/assets/girl3.png";var P=n(4184),W=n.n(P);const F=()=>y.createElement("div",{className:W()(S.Z.main_banner)},y.createElement("img",{className:S.Z.boy_1,src:f}),y.createElement("img",{className:S.Z.boy_2,src:v}),y.createElement("img",{className:S.Z.boy_3,src:G}),y.createElement("img",{className:S.Z.girl_1,src:T}),y.createElement("img",{className:S.Z.girl_2,src:k}),y.createElement("img",{className:S.Z.girl_3,src:N}),y.createElement("div",{className:S.Z.boy_2}),y.createElement("div",{className:S.Z.boy_3}),y.createElement("div",{className:S.Z.girl_1}),y.createElement("div",{className:S.Z.girl_2}),y.createElement("div",{className:S.Z.girl_3}),y.createElement("img",{className:S.Z.main_banner_img,src:w}));var O=n(4558);const j=n.p+"src/components/mainContent/animationBanner/BannerStyle2/assets/zindex2.png",R=n.p+"src/components/mainContent/animationBanner/BannerStyle2/assets/blackcloud.png",I=n.p+"src/components/mainContent/animationBanner/BannerStyle2/assets/cloud1.png",D=n.p+"src/components/mainContent/animationBanner/BannerStyle2/assets/cloud2.png",L=n.p+"src/components/mainContent/animationBanner/BannerStyle2/assets/cloud3.png",z=n.p+"src/components/mainContent/animationBanner/BannerStyle2/assets/car_pink.png",A=n.p+"src/components/mainContent/animationBanner/BannerStyle2/assets/car_blue.png",U=n.p+"src/components/mainContent/animationBanner/BannerStyle2/assets/car_orange.png",J=n.p+"src/components/mainContent/animationBanner/BannerStyle2/assets/car_white.png",V=n.p+"src/components/mainContent/animationBanner/BannerStyle2/assets/car_green.png",M=n.p+"src/components/mainContent/animationBanner/BannerStyle2/assets/zindex0.png",q=()=>y.createElement("div",{className:O.Z.main_banner},y.createElement("img",{className:O.Z.main_banner_img2,src:j}),y.createElement("img",{className:O.Z.blackcloud,src:R}),y.createElement("img",{className:O.Z.cloud1,src:I}),y.createElement("img",{className:O.Z.cloud2,src:D}),y.createElement("img",{className:O.Z.cloud3,src:L}),y.createElement("img",{className:O.Z.car_pink,src:z}),y.createElement("img",{className:O.Z.car_blue,src:A}),y.createElement("img",{className:O.Z.car_orange,src:U}),y.createElement("img",{className:O.Z.car_white,src:J}),y.createElement("img",{className:O.Z.car_green,src:V}),y.createElement("img",{className:O.Z.main_banner_img,src:M}));var K=n(9439),X=n(5697),H=n.n(X);const Y=e=>{switch(e){case"red":return K.Z.red;case"orange":return K.Z.orange;case"yellow":return K.Z.yellow;case"green":return K.Z.green;case"blue":return K.Z.blue;case"cyan":return K.Z.cyan;case"purple":return K.Z.purple;case"gray":default:return K.Z.gray;case"white":return K.Z.white;case"light":return K.Z.light;case"dark":return K.Z.dark}},Q=e=>y.createElement("span",{className:W()(K.Z.badge,Y(e.color),e.className),onClick:e.onClick},y.createElement("span",{className:K.Z.badgeBigText},e.title),e.text);Q.propTypes={color:H().string,title:H().node,text:H().string};const $=Q;var ee=n(9228);const te=e=>y.createElement("div",{className:W()(ee.Z.cardBox,(e=>{switch(e){case 1:default:return ee.Z.cardBoxWidth1;case 2:return ee.Z.cardBoxWidth2;case 3:return ee.Z.cardBoxWidth3;case 4:return ee.Z.cardBoxWidth4;case 5:return ee.Z.cardBoxWidth5;case 6:return ee.Z.cardBoxWidth6;case 7:return ee.Z.cardBoxWidth7;case 8:return ee.Z.cardBoxWidth8;case 9:return ee.Z.cardBoxWidth9;case 10:return ee.Z.cardBoxWidth10;case 11:return ee.Z.cardBoxWidth11;case 12:return ee.Z.cardBoxWidth12}})(e.picStyle))},y.createElement("div",{className:ee.Z.titleBox},e.title),y.createElement("div",{className:ee.Z.picBox},y.createElement("img",{src:e.pic})),y.createElement("div",{className:ee.Z.textBox},e.text));te.propTypes={pic:H().string};const ne=te,ae=e=>{let t=1;t=e.picStyle;const n=e.pics.map((e=>y.createElement(ne,{key:e.toString(),pic:e,picStyle:t})));return y.createElement(y.Fragment,null,n)};var re=n(9340),se=n(3930),ie=n(1120),ce=n(4012),oe=n(743);const le=e=>{const{cardStyle:t,clickFnc:n}=e;return y.createElement("div",{className:W()(oe.Z.cardDefault,t),onClick:n})};var me=n(798),de=n(1436),pe=n(7625);let ge=function(e){(0,re.Z)(r,e);var t,n,a=(t=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,ie.Z)(t);if(n){var r=(0,ie.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,se.Z)(this,e)});function r(){return(0,h.Z)(this,r),a.apply(this,arguments)}return(0,C.Z)(r,[{key:"componentWillUnmount",value:function(){clearTimeout(this.closeTimeOut),this.props.gameCardStore.reaction1()}},{key:"render",value:function(){const{gameCardStore:e}=this.props,t=()=>new Promise(((t,n)=>{this.closeTimeOut=setTimeout((()=>{e.closeCard(),e.setcloseCardFlag(),t(!0)}),1e3)})),n=(e,t)=>{if(!t)return ce.Z.white;switch(e){case 0:return ce.Z.red;case 1:return ce.Z.orange;case 2:return ce.Z.yellow;case 3:return ce.Z.green;case 4:return ce.Z.blue;case 5:return ce.Z.purple;case 6:return ce.Z.gray;case 7:return ce.Z.darkgray}},a=e.value.map(((a,r,s)=>(r+1)%4==0||r+1==s.length?y.createElement(y.Fragment,{key:r},y.createElement(le,{cardStyle:n(a,e.cardStyle[r]),key:r,clickFnc:()=>{e.changeCardState(r),e.closeCardFlagStyle&&(e.testFlag?(e.closeCard(),e.setcloseCardFlag()):t())}}),y.createElement("br",null)):y.createElement(y.Fragment,{key:r},y.createElement(le,{cardStyle:n(a,e.cardStyle[r]),key:r,clickFnc:()=>{e.changeCardState(r),e.closeCardFlagStyle&&(e.testFlag?(e.closeCard(),e.setcloseCardFlag()):t())}}))));return y.createElement("div",{className:ce.Z.gameArea},y.createElement("div",{className:W()(ce.Z.successText,e.successText?ce.Z.show:ce.Z.hide)},"Success !"),a,y.createElement($,{color:"green",title:y.createElement(pe.G,{icon:de.I4f}),text:e.startGameBool?"End Game":"Start Game",onClick:e.startAndEndGame}))}}]),r}(y.Component);(0,me.Pi)(ge);const ue=n.p+"assets/images/banner01.png",_e=n.p+"assets/images/draw00.png",ye=n.p+"assets/images/draw01.jpg",xe=n.p+"assets/images/draw02.png",he=n.p+"assets/images/draw03.jpg",Ce=n.p+"assets/images/draw04.png",Be=n.p+"assets/images/draw05.jpg",be=n.p+"assets/images/draw06.png",Ee=n.p+"assets/images/draw07.png",Ze=n.p+"assets/images/draw08.png",Se=n.p+"assets/images/draw09.png",we=n.p+"assets/images/draw10.png",fe=n.p+"assets/images/draw11.png",ve=n.p+"assets/images/draw12.png",Ge=n.p+"assets/images/draw13.png",Te=n.p+"assets/images/draw14.png",ke=n.p+"assets/images/draw15.jpg",Ne=n.p+"assets/images/draw16.jpg",Pe=n.p+"assets/images/draw17.png",We=n.p+"assets/images/draw18.png",Fe=n.p+"assets/images/draw19.png",Oe=n.p+"assets/images/draw20.png",je=n.p+"assets/images/draw21.jpg",Re=n.p+"assets/images/draw22.png",Ie=n.p+"assets/images/draw23.png",De=n.p+"assets/images/draw24.png",Le=n.p+"assets/images/draw25.jpg",ze=n.p+"assets/images/draw26.jpg",Ae=n.p+"assets/images/draw27.png",Ue=n.p+"assets/images/draw28.png",Je=n.p+"assets/images/draw29.jpg",Ve=n.p+"assets/images/draw30.png",Me=n.p+"assets/images/draw31.jpg",qe=n.p+"assets/images/draw32.jpg",Ke=n.p+"assets/images/draw33.jpg",Xe=n.p+"assets/images/draw34.png",He=n.p+"assets/images/web01.png",Ye=n.p+"assets/images/web02.png",Qe=n.p+"assets/images/web03.png",$e=n.p+"assets/images/web05.png",et=n.p+"assets/images/web06.png",tt=n.p+"assets/images/web07.png",nt=n.p+"assets/images/web08.png",at=n.p+"assets/images/web09.png",rt=n.p+"assets/images/web10.png",st=n.p+"assets/images/web11.png",it=n.p+"assets/images/web12.png",ct=n.p+"assets/images/award01.png",ot=n.p+"assets/images/award02.png",lt=n.p+"assets/images/award03.png",mt=n.p+"assets/images/ico_Balsamiq.png",dt=(n.p,n.p+"assets/images/ico_sai.png"),pt=n.p+"assets/images/ico_jest.png";var gt=n(5406),ut=n(1417);new E;const _t=()=>y.createElement("div",null,y.createElement(ae,{pics:[ue],picStyle:1}),y.createElement("div",{className:"wd80 ml10"},y.createElement(Z.Z,{TextCss:"text_pink_",Title:"I Am A Coder Programmer I Write Code"},y.createElement("div",null,y.createElement(q,null),"I am a full-stack engineer. ",y.createElement("br",null),"Enjoy simplifying complex tasks and automating tedious work using digital tools to save costs. ",y.createElement("br",null),"I have experience in Python, C#.NET, VB, Vue, and React development, and have developed OCR recognition systems, web crawlers, automatic email systems, Oracle Netsuite ERP membership and sales tax systems.",y.createElement("br",null),"I have also assisted clients with web design, banner creation, and illustration. Additionally, I use digital tools such as Alteryx (data automation) and UIPath (process automation) to assist and solve business problems. ",y.createElement("br",null),"My interests include studying finance, graphics, and programming, and combining knowledge from these three areas to solve real-life problems.",y.createElement("br",null),y.createElement("br",null),"我是一位全端工程師。",y.createElement("br",null),"喜歡將複雜的事情變簡單，將繁雜瑣碎的工作自動化，透過數位工具取代人力，節省成本。",y.createElement("br",null),"有 Python、C# .net、VB、Vue、React 開發經驗，曾撰寫過 OCR 辨識系統、網路爬蟲與自動寄信系統、Oracle Netsuite ERP 會員與營業稅系統開發，協助客戶進行網頁設計、網頁 banner 或插圖繪製。",y.createElement("br",null),"興趣是研究財會、繪圖與程式開發，透過這三個領域的知識結合，解決生活上的問題。",y.createElement("br",null),y.createElement("br",null),y.createElement("a",{href:"mailto:jackyleeidea@gmail.com",style:{color:"#919191",fontFamily:"Neucha"}},"email : jackyleeidea@gmail.com"))),y.createElement(Z.Z,{TextCss:"text_orange",Title:"My Skills"},y.createElement($,{color:"red",title:y.createElement(pe.G,{icon:ut.GJX}),text:"Html5"}),y.createElement($,{color:"orange",title:y.createElement(pe.G,{icon:ut.Gu1}),text:"Css3"}),y.createElement($,{color:"yellow",title:y.createElement(pe.G,{icon:ut.af7}),text:"Bootstrap"}),y.createElement($,{color:"green",title:y.createElement(pe.G,{icon:ut.DTC}),text:"Javascript"}),y.createElement($,{color:"blue",title:y.createElement(pe.G,{icon:ut.hVS}),text:"C#"}),y.createElement($,{color:"cyan",title:y.createElement(pe.G,{icon:ut.wn1}),text:"React"}),y.createElement($,{color:"purple",title:y.createElement(pe.G,{icon:ut.iEy}),text:"Vue"}),y.createElement($,{color:"gray",title:y.createElement("img",{src:pt,style:{width:"1em"}}),text:"Jest"}),y.createElement($,{color:"red",title:y.createElement("img",{src:dt,style:{width:"1em"}}),text:"Sai"}),y.createElement($,{color:"orange",title:y.createElement("img",{src:mt,style:{width:"1em"}}),text:"Balsamiq"}),y.createElement($,{color:"yellow",title:y.createElement(pe.G,{icon:ut.uWT}),text:"Figma、Illustrator、Photoshop"})),y.createElement(Z.Z,{TextCss:"text_green",Title:"My Works"},y.createElement("div",null,y.createElement(F,null),y.createElement("div",{className:"fr"},y.createElement(pe.G,{icon:de.onQ}),"　css animation"),y.createElement("br",null),y.createElement("div",{className:"darkgray"},"Web Design："),y.createElement(ae,{pics:[He,Ye],picStyle:2}),y.createElement(ae,{pics:[Qe],picStyle:2}),y.createElement(ae,{pics:[$e,et],picStyle:4}),y.createElement(ae,{pics:[tt,nt,at,rt,st,it],picStyle:2})),y.createElement("br",null),y.createElement("div",{className:"darkgray"},"Graphic Design："),y.createElement("br",null),y.createElement(ae,{pics:[_e,ye,xe,he,Ce,Be,be,Ee,Ze,Se,we,fe,ve,Ge,Te,ke,Ne,Pe,We,Fe,Oe,je,Re,Ie,De,Le,ze,Ae,Ue,Je,Ve,Me,qe,Ke,Xe],picStyle:4}),y.createElement("br",null),y.createElement("div",{className:"darkgray"},"Game Design："),y.createElement("br",null),y.createElement("div",null,"Game(made by Python)：",y.createElement(pe.G,{icon:de.I4f})),y.createElement(gt.Z,{videoId:"hNy5Ff5Yca0"}),y.createElement("br",null),y.createElement("br",null),y.createElement("div",null,"Installation art(DEMO)：",y.createElement(pe.G,{icon:de.I4f})),y.createElement(gt.Z,{videoId:"oTOvg4c154E"}),y.createElement("br",null)),y.createElement(Z.Z,{TextCss:"text_blue",Title:"Awards"},y.createElement(ae,{pics:[ct,ot],picStyle:3}),y.createElement(ae,{pics:[lt],picStyle:4}))))},3058:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(7223),s=n(4184),i=n.n(s);const c=e=>a.createElement("div",{className:r.Z.section},a.createElement("div",{className:r.Z.titleArea},a.createElement("span",{className:i()(e.TextCss,r.Z.TitleText)},e.Title)),a.createElement("div",{className:r.Z.hrdiv}),a.createElement("div",{className:r.Z.ContainText},e.children))},9439:(e,t,n)=>{n.d(t,{Z:()=>a});const a={badge:"src-components-common-BadgeText-index__badge--WFVqg",badgeBigText:"src-components-common-BadgeText-index__badgeBigText--1FxMl",gray:"src-components-common-BadgeText-index__gray--39Ipu",red:"src-components-common-BadgeText-index__red--2LX3t",orange:"src-components-common-BadgeText-index__orange--NLrFU",yellow:"src-components-common-BadgeText-index__yellow--2P8ed",green:"src-components-common-BadgeText-index__green--THkn7",cyan:"src-components-common-BadgeText-index__cyan--3C3bJ",blue:"src-components-common-BadgeText-index__blue--3U0oK",purple:"src-components-common-BadgeText-index__purple--1wxpv",white:"src-components-common-BadgeText-index__white--3R-tM",light:"src-components-common-BadgeText-index__light--UDS-u",dark:"src-components-common-BadgeText-index__dark--3osIr"};var r=n(4783)(e.id,{locals:!0});e.hot.dispose(r)},743:(e,t,n)=>{n.d(t,{Z:()=>a});const a={cardDefault:"src-components-mainContent-GameCard-Card-index__cardDefault--1NViI"};var r=n(4783)(e.id,{locals:!0});e.hot.dispose(r)},4012:(e,t,n)=>{n.d(t,{Z:()=>a});const a={gameArea:"src-components-mainContent-GameCard-index__gameArea--3-2uK",successText:"src-components-mainContent-GameCard-index__successText--3CyU0",error:"src-components-mainContent-GameCard-index__error--1n-iR",white:"src-components-mainContent-GameCard-index__white--Pi9e9",gray:"src-components-mainContent-GameCard-index__gray--2rWmZ",darkgray:"src-components-mainContent-GameCard-index__darkgray--3n7vv",red:"src-components-mainContent-GameCard-index__red--2MZ-k",yellow:"src-components-mainContent-GameCard-index__yellow--20LOE",green:"src-components-mainContent-GameCard-index__green--2eE9M",orange:"src-components-mainContent-GameCard-index__orange--3mPcJ",blue:"src-components-mainContent-GameCard-index__blue--JGWIl",purple:"src-components-mainContent-GameCard-index__purple--3PklS",hide:"src-components-mainContent-GameCard-index__hide--2k0An",show:"src-components-mainContent-GameCard-index__show--3ENe1"};var r=n(4783)(e.id,{locals:!0});e.hot.dispose(r)},9228:(e,t,n)=>{n.d(t,{Z:()=>a});const a={cardBoxWidth1:"src-components-mainContent-PicGallery-PicCard-index__cardBoxWidth1--1DdiJ",cardBoxWidth2:"src-components-mainContent-PicGallery-PicCard-index__cardBoxWidth2--dVweo",cardBoxWidth3:"src-components-mainContent-PicGallery-PicCard-index__cardBoxWidth3--2ztfZ",cardBoxWidth4:"src-components-mainContent-PicGallery-PicCard-index__cardBoxWidth4--3k-S8",cardBoxWidth5:"src-components-mainContent-PicGallery-PicCard-index__cardBoxWidth5--1UGvO",cardBoxWidth6:"src-components-mainContent-PicGallery-PicCard-index__cardBoxWidth6--2fc_U",cardBoxWidth7:"src-components-mainContent-PicGallery-PicCard-index__cardBoxWidth7--9wdxC",cardBoxWidth8:"src-components-mainContent-PicGallery-PicCard-index__cardBoxWidth8--aRb9j",cardBoxWidth9:"src-components-mainContent-PicGallery-PicCard-index__cardBoxWidth9--T-ewF",cardBoxWidth10:"src-components-mainContent-PicGallery-PicCard-index__cardBoxWidth10--3qabc",cardBoxWidth11:"src-components-mainContent-PicGallery-PicCard-index__cardBoxWidth11--3HrZo",cardBoxWidth12:"src-components-mainContent-PicGallery-PicCard-index__cardBoxWidth12--29tbZ",cardBox:"src-components-mainContent-PicGallery-PicCard-index__cardBox--3-XB6",titleBox:"src-components-mainContent-PicGallery-PicCard-index__titleBox--2TJEQ",picBox:"src-components-mainContent-PicGallery-PicCard-index__picBox--1BOM8",textBox:"src-components-mainContent-PicGallery-PicCard-index__textBox--35lKA"};var r=n(4783)(e.id,{locals:!0});e.hot.dispose(r)},7223:(e,t,n)=>{n.d(t,{Z:()=>a});const a={section:"src-components-mainContent-SectionContent-index__section--30pIg",hrdiv:"src-components-mainContent-SectionContent-index__hrdiv--1TLXC",titleArea:"src-components-mainContent-SectionContent-index__titleArea--39ohL",TitleText:"src-components-mainContent-SectionContent-index__TitleText--2lltu",ContainText:"src-components-mainContent-SectionContent-index__ContainText--1C3Fh"};var r=n(4783)(e.id,{locals:!0});e.hot.dispose(r)},7537:(e,t,n)=>{n.d(t,{Z:()=>a});const a={main_banner:"src-components-mainContent-animationBanner-BannerStyle1-index__main_banner--14T5x",main_banner_img:"src-components-mainContent-animationBanner-BannerStyle1-index__main_banner_img--3x-Gp",boy_1:"src-components-mainContent-animationBanner-BannerStyle1-index__boy_1--2vWBI",updown:"src-components-mainContent-animationBanner-BannerStyle1-index__updown--2Cjpd",LtoR:"src-components-mainContent-animationBanner-BannerStyle1-index__LtoR--Zz44I",boy_2:"src-components-mainContent-animationBanner-BannerStyle1-index__boy_2--cocUf",boy_3:"src-components-mainContent-animationBanner-BannerStyle1-index__boy_3--2dVua",RtoL:"src-components-mainContent-animationBanner-BannerStyle1-index__RtoL--Boahz",girl_1:"src-components-mainContent-animationBanner-BannerStyle1-index__girl_1--2Knbg",girl_2:"src-components-mainContent-animationBanner-BannerStyle1-index__girl_2--3dFt5",girl_3:"src-components-mainContent-animationBanner-BannerStyle1-index__girl_3--3T910"};var r=n(4783)(e.id,{locals:!0});e.hot.dispose(r)},4558:(e,t,n)=>{n.d(t,{Z:()=>a});const a={main_banner:"src-components-mainContent-animationBanner-BannerStyle2-index__main_banner--J4wSr",cloud1:"src-components-mainContent-animationBanner-BannerStyle2-index__cloud1--17KPp",cloud2:"src-components-mainContent-animationBanner-BannerStyle2-index__cloud2--2IXqK",cloud3:"src-components-mainContent-animationBanner-BannerStyle2-index__cloud3--8htCp",main_banner_img:"src-components-mainContent-animationBanner-BannerStyle2-index__main_banner_img--1hN9w",main_banner_img2:"src-components-mainContent-animationBanner-BannerStyle2-index__main_banner_img2--uey_n",car_pink:"src-components-mainContent-animationBanner-BannerStyle2-index__car_pink--2UWiu",car_LtoR:"src-components-mainContent-animationBanner-BannerStyle2-index__car_LtoR--3gglH",car_blue:"src-components-mainContent-animationBanner-BannerStyle2-index__car_blue--1leqX",car_orange:"src-components-mainContent-animationBanner-BannerStyle2-index__car_orange--2pn83",car_white:"src-components-mainContent-animationBanner-BannerStyle2-index__car_white--2Y48Y",car_RtoL:"src-components-mainContent-animationBanner-BannerStyle2-index__car_RtoL--2bJfm",car_green:"src-components-mainContent-animationBanner-BannerStyle2-index__car_green--5lFgt",blackcloud:"src-components-mainContent-animationBanner-BannerStyle2-index__blackcloud--9w1Dk"};var r=n(4783)(e.id,{locals:!0});e.hot.dispose(r)}}]);