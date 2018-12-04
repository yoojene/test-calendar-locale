/*! Built with http://stenciljs.com */
var __generator=this&&this.__generator||function(t,n){var e,o,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;c;)try{if(e=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,o=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=n.call(t,c)}catch(t){r=[6,t],o=0}finally{e=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};NewtonComponents.loadBundle("yk6dxkry",["exports"],function(t){var n=window.NewtonComponents.h,e=function(t,n,e,o){return new(e||(e=Promise))(function(i,r){function c(t){try{a(o.next(t))}catch(t){r(t)}}function s(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){t.done?i(t.value):new e(function(n){n(t.value)}).then(c,s)}a((o=o.apply(t,n||[])).next())})},o=function(){function t(){this.iconsFolder="assets/icons",this.selected=!1,this.inlineSvgs=!1,this.svgData={on:"",off:""},this.iconSet={on:null,off:null}}return t.prototype.componentWillLoad=function(){(this.icon||this.iconOn&&this.iconOff)&&(this.iconSet={on:this.iconsFolder+"/"+(this.iconOn||this.icon)+".svg",off:this.iconsFolder+"/"+(this.iconOff||this.icon)+".svg"},this.genIconPath(),this.inlineSvgs&&this.load())},t.prototype.load=function(){return e(this,void 0,void 0,function(){var t,n=this;return __generator(this,function(o){return t=[{type:"on",url:this.iconSet.on}],this.iconSet.on!==this.iconSet.off&&t.push({type:"off",url:this.iconSet.off}),"undefined"==typeof fetch?(console.warn("Fetch implementation was not found, cannot load inline svgs"),[2]):(Promise.all(t.map(function(t){return fetch(t.url).then(function(o){return e(n,void 0,void 0,function(){var n;return __generator(this,function(e){switch(e.label){case 0:return n={icon:t.type},[4,o.text()];case 1:return[2,(n.body=e.sent(),n)]}})})})})).then(function(t){t.forEach(function(t){n.svgData[t.icon]=t.body}),n.svgData.off=n.svgData.off||n.svgData.on}).then(function(t){return n.replaceSvgInline()}),[2])})})},t.prototype.replaceSvgInline=function(){this.inlineSvgs&&(this.el.querySelector(".helix--icon").innerHTML=this.isOn?this.svgData.on:this.svgData.off)},t.prototype.toggle=function(){this.isOn=!this.isOn,this.genIconPath(),this.replaceSvgInline()},t.prototype.genIconPath=function(){this.iconPath=this.isOn?this.iconSet.on:this.iconSet.off},t.prototype.render=function(){return n("span",{class:"helix--icon"},this.inlineSvgs?"":n("img",{src:"{this.iconPath}"}))},Object.defineProperty(t,"is",{get:function(){return"helix-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},icon:{type:String,attr:"icon"},iconOff:{type:String,attr:"icon-off"},iconOn:{type:String,attr:"icon-on"},iconPath:{state:!0},iconSet:{state:!0},iconsFolder:{type:String,attr:"icons-folder"},inlineSvgs:{type:Boolean,attr:"inline-svgs"},isOn:{state:!0},load:{method:!0},selected:{type:Boolean,attr:"selected"},svgData:{state:!0},toggle:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return""},enumerable:!0,configurable:!0}),t}();t.HelixIcon=o,Object.defineProperty(t,"__esModule",{value:!0})});