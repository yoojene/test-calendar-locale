/*! Built with http://stenciljs.com */
NewtonComponents.loadBundle("nhtayqjc",["exports","./chunk-f9385b7c.js"],function(e,t){var n=window.NewtonComponents.h,o=t.moment?t.moment:t._moment,r=function(){function e(){this.showDegreeSymbol=!0,this.showDegreeSystem=!1,this.system="F",this.icons=[{name:"default",path:"/assets/images/weather/AfternoonDashboard.png"}],this.debug=!1}return e.prototype.setIcon=function(e,t){var n=this.icons.findIndex(function(t){return t.name===e});-1===n?this.icons.push({name:e,path:t}):this.icons[n]={name:e,path:t}},e.prototype.systemWatch=function(){this.parseTemperature()},e.prototype.wsSet=function(e,t){this.ws=e,e!==t&&this.loadWeather()},e.prototype.rerender=function(){this.componentDidLoad()},e.prototype.loadWeather=function(){var e=this;this.convertLocationToLatLon(),(this.lat||this.lon)&&this.ws.get({lat:this.lat,long:this.lon,timestamp:Math.floor((new Date).getTime()/1e3).toString()}).then(function(e){return e.currently}).then(function(t){e.onWeatherDataAcquired.emit(t),e.apiTemp=parseFloat(t.temperature),e.description=t.summary,e.parseTemperature(),e.changeBackgroundBasedOnWeather(t.icon)}).catch(function(t){return e.onWeatherDataFailed.emit(t)})},e.prototype.componentDidLoad=function(){this.changeBackgroundBasedOnWeather("default")},e.prototype.parseTemperature=function(){var e="C"!==this.system?this.apiTemp:(this.apiTemp-32)/1.8;this.temperature=Math.round(e).toString()},e.prototype.convertLocationToLatLon=function(){var e;this.location&&(e=this.location.split(","),this.lat=e[0],this.lon=e[1])},e.prototype.componentWillLoad=function(){if(this.weatherService)this.ws=this.weatherService;else{if("undefined"==typeof newtonService)return void(this.debug&&console.error("Newton Service not installed, please install @pfizer/newton-js-sdk and bind it to the window."));this.ws=newtonService.service("weather")}this.ws&&this.location&&this.loadWeather()},e.prototype.changeBackgroundBasedOnWeather=function(e){var t,n=this.icons.filter(function(t){return t.name===e});if(n.length||(n=this.icons.filter(function(e){return"default"===e.name})),t=n.length?n[0]:null){var r=o(),a=n.filter(function(e){return!(e.timeBefore&&!r.isBefore(o(e.timeBefore,"HH:mm"))||e.timeAfter&&!r.isAfter(o(e.timeAfter,"HH:mm")))});t=a.length?a[0]:t,this.el.querySelector(".weather-card").style.backgroundImage="url("+t.path+")"}},e.prototype.getGeolocation=function(e){this.onAccessLocation.emit(e)},e.prototype.render=function(){var e=this;return n("div",{class:"container"},n("div",{class:"weather-card",onClick:function(t){return e.getGeolocation(t)}},n("slot",{name:"weather-contents"},n("div",{class:"weather-card-contents"},this.temperature?n("div",{class:"weather-text-container"},n("div",{class:"weather-temp"},this.temperature,this.showDegreeSymbol&&this.temperature?"°":"",this.showDegreeSystem?""+this.system:""),n("div",{class:"weather-desc"},this.description)):n("slot",{name:"no-weather"},n("div",{class:"weather-text-container"},n("div",{class:"weather-temp"},"--",this.showDegreeSymbol&&this.temperature?"°":"",this.showDegreeSystem?""+this.system:""),n("div",{class:"weather-desc"},"N/A"))))),n("slot",{name:"weather-permissions"},n("div",{class:"weather-permissions"},"Enable Location"))))},Object.defineProperty(e,"is",{get:function(){return"newton-weather-card"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{changeBackgroundBasedOnWeather:{method:!0},debug:{type:Boolean,attr:"debug"},description:{state:!0},el:{elementRef:!0},icons:{type:"Any",attr:"icons",reflectToAttr:!0},lat:{state:!0},loadWeather:{method:!0},location:{type:String,attr:"location",watchCallbacks:["loadWeather"]},lon:{state:!0},rerender:{method:!0},setIcon:{method:!0},showDegreeSymbol:{type:Boolean,attr:"show-degree-symbol"},showDegreeSystem:{type:Boolean,attr:"show-degree-system"},system:{type:String,attr:"system",watchCallbacks:["systemWatch"]},temperature:{state:!0},weatherService:{type:"Any",attr:"weather-service",watchCallbacks:["wsSet"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"onAccessLocation",method:"onAccessLocation",bubbles:!0,cancelable:!0,composed:!0},{name:"onWeatherDataAcquired",method:"onWeatherDataAcquired",bubbles:!0,cancelable:!0,composed:!0},{name:"onWeatherDataFailed",method:"onWeatherDataFailed",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"newton-weather-card{--tempFontSize:3rem;--descFontSize:2rem;--weatherPermsBottomOffset:-40px}newton-weather-card .weather-card{background-color:#58bfc4;background-size:cover;color:#fff;text-align:center;background-repeat:no-repeat;background-position:center;height:180px}newton-weather-card .weather-text-container{padding-top:15%;width:100%;text-align:center;color:var(--black)}newton-weather-card .weather-temp{font-size:var(--tempFontSize);line-height:var(--tempFontSize);font-weight:700}newton-weather-card .weather-desc{font-size:var(--descFontSize);font-weight:700}newton-weather-card .weather-permissions{position:relative;bottom:var(--weatherPermsBottomOffset)}"},enumerable:!0,configurable:!0}),e}();e.NewtonWeatherCard=r,Object.defineProperty(e,"__esModule",{value:!0})});