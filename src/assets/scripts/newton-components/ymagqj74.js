/*! Built with http://stenciljs.com */
const{h:t}=window.NewtonComponents;class e{constructor(){this.submitted=!1}handleKeyDown(t){t.preventDefault()}onCodeSubmit(t){t.preventDefault(),this.submitted=!0,this.codeSubmitted.emit()}focusOut(){this.inFocus.emit()}handleChange(t){this.code=t.target.value,this.handleInputChange.emit(this.code)}render(){return t("div",{class:"container"},t("div",{class:"text"}," Enter Code "),t("form",{onSubmit:t=>this.onCodeSubmit(t)},t("label",{class:"helix--label"},t("input",{class:"helix--input code",type:this.type,onFocus:()=>this.focusOut(),onInput:()=>this.handleChange(event),placeholder:this.placeholder,value:this.code})),t("div",{hidden:!this.showError},t("slot",{name:"error-message"})),t("button",{hidden:!this.showSubmitButton,disabled:this.submitDisabled,class:"helix--button helix--submit submit",type:"submit"},this.submitText)))}static get is(){return"newton-activation-code"}static get properties(){return{code:{state:!0},focusOut:{method:!0},handleChange:{method:!0},onCodeSubmit:{method:!0},placeholder:{type:String,attr:"placeholder"},showError:{type:Boolean,attr:"show-error"},showSubmitButton:{type:Boolean,attr:"show-submit-button"},submitDisabled:{type:Boolean,attr:"submit-disabled"},submitted:{state:!0},submitText:{type:String,attr:"submit-text"},type:{type:String,attr:"type"}}}static get events(){return[{name:"codeSubmitted",method:"codeSubmitted",bubbles:!0,cancelable:!0,composed:!0},{name:"inFocus",method:"inFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"handleInputChange",method:"handleInputChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"keydown.enter",method:"handleKeyDown"}]}static get style(){return"newton-activation-code .container{padding-top:2rem;padding-bottom:2rem;text-align:center}newton-activation-code .text{display:none}newton-activation-code .code{margin-top:10px}"}}export{e as NewtonActivationCode};