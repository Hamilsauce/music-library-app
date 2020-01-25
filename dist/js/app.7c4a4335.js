(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00ff":function(t,e,a){"use strict";var s=a("bf5b"),i=a.n(s);i.a},"034f":function(t,e,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"0720":function(t,e,a){},"29d9":function(t,e,a){},"30f9":function(t,e,a){"use strict";var s=a("29d9"),i=a.n(s);i.a},5245:function(t,e,a){"use strict";var s=a("e057"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[!0===t.headerDisplayState?a("header",[a("h6",{staticClass:"assistant"},[t._v(t._s(t.assistantMessage))])]):t._e(),a("div",{staticClass:"app-shell"},[a("div",{staticClass:"shell-head"},[t._m(0),a("div",{staticClass:"header header2"},[a("label",{staticClass:"header2-label"},[t._v("Search for a tune")]),a("div",{staticClass:"header-button-container"},[a("form",{staticClass:"header-form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterInput,expression:"filterInput"}],staticClass:"filter-input",attrs:{type:"text",name:"filter-input"},domProps:{value:t.filterInput},on:{click:t.handleClick,input:function(e){e.target.composing||(t.filterInput=e.target.value)}}})])])])]),a("div",{staticClass:"shell-body"},[a("transition",{attrs:{name:"fade"}},[a("ToolBar",{staticClass:"toolbar"})],1),a("div",{staticClass:"body-row"},[a("router-view",{attrs:{filterInput:t.filterInput,songs:t.songs}}),a("transition",{attrs:{name:"fade"}},[a("Sidebar",{attrs:{sidebarDisplayState:t.sidebarDisplayState}})],1)],1)],1)]),!1===t.headerDisplayState?a("div",{staticClass:"hiddenMessage",staticStyle:{"text-align":"center",position:"relative"},on:{click:t.toggleHeader}},[t._v("Show Header")]):t._e()])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header header1"},[a("h1",[a("div",{staticClass:"logo1"},[t._v("ham")]),a("div",{staticClass:"logo2"},[t._v("RADIO")])])])}],o=(a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"toolbar"},[a("div",{staticClass:"top-bar"},[a("div",{staticClass:"expand-button",attrs:{title:"Click here to show more options!"},on:{click:t.toggleBottomBar}},[a("i",{staticClass:"fas fa-caret-square-down"})]),a("div",{staticClass:"top-bar-div title-container"},[a("transition",{attrs:{name:"fade"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!0===t.safeReveal,expression:"safeReveal === true"}],staticClass:"song-title",class:{fadeTitle:t.displayPlayingMessage}},[t._v(t._s(t.songTitle))])]),a("span",{directives:[{name:"show",rawName:"v-show",value:!0===t.displayPlayingMessage,expression:"displayPlayingMessage === true"}],staticClass:"now-playing-message"},[t._v("Now Playing")])],1),a("div",[!1===t.audioPaused?a("input",{staticClass:"pause-button tool-button",attrs:{disabled:""===t.songName,type:"button",name:"pause-button",value:"Pause"},on:{click:t.pauseAudio}}):t._e(),!0===t.audioPaused?a("input",{staticClass:"play-button tool-button",attrs:{type:"button",name:"play-button",value:"Resume"},on:{click:t.resumeAudio}}):t._e()])]),a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"bottom-bar",style:{height:!0===t.expandBottomBar?"30px":"0px"}},[a("div",{staticClass:"grid-cell"},[a("div",{staticClass:"tooltip"},[a("button",{staticClass:"share-button",attrs:{type:"button",name:"share-button",value:"Share"},on:{click:t.shareActiveSong}},[a("svg",{staticStyle:{"enable-background":"new 0 0 32 32"},attrs:{version:"1.1",id:"Icons",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",height:"17px",width:"18px",viewBox:"0 0 35 25",fill:"#fff","xml:space":"preserve"}},[a("path",{attrs:{d:"M29.3,2.6c-0.3-0.2-0.7-0.3-1-0.2L3,11.7c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l10.2,3.8l10-10\nc0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-9.8,9.8l6.6,10.6c0.2,0.3,0.5,0.5,0.8,0.5c0.1,0,0.1,0,0.2,0c0.4-0.1,0.7-0.4,0.8-0.7l6.2-25.2\nC29.7,3.3,29.6,2.9,29.3,2.6z"}})])])]),a("input",{staticClass:"download-button",attrs:{type:"button",name:"download-button",value:"download"}})]),a("div",{staticClass:"grid-cell"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.audioSrc,expression:"audioSrc"}],staticClass:"songUrlText",attrs:{type:"text",value:"no active song"},domProps:{value:t.audioSrc},on:{input:function(e){e.target.composing||(t.audioSrc=e.target.value)}}})])])]),a("div",{staticClass:"audio-container"},[a("audio",{attrs:{id:"audio-player"}},[a("source",{staticClass:"source",attrs:{src:t.audioSrc,type:"audio/mpeg"}})])])],1)}),r=[],l=new s["a"],c=l,u={name:"ToolBar",components:{},props:{inputData:String,songUrl:String},data:function(){return{displayPlayingMessage:!1,safeReveal:!1,expandBottomBar:!1,audioPaused:!1,songName:"",audioSrc:"",notification2:"Details...",eventInput:this.filterInput}},methods:{toggleNowPlaying:function(){var t=this;this.displayPlayingMessage=!0,setTimeout((function(){console.log("now playin"),t.displayPlayingMessage=!1}),1500)},toggleBottomBar:function(){this.expandBottomBar=!this.expandBottomBar},receivefilterInput:function(){var t=this;c.$on("filterInputSubmit",(function(e){t.inputData=e,t.inputData[0]}))},playAudio:function(){var t=this;this.safeReveal=!1,c.$on("songActivated",(function(e){var a=document.getElementById("audio-player");t.songTitle!=e[0]&&("noUrl"!==e[1]?(t.toggleNowPlaying(),console.log(e),t.songName=e[0],t.audioSrc=e[1],t.audioPaused=!1,a.pause(),a.load(),a.play(),t.safeReveal=!0):t.songName="No audio for ".concat(e[0]))}))},resumeAudio:function(){var t=document.getElementById("audio-player");t.play(),this.audioPaused=!1},pauseAudio:function(){var t=document.getElementById("audio-player");t.pause(),this.audioPaused=!0},shareActiveSong:function(){var t=document.querySelector(".songUrlText");t.select(),t.setSelectionRange(0,99999),document.execCommand("copy");var e="";e=this.songTitle?"The link for '".concat(this.songTitle,"' has been copied to your clipboard!"):"Select a song to share it!",alert(e)}},computed:{filterInput:function(){return this.inputData},songTitle:function(){return this.songName}},created:function(){this.playAudio()},mounted:function(){},updated:function(){},destroyed:function(){}},d=u,p=(a("00ff"),a("2877")),f=Object(p["a"])(d,o,r,!1,null,"64da7cde",null),g=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"sidebarShown",class:{sideBarDisable:t.disableState},style:{width:!0===t.sidebarDisplayState?"150px":"0px"},attrs:{id:"sidebar-div"}},[a("div",{staticClass:"links",style:{width:!0===t.sidebarDisplayState?"150px":"0px"}},[a("h3",[t._v("Nav")]),a("div",{staticClass:"linkItem"},[a("router-link",{staticClass:"routerLink",attrs:{to:"/"}},[t._v("Library")])],1),a("div",{staticClass:"linkItem"},[a("router-link",{staticClass:"routerLink",attrs:{to:"/newsong"}},[t._v("New Song")])],1),a("div",{staticClass:"linkItem"},[a("router-link",{staticClass:"routerLink",attrs:{to:"/About"}},[t._v("About")])],1),a("div",{staticClass:"github-link linkItem"},[a("a",{attrs:{href:"https://github.com/Hamilsauce"}},[t._v("github")])])])])]),a("div",{staticClass:"sidebar-container",attrs:{title:"Click to expand navigation!"},on:{click:t.toggleSidebar}},[a("i",{directives:[{name:"show",rawName:"v-show",value:!1===t.sidebarDisplayState,expression:"sidebarDisplayState === false"}],staticClass:"fas fa-angle-double-left sidebar-toggle",class:{toggleClicked:t.toggleClicked}}),a("i",{directives:[{name:"show",rawName:"v-show",value:!0===t.sidebarDisplayState,expression:"sidebarDisplayState === true"}],staticClass:"fas fa-angle-double-right sidebar-toggle",class:{toggleClicked:t.toggleClicked}})])],1)},m=[],v={components:{},props:{},data:function(){return{disableState:!1,sidebarDisplayState:!1,toggleClicked:!1}},methods:{disableForDimmer:function(){var t=this;c.$on("dimmerActive",(function(){t.disableState=!0}))},toggleSidebar:function(){var t=this;this.toggleClicked=!0,setTimeout((function(){t.sidebarDisplayState=!t.sidebarDisplayState,t.toggleClicked=!1}),425)},peepSidebar:function(){var t=this;setTimeout((function(){t.toggleSidebar(),setTimeout((function(){t.toggleSidebar()}),700)}),250)}},computed:{},watch:{},created:function(){},mounted:function(){this.disableForDimmer(),this.peepSidebar()},updated:function(){},destroyed:function(){}},b=v,C=(a("85cb"),Object(p["a"])(b,h,m,!1,null,"26e545f2",null)),y=C.exports,S={name:"app",components:{ToolBar:g,Sidebar:y},props:{},data:function(){return{headerDisplayState:!0,filterClickCount:0,sidebarDisplayState:!1,assistantMessage:"Select a tile to listen.",sortCriteria:"",filterInput:"",CellData:[{elementId:"",title:"",subject:"",date:""}],gridCell:{id:null,name:"",content:"",markup:""},songs:[]}},methods:{initializeData:function(){var t=this;fetch("https://hamilsauce.github.io/audio/SongData.json").then((function(t){return t.json()})).then((function(e){t.songs=e.songs})),c.$emit("dataLoad",this.songs)},toggleHeader:function(){this.headerDisplayState=!this.headerDisplayState},toggleSubmit:function(){this.submitDisplayState=!this.submitDisplayState},handleClick:function(){if(this.filterClickCount<2?this.filterClickCount=this.filterClickCount+1:this.filterClickCount=this.filterClickCount,this.filterClickCount>1)return this.filterInput="",void(this.filterClickCount=0)},handleSubmit:function(){c.$emit("userInputSubmit",this.filterInput),this.filterInput="",this.toggleSubmit()},listenForActiveSong:function(){var t=this;c.$on("songActivated",(function(){setTimeout((function(){t.assistantMessage="Press again to open song page"}),1e3),setTimeout((function(){t.assistantMessage="Select a tile to listen."}),7e3)}))}},mounted:function(){this.initializeData(),this.listenForActiveSong()}},w=S,x=(a("034f"),Object(p["a"])(w,i,n,!1,null,null,null)),_=x.exports,k=a("8c4f"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"MainGrid"},[a("div",{staticClass:"grid-view-header"}),a("div",{staticClass:"grid-body"},t._l(t.refinedSongList,(function(e){return a("work-cell",{key:e.id,attrs:{song:e,selectedSong:t.selectedSong},on:{songCellActivated:t.handleActiveSong,showSongDetails:t.showSongDetails}})})),1)])},A=[],I=(a("4de4"),a("c975"),a("3835")),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-cell",class:{activeCell:t.activated},on:{click:t.cellActive}},[a("div",{staticClass:"internal-grid"},[a("div",{staticClass:"cell-head",class:{activeCellHead:t.activated}},[a("div",{staticClass:"button-container",class:{buttonContainerHidden:!t.activated}},[a("button",{on:{click:t.showSongDetails}},[t._v("Song Details")])]),a("div",{staticClass:"checkbox-container"},[!0===t.activated?a("img",{staticClass:"checkboxSvg",attrs:{src:"https://hamilsauce.github.io/music-library-app/src/assets/checked-box.svg",width:"20px",height:"20px",alt:"checkbox"}}):a("img",{staticClass:"checkboxSvg",attrs:{src:"https://hamilsauce.github.io/music-library-app/src/assets/unchecked-box.svg",width:"20px",height:"20px",alt:"checkbox"}})])]),a("div",{staticClass:"cell-body"},[a("p",[t._v(t._s(t.song.songTitle))])]),a("div",{staticClass:"cell-foot"},[a("p",[t._v(t._s(t.song.genre))])])])])},P=[],T=(a("d81d"),a("13d5"),a("ac1f"),a("1276"),a("498a"),{name:"WorkCell",components:{},props:{song:Object,selectedSong:String},data:function(){return{checkedSong:"",audioUrl:"",errorMsg:""}},methods:{cellActive:function(){var t=[],e=[];this.song.hasOwnProperty("audioUrl")?(e=["url",this.cleanedAudioUrl],t.push(e)):(e=["error","noUrl"],t.push(e)),t.push(this.song.songTitle),this.$emit("songCellActivated",t)},showSongDetails:function(){this.$emit("showSongDetails",this.song.songTitle)}},computed:{activated:function(){return this.selectedSong===this.song.songTitle},cleanedAudioUrl:function(){var t="";if(this.song.audioUrl){var e=this.song.audioUrl.trim().split(""),a=e.map((function(t){var e=" "===t?"%20":t;return e})).reduce((function(t,e){return t+e}),"");return console.log(a),a}return t="No audio for this song!",t}},watch:{},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){}}),$=T,O=(a("6792"),Object(p["a"])($,F,P,!1,null,"83a7f16a",null)),j=O.exports,N={name:"MainGrid",components:{WorkCell:j},data:function(){return{songList:this.songs,songsFiltered:"",sortCriteria:String,displayDimmer:!1,selectedSong:null}},props:{msg:String,songs:Array,filterInput:String},methods:{listenForData:function(){var t=this;c.$on("dataLoad",(function(e){t.songList=e}))},handleActiveSong:function(t){var e=Object(I["a"])(t,2),a=e[0],s=e[1];if(this.selectedSong!=s)if("url"===a[0]){var i=a[1],n=[s,i];c.$emit("songActivated",n)}else{var o=a[1],r=[s,o];c.$emit("songActivated",r)}this.selectedSong=s},showSongDetails:function(t){this.displayDimmer=!0,console.log(t),c.$emit("dimmerActive")},handleSortChange:function(){var t=this,e=[];return c.$on("sortChange",(function(e){t.sortCriteria=e})),e},getFilter:function(){var t=this;c.$on("filterInputSubmit",(function(e){t.filterInput=e}))},filterSongs:function(){var t=this,e=this.songs.filter((function(e){return e.songTitle.toUpperCase().indexOf(t.filterInput.toUpperCase())>=0}));return e}},computed:{refinedSongList:function(){var t=this.filterSongs();return t}},mounted:function(){this.listenForData(),this.handleSortChange()}},B=N,M=(a("30f9"),Object(p["a"])(B,D,A,!1,null,"7c9d79a4",null)),E=M.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("iframe",{staticClass:"soundcloud",attrs:{width:"100%",height:"600px",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/808675707&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"}})])}],R={name:"app-about",components:{},props:[],data:function(){return{message:"poop"}},methods:{},computed:{},watch:{},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){}},H=R,G=(a("a279"),Object(p["a"])(H,U,L,!1,null,"551dd61e",null)),z=G.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("header",{staticClass:"songDetailsHeader"},[a("h2",{staticClass:"headerText"},[t._v("New Song")])]),a("section",{staticClass:"formContainer"},[a("p",{staticClass:"form-header"},[t._v("Enter some detes about said song")]),a("form",{staticClass:"newSongForm"},[a("label",{staticClass:"form-label",attrs:{for:"titleField"}},[t._v("Title")]),a("input",{staticClass:"textField",attrs:{type:"text",name:"titleField"}}),a("label",{staticClass:"form-label",attrs:{for:"genreField"}},[t._v("Genre")]),a("input",{staticClass:"textField",attrs:{type:"text",name:"genreField"}}),a("label",{staticClass:"form-label",attrs:{for:"artistField"}},[t._v("Artist")]),a("input",{staticClass:"textField",attrs:{type:"text",name:"artistField"}}),a("label",{staticClass:"form-label",attrs:{for:"durationField"}},[t._v("Duration")]),a("input",{staticClass:"textField",attrs:{type:"text",name:"durationField"}}),a("label",{staticClass:"form-label",attrs:{for:"audioField"}},[t._v("Audio Url")]),a("input",{staticClass:"textField",attrs:{type:"text",name:"audioField"}}),a("label",{staticClass:"form-label",attrs:{for:"descriptonField"}},[t._v("Descripton")]),a("textarea",{staticClass:"textField descriptonField",attrs:{rows:"4",cols:"20",name:"descriptonField"}}),a("section",{staticClass:"form-buttons"},[a("div",{staticClass:"button-container"},[a("input",{staticClass:"dummy button",attrs:{type:"button",value:"Push"}}),a("input",{staticClass:"submitSong button",attrs:{type:"submit",value:"Submit"}})])])])]),a("section",{staticClass:"footer"})])}],W={name:"NewSong",components:{},props:[],data:function(){return{message:""}},methods:{},computed:{},watch:{},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){}},K=W,Q=(a("5245"),Object(p["a"])(K,q,J,!1,null,"bbd73918",null)),V=Q.exports;s["a"].use(k["a"]);var X=new k["a"]({routes:[{path:"/",name:"MainGrid",component:E},{path:"/about",name:"about",component:z},{path:"/newsong",name:"NewSong",component:V}]});s["a"].config.productionTip=!1,new s["a"]({router:X,render:function(t){return t(_)}}).$mount("#app")},6792:function(t,e,a){"use strict";var s=a("6aca"),i=a.n(s);i.a},"6aca":function(t,e,a){},"7d35":function(t,e,a){},"85cb":function(t,e,a){"use strict";var s=a("7d35"),i=a.n(s);i.a},"85ec":function(t,e,a){},a279:function(t,e,a){"use strict";var s=a("0720"),i=a.n(s);i.a},bf5b:function(t,e,a){},e057:function(t,e,a){}});
//# sourceMappingURL=app.7c4a4335.js.map