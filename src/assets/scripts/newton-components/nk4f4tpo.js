/*! Built with http://stenciljs.com */
const{h:e}=window.NewtonComponents;class t{constructor(){this.slides=[],this.sliderProps={}}onIndexDidChange(e){this.onSlideChange.emit(this.slides[e])}componentDidLoad(){this.index=0,this.timer=setInterval(()=>{this.index=this.index===this.slides.length-1?0:this.index+1},this.sliderProps.interval||3e3)}componentDidUnload(){clearInterval(this.timer)}onClick(e){this.onSlideClick.emit(e)}static parseSlideContainerPositionStyle(e){return{transform:`translateX(-${100*e}%)`}}static parseSlideStyle(e){return{"background-image":`url(${e})`}}static parseSlideClasses(e=!1){return`slide ${e?"slide__active":""}`}render(){return e("div",{class:"container"},e("ul",{class:"slides",style:t.parseSlideContainerPositionStyle(this.index)},this.slides.map((i,s)=>e("li",{class:t.parseSlideClasses(this.index===s),onClick:e=>this.onClick(e),style:t.parseSlideStyle(i.imageUrl),"data-newton-slider-index":s},i.title?e("div",{class:"slide--title"},i.title):null))))}static get is(){return"newton-slider"}static get properties(){return{element:{elementRef:!0},index:{state:!0,watchCallbacks:["onIndexDidChange"]},sliderProps:{type:"Any",attr:"slider-props"},slides:{type:"Any",attr:"slides"},timer:{state:!0}}}static get events(){return[{name:"onSlideClick",method:"onSlideClick",bubbles:!0,cancelable:!0,composed:!0},{name:"onSlideChange",method:"onSlideChange",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"newton-slider .container{overflow:hidden;padding:0}newton-slider .slides{-webkit-transform:translateZ(0);transform:translateZ(0);list-style-type:none;white-space:nowrap;font-size:0;line-height:0;padding:0;-webkit-transition:-webkit-transform 1s ease;transition:-webkit-transform 1s ease;transition:transform 1s ease;transition:transform 1s ease,-webkit-transform 1s ease}newton-slider .slide{display:inline-block;width:100%;min-height:20vh;background-size:cover;background-repeat:no-repeat;background-position:center}newton-slider .slide--title{padding:30px 20px;line-height:1;letter-spacing:.05em;text-transform:uppercase;font-size:2rem;color:#fff;text-shadow:1px 1px 3px rgba(0,0,0,.4)}"}}export{t as NewtonSlider};