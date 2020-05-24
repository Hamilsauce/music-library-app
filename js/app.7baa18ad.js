(function(t){function e(e){for(var i,o,l=e[0],r=e[1],c=e[2],d=0,g=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&g.push(n[o][0]),n[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(g.length)g.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,l=1;l<a.length;l++){var r=a[l];0!==n[r]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},s=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"014d":function(t,e,a){},"034f":function(t,e,a){"use strict";var i=a("85ec"),n=a.n(i);n.a},"082c":function(t,e,a){"use strict";var i=a("50a5"),n=a.n(i);n.a},"2bd9":function(t,e,a){},3186:function(t,e,a){"use strict";var i=a("014d"),n=a.n(i);n.a},4846:function(t,e,a){"use strict";var i=a("c6e6"),n=a.n(i);n.a},"50a5":function(t,e,a){},"55fe":function(t,e,a){"use strict";var i=a("c79f"),n=a.n(i);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[!0===t.headerDisplayState?a("header",[a("h6",{staticClass:"assistant"},[t._v(t._s(t.assistantMessage))])]):t._e(),a("div",{staticClass:"app-shell"},[a("div",{staticClass:"shell-head"},[t._m(0),a("div",{staticClass:"header header2"},[a("label",{staticClass:"header2-label"},[t._v("Search for a tune")]),a("div",{staticClass:"header-button-container"},[a("form",{staticClass:"header-form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterInput,expression:"filterInput"}],staticClass:"filter-input",attrs:{type:"text",name:"filter-input"},domProps:{value:t.filterInput},on:{click:t.selectTextOnClick,input:function(e){e.target.composing||(t.filterInput=e.target.value)}}})])])])]),a("div",{staticClass:"shell-body"},[a("transition",{attrs:{name:"fade"}},[a("ToolBar",{staticClass:"toolbar"})],1),a("div",{staticClass:"body-row"},[a("router-view",{attrs:{filterInput:t.filterInput,songs:t.songs}}),a("transition",{attrs:{name:"fade"}},[a("Sidebar",{attrs:{sidebarDisplayState:t.sidebarDisplayState}})],1)],1)],1)]),!1===t.headerDisplayState?a("div",{staticClass:"hiddenMessage",staticStyle:{"text-align":"center",position:"relative"},on:{click:t.toggleHeader}},[t._v("Show Header")]):t._e()])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header header1"},[a("h1",[a("div",{staticClass:"logo1"},[t._v("ham")]),a("div",{staticClass:"logo2"},[t._v("RADIO")])])])}],o=(a("7db0"),a("4160"),a("07ac"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"toolbar"},[a("div",{staticClass:"top-bar"},[a("div",{staticClass:"expand-button",attrs:{title:"Click here to show more options!"},on:{click:t.toggleBottomBar}},[a("i",{staticClass:"fas fa-caret-square-down"})]),a("div",{staticClass:"top-bar-div title-container"},[a("transition",{attrs:{name:"fade"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!0===t.safeReveal,expression:"safeReveal === true"}],staticClass:"song-title",class:{fadeTitle:t.displayPlayingMessage}},[t._v(t._s(t.songTitle))])])],1),a("div",[!1===t.audioPaused?a("input",{staticClass:"pause-button tool-button",attrs:{disabled:""===t.songName,type:"button",name:"pause-button",value:"Pause"},on:{click:t.pauseAudio}}):t._e(),!0===t.audioPaused?a("input",{staticClass:"play-button tool-button",attrs:{type:"button",name:"play-button",value:"Resume"},on:{click:t.resumeAudio}}):t._e()])]),a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"bottom-bar",style:{height:!0===t.expandBottomBar?"30px":"0px"}},[a("div",{staticClass:"grid-cell"},[a("div",{staticClass:"tooltip"},[a("button",{staticClass:"share-button",attrs:{type:"button",name:"share-button",value:"Share"},on:{click:t.shareActiveSong}},[a("svg",{staticStyle:{"enable-background":"new 0 0 32 32"},attrs:{version:"1.1",id:"Icons",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",height:"17px",width:"18px",viewBox:"0 0 35 25",fill:"#fff","xml:space":"preserve"}},[a("path",{attrs:{d:"M29.3,2.6c-0.3-0.2-0.7-0.3-1-0.2L3,11.7c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l10.2,3.8l10-10\nc0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-9.8,9.8l6.6,10.6c0.2,0.3,0.5,0.5,0.8,0.5c0.1,0,0.1,0,0.2,0c0.4-0.1,0.7-0.4,0.8-0.7l6.2-25.2\nC29.7,3.3,29.6,2.9,29.3,2.6z"}})])])]),a("input",{staticClass:"download-button",attrs:{type:"button",name:"download-button",value:"download"}})]),a("div",{staticClass:"grid-cell"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.audioSrc,expression:"audioSrc"}],staticClass:"songUrlText",attrs:{type:"text",value:"no active song"},domProps:{value:t.audioSrc},on:{input:function(e){e.target.composing||(t.audioSrc=e.target.value)}}})])])]),a("div",{staticClass:"audio-container"},[a("audio",{attrs:{id:"audio-player"}},[a("source",{staticClass:"source",attrs:{src:t.audioSrc,type:"audio/mpeg"}})])])],1)}),l=[],r=new i["a"],c=r,u={name:"ToolBar",components:{},props:{inputData:String,songUrl:String},data:function(){return{displayPlayingMessage:!1,safeReveal:!1,expandBottomBar:!1,audioPaused:!1,songName:"",audioSrc:"",notification2:"Details...",eventInput:this.filterInput}},methods:{toggleNowPlaying:function(){var t=this;this.displayPlayingMessage=!0,setTimeout((function(){console.log("now playin"),t.displayPlayingMessage=!1}),1500)},toggleBottomBar:function(){this.expandBottomBar=!this.expandBottomBar},receivefilterInput:function(){var t=this;c.$on("filterInputSubmit",(function(e){t.inputData=e,t.inputData[0]}))},playAudio:function(){var t=this;this.safeReveal=!1,c.$on("songActivated",(function(e){var a=document.getElementById("audio-player");t.songTitle!=e[0]&&("noUrl"!==e[1]?(t.toggleNowPlaying(),console.log(e),t.songName=e[0],t.audioSrc=e[1],t.audioPaused=!1,a.pause(),a.load(),a.play(),t.safeReveal=!0):t.songName="No audio for ".concat(e[0]))}))},resumeAudio:function(){var t=document.getElementById("audio-player");t.play(),this.audioPaused=!1},pauseAudio:function(){var t=document.getElementById("audio-player");t.pause(),this.audioPaused=!0},shareActiveSong:function(){var t=document.querySelector(".songUrlText");t.select(),t.setSelectionRange(0,99999),document.execCommand("copy");var e="";e=this.songTitle?"The link for '".concat(this.songTitle,"' has been copied to your clipboard!"):"Select a song to share it!",alert(e)}},computed:{filterInput:function(){return this.inputData},songTitle:function(){return this.songName}},created:function(){this.playAudio()},mounted:function(){},updated:function(){},destroyed:function(){}},d=u,g=(a("55fe"),a("2877")),p=Object(g["a"])(d,o,l,!1,null,"4d24cef9",null),f=p.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar",on:{mouseleave:t.onClickOutside}},[a("div",{staticClass:"sidebar-container2"},[a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onClickOutside,expression:"onClickOutside"}],staticClass:"sidebarShown",class:{sideBarDisable:t.disableState},style:{width:!0===t.sidebarDisplayState?"150px":"0px"},attrs:{id:"sidebar-div"}},[a("div",{staticClass:"links",style:{width:!0===t.sidebarDisplayState?"150px":"0px"}},[a("h3",[t._v("Nav")]),a("div",{staticClass:"linkItem"},[a("router-link",{staticClass:"routerLink",attrs:{to:"/"}},[t._v("Library")])],1),a("div",{staticClass:"linkItem"},[a("router-link",{staticClass:"routerLink",attrs:{to:"/songdetails"}},[t._v("Song View")])],1),a("div",{staticClass:"linkItem"},[a("router-link",{staticClass:"routerLink",attrs:{to:"/newsong"}},[t._v("New Song")])],1),a("div",{staticClass:"linkItem"},[a("router-link",{staticClass:"routerLink",attrs:{to:"/loginView"}},[t._v("Login")])],1),a("div",{staticClass:"linkItem"},[a("router-link",{staticClass:"routerLink",attrs:{to:"/About"}},[t._v("About")])],1),a("div",{staticClass:"github-link linkItem"},[a("a",{attrs:{href:"https://github.com/Hamilsauce"}},[t._v("github")])])])])])],1),a("div",{staticClass:"sidebar-container",attrs:{title:"Click to expand navigation!"},on:{click:t.toggleSidebar}},[a("i",{directives:[{name:"show",rawName:"v-show",value:!1===t.sidebarDisplayState,expression:"sidebarDisplayState === false"}],staticClass:"fas fa-angle-double-left sidebar-toggle",class:{toggleClicked:t.toggleClicked},on:{click:function(e){t.sidebarDisplayState}}}),a("i",{directives:[{name:"show",rawName:"v-show",value:!0===t.sidebarDisplayState,expression:"sidebarDisplayState === true"}],staticClass:"fas fa-angle-double-right sidebar-toggle",class:{toggleClicked:t.toggleClicked},on:{click:function(e){t.sidebarDisplayState}}})])])},v=[],h=a("c28b"),b=a.n(h),C={components:{},directives:{clickOutside:b.a.directive},props:{},data:function(){return{disableState:!1,sidebarDisplayState:!1,toggleClicked:!1,userAuthData:{email:"",password:""}}},methods:{handleLogin:function(t){console.log("loginData"),this.userAuthData=t,this.$emit("submittedLogin",t)},disableForDimmer:function(){var t=this;c.$on("dimmerActive",(function(){t.disableState=!0}))},toggleSidebar:function(){var t=this;this.toggleClicked=!0,setTimeout((function(){t.sidebarDisplayState=!t.sidebarDisplayState,t.toggleClicked=!1}),425)},onClickOutside:function(t){var e=this,a=t.type;"mouseleave"===a?setTimeout((function(){!0===e.sidebarDisplayState&&!1===e.toggleClicked&&(e.sidebarDisplayState=!1)}),500):"click"===a&&setTimeout((function(){!0===e.sidebarDisplayState&&!1===e.toggleClicked&&(e.sidebarDisplayState=!1)}),250)},peepSidebar:function(){var t=this;setTimeout((function(){t.toggleSidebar(),setTimeout((function(){t.toggleSidebar()}),700)}),1e3)}},computed:{},watch:{},created:function(){},mounted:function(){this.disableForDimmer(),this.peepSidebar()},updated:function(){},destroyed:function(){}},S=C,y=(a("8dd5"),Object(g["a"])(S,m,v,!1,null,"2551c140",null)),w=y.exports,_=a("8aa5"),x={name:"app",components:{ToolBar:f,Sidebar:w},props:{},data:function(){return{headerDisplayState:!0,filterClickCount:0,sidebarDisplayState:!1,assistantMessage:"Select a tile to listen.",sortCriteria:"",filterInput:"",googleDisplayName:"",userAuthData:{email:"",password:""},CellData:[{elementId:"",title:"",subject:"",date:""}],gridCell:{id:null,name:"",content:"",markup:""},songs:[]}},methods:{listenForAuthChange:function(){var t=this,e=_["auth"]();e.onAuthStateChanged((function(e){e?(e.providerData.forEach((function(e){t.googleDisplayName=e.displayName})),console.log(e)):(t.googleDisplayName="",console.log("not logged in")),c.$emit("googleLogin",t.googleDisplayName)}))},initializeData:function(){var t=this,e=_["database"]().ref("songs");e.on("value",(function(e){t.songs=Object.values(e.val()).sort((function(t,e){return t.id>e.id?-1:t.id<e.id?1:0}))})),c.$emit("dataLoad",this.songs)},toggleHeader:function(){this.headerDisplayState=!this.headerDisplayState},handleFilterInput:function(){if(this.filterClickCount<2?this.filterClickCount=this.filterClickCount+1:this.filterClickCount=this.filterClickCount,this.filterClickCount>1)return this.filterInput="",void(this.filterClickCount=0)},listenForActiveSong:function(){var t=this;c.$on("songActivated",(function(e){var a=e[0],i=t.songs.find((function(t){return t.songTitle===a}));i.plays++,t.saveToFirebase(i)}))},saveToFirebase:function(t){_["database"]().ref("songs/"+t.id).update(t)},addNewSong:function(){var t=this;c.$on("newSongSubmitted",(function(e){var a=t.songs[0].id+1;e.id=a,t.songs.push(e),t.saveToFirebase(e)}))},loginSubmitted:function(){var t=this;c.$on("submittedLogin",(function(e){t.userAuthData=e})),c.$on("googleLogin",(function(e){t.googleDisplayName=e,t.makeAssistantTalk()}))},makeAssistantTalk:function(){var t=this;setTimeout((function(){t.googleDisplayName?t.assistantMessage="Signed in as ".concat(t.googleDisplayName):t.assistantMessage="Not signed in."}),3e3)},selectTextOnClick:function(t){var e=t.target;e.focus(),e.setSelectionRange(0,e.value.length)}},created:function(){this.listenForAuthChange()},mounted:function(){this.initializeData(),this.listenForActiveSong(),this.addNewSong(),this.loginSubmitted()}},k=x,D=(a("034f"),Object(g["a"])(k,n,s,!1,null,null,null)),A=D.exports,N=a("8c4f"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"MainGrid"},[a("div",{staticClass:"grid-view-header"}),a("div",{staticClass:"grid-body"},t._l(t.refinedSongList,(function(e){return a("work-cell",{key:e.id,attrs:{song:e,selectedSong:t.selectedSong},on:{songCellActivated:t.handleActiveSong,showSongDetails:t.showSongDetails}})})),1)])},T=[],$=(a("4de4"),a("c975"),a("3835")),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-cell",class:{activeCell:t.activated},on:{click:t.cellActive}},[a("div",{staticClass:"cell-head",class:{activeCellHead:t.activated}},[a("div",{staticClass:"button-container",class:{buttonContainerHidden:!t.activated}},[a("router-link",{staticClass:"routerLink details-button",attrs:{to:"/songdetails"},on:{click:t.showSongDetails}},[t._v("Song Details")])],1),a("div",{staticClass:"checkbox-container"},[!0===t.activated?a("img",{staticClass:"checkboxSvg",attrs:{src:"https://hamilsauce.github.io/music-library-app/src/assets/checked-box.svg",width:"20px",height:"20px",alt:"checkbox"}}):a("img",{staticClass:"checkboxSvg",attrs:{src:"https://hamilsauce.github.io/music-library-app/src/assets/unchecked-box.svg",width:"20px",height:"20px",alt:"box"}})])]),a("div",{staticClass:"cell-body"},[a("div",{staticClass:"title-display"},[t._v(t._s(t.song.songTitle))]),a("div",{staticClass:"play-count-display"},[t._v(t._s("Plays: "+t.song.plays))]),a("div",{staticClass:"duration-display"},[t._v(t._s(t.trimDuration(t.song.duration)))])])])},F=[],O=(a("d81d"),a("13d5"),a("fb6a"),a("ac1f"),a("1276"),a("2ca0"),a("498a"),{name:"WorkCell",components:{},props:{song:Object,selectedSong:String},data:function(){return{checkedSong:"",audioUrl:"",errorMsg:""}},methods:{cellActive:function(){var t=[],e=[];this.song.hasOwnProperty("audioUrl")?(e=["url",this.cleanedAudioUrl],t.push(e)):(e=["error","noUrl"],t.push(e)),t.push(this.song.songTitle),this.$emit("songCellActivated",t)},showSongDetails:function(){this.$emit("showSongDetails",this.song.songTitle)},trimDuration:function(t){var e=t.length>1&&t.startsWith("0")?t.slice(1,t.length):t,a=e.split(":").reduce((function(t,e,a){return t+=e+=0===a?"m":"s",t}),"");return a}},computed:{activated:function(){return this.selectedSong===this.song.songTitle},cleanedAudioUrl:function(){var t="";if(this.song.audioUrl){var e=this.song.audioUrl.trim().split(""),a=e.map((function(t){var e=" "===t?"%20":t;return e})).reduce((function(t,e){return t+e}),"");return console.log(a),a}return t="No audio for this song!",t}},watch:{},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){}}),L=O,j=(a("082c"),Object(g["a"])(L,P,F,!1,null,"1e3780a6",null)),E=j.exports,U={name:"MainGrid",components:{WorkCell:E},data:function(){return{songList:this.songs,songsFiltered:"",sortCriteria:String,displayDimmer:!1,selectedSong:null}},props:{msg:String,songs:Array,filterInput:String},methods:{listenForData:function(){var t=this;c.$on("dataLoad",(function(e){t.songList=e}))},handleActiveSong:function(t){var e=Object($["a"])(t,2),a=e[0],i=e[1];if(this.selectedSong!=i)if("url"===a[0]){var n=a[1],s=[i,n];c.$emit("songActivated",s)}else{var o=a[1],l=[i,o];c.$emit("songActivated",l)}this.selectedSong=i},showSongDetails:function(t){this.displayDimmer=!0,console.log(t),c.$emit("dimmerActive")},handleSortChange:function(){var t=this,e=[];return c.$on("sortChange",(function(e){t.sortCriteria=e})),e},getFilter:function(){var t=this;c.$on("filterInputSubmit",(function(e){t.filterInput=e}))}},computed:{refinedSongList:function(){var t=this,e=this.songs.filter((function(e){return e.songTitle.toUpperCase().indexOf(t.filterInput.toUpperCase())>=0}));return e}},mounted:function(){this.listenForData(),this.handleSortChange()}},B=U,M=(a("3186"),Object(g["a"])(B,I,T,!1,null,"7f446ad5",null)),R=M.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("iframe",{staticClass:"soundcloud",attrs:{width:"100%",height:"600px",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/808675707&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"}})])}],W={name:"app-about",components:{},props:[],data:function(){return{message:"poop"}},methods:{},computed:{},watch:{},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){}},z=W,G=(a("b39f"),Object(g["a"])(z,H,q,!1,null,"4eb497cd",null)),V=G.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"newSongPage"},[t._m(0),a("section",{staticClass:"formContainer"},[a("p",{staticClass:"form-header"},[t._v("Enter some detes about said song")]),a("form",{staticClass:"newSongForm",on:{submit:function(e){return e.preventDefault(),t.submitNewSong(e)}}},[a("label",{staticClass:"form-label",attrs:{for:"titleField"}},[t._v("Title "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newSong.songTitle,expression:"newSong.songTitle"}],staticClass:"textField",attrs:{type:"text",name:"titleField"},domProps:{value:t.newSong.songTitle},on:{input:function(e){e.target.composing||t.$set(t.newSong,"songTitle",e.target.value)}}})]),a("label",{staticClass:"form-label",attrs:{for:"genreField"}},[t._v("Genre "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newSong.genre,expression:"newSong.genre"}],staticClass:"textField",attrs:{type:"text",name:"genreField"},domProps:{value:t.newSong.genre},on:{input:function(e){e.target.composing||t.$set(t.newSong,"genre",e.target.value)}}})]),a("label",{staticClass:"form-label",attrs:{for:"artistField"}},[t._v("Artist "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newSong.artist,expression:"newSong.artist"}],staticClass:"textField",attrs:{type:"text",name:"artistField"},domProps:{value:t.newSong.artist},on:{input:function(e){e.target.composing||t.$set(t.newSong,"artist",e.target.value)}}})]),a("label",{staticClass:"form-label",attrs:{for:"durationField"}},[t._v("Duration "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newSong.duration,expression:"newSong.duration"}],staticClass:"textField",attrs:{type:"text",name:"durationField"},domProps:{value:t.newSong.duration},on:{input:function(e){e.target.composing||t.$set(t.newSong,"duration",e.target.value)}}})]),a("label",{staticClass:"form-label",attrs:{for:"audioField"}},[t._v("Audio Url "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newSong.audioUrl,expression:"newSong.audioUrl"}],staticClass:"textField",attrs:{type:"text",name:"audioField"},domProps:{value:t.newSong.audioUrl},on:{input:function(e){e.target.composing||t.$set(t.newSong,"audioUrl",e.target.value)}}})]),a("div",{staticClass:"descriptionContainer"},[a("label",{staticClass:"form-label",attrs:{for:"descriptonField"}},[t._v("Descripton")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newSong.description,expression:"newSong.description"}],staticClass:"textField descriptonField",attrs:{rows:"4",cols:"20",name:"descriptonField"},domProps:{value:t.newSong.description},on:{input:function(e){e.target.composing||t.$set(t.newSong,"description",e.target.value)}}})]),t._m(1)])]),a("section",{staticClass:"footer"})])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"songDetailsHeader"},[a("h2",{staticClass:"newSongHeaderText"},[t._v("New Song")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"form-buttons"},[a("div",{staticClass:"button-container"},[a("input",{staticClass:"dummy button",attrs:{type:"button",value:"Push"}}),a("input",{staticClass:"submitSong button",attrs:{type:"submit",value:"Submit"}})])])}],X={name:"NewSong",components:{},props:[],data:function(){return{message:"",newSong:{id:"",plays:0,songTitle:"",genre:"",artist:"",duration:"",audioUrl:"",description:"",published:""}}},methods:{submitNewSong:function(){c.$emit("newSongSubmitted",this.newSong),this.newSong={id:"",plays:0,songTitle:"",genre:"",artist:"",duration:"",audioUrl:"",description:"",published:""}}},computed:{},watch:{},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){}},Q=X,Y=(a("4846"),Object(g["a"])(Q,K,J,!1,null,"bca30ffc",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-view"},[a("h1",[t._v(" "+t._s(t.message)+" ")]),a("div",{staticClass:"userform-container"},[a("form",{staticClass:"userform",on:{submit:function(t){t.preventDefault()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.authInput.email,expression:"authInput.email"}],staticClass:"email",attrs:{type:"text"},domProps:{value:t.authInput.email},on:{input:function(e){e.target.composing||t.$set(t.authInput,"email",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.authInput.password,expression:"authInput.password"}],staticClass:"password",attrs:{type:"text"},domProps:{value:t.authInput.password},on:{input:function(e){e.target.composing||t.$set(t.authInput,"password",e.target.value)}}}),a("div",{staticClass:"button-container"},[a("button",{staticClass:"login-button",on:{click:t.login}},[t._v("Login")]),a("button",{staticClass:"googleLogin-button",on:{click:t.googleLogin}},[t._v("Login with Google")]),a("button",{staticClass:"logout-button",on:{click:t.logout}},[t._v("Log Out")]),a("button",{staticClass:"signup-button",on:{click:t.signup}},[t._v("Sign up")])])])])])},et=[],at={name:"LoginView",components:{},props:[],data:function(){return{message:"Login Page",googleDisplayName:"",authInput:{email:"",password:""}}},methods:{login:function(){var t=_["auth"](),e=document.querySelector(".email").value,a=document.querySelector(".password").value;t.signInWithEmailAndPassword(e,a).catch((function(t){return console.log(t)}))},googleLogin:function(){var t=_["auth"](),e=new _["auth"].GoogleAuthProvider;return e.addScope("profile"),e.addScope("email"),t.signInWithPopup(e).catch((function(t){console.log("google sign in error",t)}))},logout:function(){var t=_["auth"]();t.signOut()},signup:function(){var t=_["auth"](),e=document.querySelector(".email").value,a=document.querySelector(".password").value;t.createUserWithEmailAndPassword(e,a).catch((function(t){return console.log(t)}))},listenForAuthChange:function(){var t=this,e=_["auth"]();e.onAuthStateChanged((function(e){e?(e.providerData.forEach((function(e){t.googleDisplayName=e.displayName})),console.log(e)):(t.googleDisplayName="",console.log("not logged in")),c.$emit("googleLogin",t.googleDisplayName)}))}},computed:{},watch:{},created:function(){},mounted:function(){this.listenForAuthChange()},updated:function(){},destroyed:function(){}},it=at,nt=(a("9e36"),Object(g["a"])(it,tt,et,!1,null,"fb0cbefc",null)),st=nt.exports,ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details-container"},[a("div",{staticClass:"SongDetails"},[a("div",{staticClass:"header"},[t._v("Song Title stuff! Maybe put some toolbar stuff up here")]),a("div",{staticClass:"detail detail1"},[a("div",{staticClass:"cell-body"},[t._v("Song Details stuff1")])]),a("div",{staticClass:"detail detail2"},[a("div",{staticClass:"cell-body"},[t._v("Song Details stuff2")])]),a("div",{staticClass:"detail detail3"},[a("div",{staticClass:"cell-body"},[t._v("Song Details stuff3")])]),a("div",{staticClass:"detail detail4"},[a("div",{staticClass:"cell-body"},[t._v("Song Details stuff4")])]),a("div",{staticClass:"footer"})])])}],rt={name:"SongDetails",components:{},props:{},data:function(){return{}},methods:{},computed:{},watch:{},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){}},ct=rt,ut=(a("96ea"),Object(g["a"])(ct,ot,lt,!1,null,"12515d9e",null)),dt=ut.exports;i["a"].use(N["a"]);var gt=new N["a"]({routes:[{path:"/",name:"MainGrid",component:R},{path:"/about",name:"about",component:V},{path:"/newsong",name:"NewSong",component:Z},{path:"/songdetails",name:"SongDetails",component:dt},{path:"/Loginview",name:"LoginView",component:st}]});i["a"].use(b.a),i["a"].config.productionTip=!1,new i["a"]({router:gt,render:function(t){return t(A)},created:function(){_["initializeApp"]({apiKey:"AIzaSyC6vTWeKm37XxoqzOyAEbNUs_60XK0xAjI",authDomain:"ham-radio-music.firebaseapp.com",databaseURL:"https://ham-radio-music.firebaseio.com",projectId:"ham-radio-music",storageBucket:"ham-radio-music.appspot.com",messagingSenderId:"483571930440",appId:"1:483571930440:web:08552b24a657eff2fd8f7d"})}}).$mount("#app")},"7c5c":function(t,e,a){},"85ec":function(t,e,a){},"8dd5":function(t,e,a){"use strict";var i=a("b595"),n=a.n(i);n.a},"92f2":function(t,e,a){},"96ea":function(t,e,a){"use strict";var i=a("92f2"),n=a.n(i);n.a},"9e36":function(t,e,a){"use strict";var i=a("2bd9"),n=a.n(i);n.a},b39f:function(t,e,a){"use strict";var i=a("7c5c"),n=a.n(i);n.a},b595:function(t,e,a){},c6e6:function(t,e,a){},c79f:function(t,e,a){}});
//# sourceMappingURL=app.7baa18ad.js.map