"use strict";(self.webpackChunkvirtual_gallery_with_react_and_kunstmatrix=self.webpackChunkvirtual_gallery_with_react_and_kunstmatrix||[]).push([[672],{1672:(e,o,a)=>{a.r(o),a.d(o,{default:()=>v});var t=a(7294),i=(a(4866),a(5671)),s=a(3144),r=a(9340),n=a(3930),l=a(1120),d=a(96);a(9417);const u=[{name:"Despacito",singer:"Luis Fonsi",cover:"http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",musicSrc:"http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"},{name:"Dorost Nemisham",singer:"Sirvan Khosravi",cover:"https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",musicSrc:"https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3"}],c=[{name:"Bedtime Stories",singer:"Jay Chou",cover:"http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg",musicSrc:"http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3"},{name:"Dorost Nemisham",singer:"Sirvan Khosravi",cover:"https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",musicSrc:()=>Promise.resolve("https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3")},{name:"Despacito",singer:"Luis Fonsi",cover:"http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",musicSrc:"http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"}],m=[{name:"Despacito",singer:"Luis Fonsi",cover:"http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",musicSrc:"http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"},{name:"Bedtime Stories",singer:"Jay Chou",cover:"http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg",musicSrc:"http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3"},{name:"Dorost Nemisham",singer:"Sirvan Khosravi",cover:"https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",musicSrc:"https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3"}],p=[{name:"Bedtime Stories",singer:"Jay Chou",cover:"http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg",musicSrc:"http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3"}],h={audioLists:m,defaultPlayIndex:0,theme:"auto",bounds:"body",quietUpdate:!1,clearPriorAudioLists:!1,autoPlayInitLoadPlayList:!1,preload:!1,glassBg:!1,remember:!1,remove:!0,defaultPosition:{right:100,bottom:120},defaultPlayMode:"order",mode:"full",once:!1,autoPlay:!1,toggleMode:!0,showMiniModeCover:!0,showMiniProcessBar:!1,drag:!0,seeked:!0,showMediaSession:!0,showProgressLoadBar:!0,showPlay:!0,showReload:!0,showDownload:!0,showPlayMode:!0,showThemeSwitch:!0,showLyric:!0,showDestroy:!0,extendsContent:null,defaultVolume:1,playModeShowTime:600,loadAudioErrorPlayNext:!0,autoHiddenCover:!1,spaceBar:!0,locale:"en_US",responsive:!0,mobileMediaQuery:"(max-width: 1024px)",volumeFade:{fadeIn:1e3,fadeOut:1e3},restartCurrentOnPrev:!1,sortableOptions:{},onAudioDownload(e){console.log("audio download",e)},onAudioPlay(e){console.log("audio playing",e)},onAudioPause(e){console.log("audio pause",e)},onAudioSeeked(e){console.log("audio seeked",e)},onAudioVolumeChange(e){console.log("audio volume change",e)},onAudioEnded(e,o,a){console.log("audio ended",e,o,a)},onAudioAbort(e,o,a){console.log("audio abort",e,o,a)},onAudioProgress(e){},onAudioReload(e){console.log("audio reload:",e)},onAudioError(e,o,a,t){console.error("audio error",e,o,a,t)},onAudioListsChange(e,o,a){console.log("audio lists change:",e,o,a)},onAudioPlayTrackChange(e,o,a){console.log("audio play track change:",e,o,a)},onAudioListsPanelChange(e){console.log("audio lists panel visible:",e)},onAudioListsSortEnd(e,o){console.log("audio lists sort end:",e,o)},onAudioLyricChange(e,o){console.log("audio lyric change:",e,o)},getContainer:()=>document.body,getAudioInstance(e){console.log("audio instance",e)},onBeforeDestroy:(e,o,a)=>(console.log("onBeforeDestroy currentPlayId: ",e),console.log("onBeforeDestroy audioLists: ",o),console.log("onBeforeDestroy audioInfo: ",a),new Promise(((e,o)=>{window.confirm("Are you confirm destroy the player?")?e():o()}))),onDestroyed(e,o,a){console.log("onDestroyed:",e,o,a)},onCoverClick(e,o,a){console.log("onCoverClick: ",e,o,a)}},g=function(e){(0,r.Z)(y,e);var o,a,g=(o=y,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,l.Z)(o);if(a){var i=(0,l.Z)(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return(0,n.Z)(this,e)});function y(e){var o;return(0,i.Z)(this,y),(o=g.call(this,e)).state={unmount:!1,params:{...h,getAudioInstance:e=>{o.audio=e}}},o.onAddAudio=()=>{o.updateParams({clearPriorAudioLists:!1,audioLists:[...o.state.params.audioLists,{name:"I'm new here",singer:"jack",cover:"http://www.lijinke.cn/music/1387583682387727.jpg",musicSrc:`http://www.lijinke.cn/music/${Date.now()}.mp3`}]})},o.extendsContent=()=>{o.updateParams({extendsContent:t.createElement("button",{type:"button",onClick:()=>{alert("I'm extends content")}},"button")})},o.onChangeToFirstAudioList=()=>{o.updateParams({clearPriorAudioLists:!0,quietUpdate:!1,audioLists:u})},o.onChangeToSecondAudioList=()=>{o.updateParams({clearPriorAudioLists:!0,quietUpdate:!1,audioLists:c})},o.onQuietUpdateAudioList=()=>{o.updateParams({clearPriorAudioLists:!0,quietUpdate:!0,audioLists:m})},o.onQuietUpdateAudioLis2=()=>{o.updateParams({clearPriorAudioLists:!0,quietUpdate:!0,audioLists:p})},o.onAutoPlayMode=()=>{o.updateParams({autoPlay:!o.state.params.autoPlay})},o.onAutoPlayInitLoadPlayList=()=>{o.updateParams({autoPlayInitLoadPlayList:!o.state.params.autoPlayInitLoadPlayList})},o.onClearPriorAudioLists=()=>{o.updateParams({clearPriorAudioLists:!o.state.params.clearPriorAudioLists})},o.onShowGlassBg=()=>{o.onChangeKey("glassBg")},o.onDrag=()=>{o.onChangeKey("drag")},o.onToggleMode=()=>{o.onChangeKey("toggleMode")},o.onSeeked=()=>{o.onChangeKey("seeked")},o.onChangeKey=e=>{const a={...o.state.params,[e]:!o.state.params[e]};"light"!==e&&"dark"!==e||(a.theme=e),"full"!==e&&"mini"!==e||(a.mode=e),Object.values(Locale).includes(e)&&(a.locale=e),o.setState({params:a})},o.changePlayIndex=()=>{o.updateParams({playIndex:createRandomNum(0,o.state.params.audioLists.length-1)})},o.updateParams=e=>{const a={...o.state.params,...e};o.setState({params:a})},o.unmountPlayer=()=>{o.setState({unmount:!0})},o.onPlayModeChange=e=>{o.updateParams({playMode:e.target.value})},o.audio={},o}return(0,s.Z)(y,[{key:"render",value:function(){const{params:e,unmount:o}=this.state;return t.createElement(t.Fragment,null,t.createElement(d.Z,e))}}]),y}(t.PureComponent);a(7625);const y=window.innerHeight,v=()=>t.createElement("div",{className:"virtual-gallery-container"},t.createElement("div",{className:"virtual-gallery-iframe"},t.createElement(g,null),t.createElement("iframe",{allowFullScreen:"true",frameBorder:"0",scrolling:"no",src:"https://art.kunstmatrix.com/apps/artspaces/?external=true&uid=92744&exhibition=11837676",width:"100%",style:{height:`${y}px`}})))},4866:(e,o,a)=>{var t=a(4783)(e.id,{locals:!0});e.hot.dispose(t)}}]);