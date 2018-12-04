/*! Built with http://stenciljs.com */
const{h:t}=window.NewtonComponents;class e{onLanguageChanged(t){this.controller&&this.controller.language(t)}onPosterChanged(t){this.controller&&this.controller.poster(t)}onSrcChanged(t){this.controller&&this.controller.src({src:t})}onMediaChanged(t){console.log(`NewtonBrightcovePlayer.onMediaChanged(id: ${t})`),this.controller&&this.controller.catalog.getVideo(t,(t,e)=>{if(t)throw new Error(t);this.controller.catalog.load(e)})}onInitialisedChanged(t){!0===t&&setTimeout(()=>this.onBootstrapPlayer(),0)}dispose(){this.controller&&this.controller.dispose()}componentWillLoad(){this.initialised=!1}componentDidLoad(){this.factory.ready().then(()=>{this.initialised=!0})}componentDidUnload(){this.dispose()}onBootstrapPlayer(){console.log("NewtonBrightcovePlayer.onBootstrapPlayer()"),this.controller=this.factory.bootstrap(this.element.getElementsByTagName("video")[0],this.playerId),this.controller.ready(()=>{this.language&&this.onLanguageChanged(this.language),this.poster&&this.onPosterChanged(this.poster),this.src?this.onSrcChanged(this.src):this.mediaId&&this.onMediaChanged(this.mediaId)})}render(){return t("div",null,this.initialised?t("video",{"data-account":this.factory.config.account,"data-player":this.factory.config.player,"data-embed":this.factory.config.embed,preload:this.factory.config.preload,id:this.playerId,class:"video-js",controls:!0,playsinline:!0,"webkit-playsinline":!0}):t("h3",null,"Initialising..."))}static get is(){return"newton-brightcove-player"}static get properties(){return{controller:{state:!0},dispose:{method:!0},element:{elementRef:!0},factory:{context:"brightCoveSetupFactory"},initialised:{state:!0,watchCallbacks:["onInitialisedChanged"]},language:{type:String,attr:"language",watchCallbacks:["onLanguageChanged"]},mediaId:{type:String,attr:"media-id",watchCallbacks:["onMediaChanged"]},playerId:{type:String,attr:"player-id"},poster:{type:String,attr:"poster",watchCallbacks:["onPosterChanged"]},src:{type:String,attr:"src",watchCallbacks:["onSrcChanged"]}}}static get style(){return"newton-brightcove-player{border:1px solid red}"}}export{e as NewtonBrightcovePlayer};