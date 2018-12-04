/*! Built with http://stenciljs.com */
NewtonComponents.loadBundle("nk4f4tpo",["exports"],function(e){var n=window.NewtonComponents.h,t=function(){function e(){this.slides=[],this.sliderProps={}}return e.prototype.onIndexDidChange=function(e){this.onSlideChange.emit(this.slides[e])},e.prototype.componentDidLoad=function(){var e=this;this.index=0,this.timer=setInterval(function(){e.index=e.index===e.slides.length-1?0:e.index+1},this.sliderProps.interval||3e3)},e.prototype.componentDidUnload=function(){clearInterval(this.timer)},e.prototype.onClick=function(e){this.onSlideClick.emit(e)},e.parseSlideContainerPositionStyle=function(e){return{transform:"translateX(-"+100*e+"%)"}},e.parseSlideStyle=function(e){return{"background-image":"url("+e+")"}},e.parseSlideClasses=function(e){return void 0===e&&(e=!1),"slide "+(e?"slide__active":"")},e.prototype.render=function(){var t=this;return n("div",{class:"container"},n("ul",{class:"slides",style:e.parseSlideContainerPositionStyle(this.index)},this.slides.map(function(i,l){return n("li",{class:e.parseSlideClasses(t.index===l),onClick:function(e){return t.onClick(e)},style:e.parseSlideStyle(i.imageUrl),"data-newton-slider-index":l},i.title?n("div",{class:"slide--title"},i.title):null)})))},Object.defineProperty(e,"is",{get:function(){return"newton-slider"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{element:{elementRef:!0},index:{state:!0,watchCallbacks:["onIndexDidChange"]},sliderProps:{type:"Any",attr:"slider-props"},slides:{type:"Any",attr:"slides"},timer:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"onSlideClick",method:"onSlideClick",bubbles:!0,cancelable:!0,composed:!0},{name:"onSlideChange",method:"onSlideChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"newton-slider .container{overflow:hidden;padding:0}newton-slider .slides{-webkit-transform:translateZ(0);transform:translateZ(0);list-style-type:none;white-space:nowrap;font-size:0;line-height:0;padding:0;-webkit-transition:-webkit-transform 1s ease;transition:-webkit-transform 1s ease;transition:transform 1s ease;transition:transform 1s ease,-webkit-transform 1s ease}newton-slider .slide{display:inline-block;width:100%;min-height:20vh;background-size:cover;background-repeat:no-repeat;background-position:center}newton-slider .slide--title{padding:30px 20px;line-height:1;letter-spacing:.05em;text-transform:uppercase;font-size:2rem;color:#fff;text-shadow:1px 1px 3px rgba(0,0,0,.4)}"},enumerable:!0,configurable:!0}),e}();e.NewtonSlider=t,Object.defineProperty(e,"__esModule",{value:!0})});