/*! Built with http://stenciljs.com */
const{h:t}=window.NewtonComponents;class e{constructor(){this.submitted=!1,this.submitted=!1}onForgotSubmit(t){this.isServer||("undefined"!=typeof newtonService?(t.preventDefault(),this.submitted=!0,newtonService.forgotPassword(this.email).subscribe(t=>{this.onForgotPasswordSuccess.emit(t)},t=>{this.onForgotPasswordFailure.emit(t)}),this.forgotPasswordSubmitted.emit()):this.onForgotPasswordFailure.emit(new Error("Newton Service not installed, please install @pfizer/newton-js-sdk and bind it to the window.")))}render(){return t("div",{class:"container"},t("form",{id:"newton-forgot-password_form",class:"form",onSubmit:t=>this.onForgotSubmit(t)},t("div",{id:"main-container-registration"},t("label",{class:"helix--label"},t("input",{class:"helix--input email",placeholder:this.defaultLabel,value:this.email,name:"email",type:"email",tabindex:"1",required:!0})),t("button",{type:"submit",class:"helix--button helix--submit button",hidden:!this.showSubmitButton},this.buttonText))))}static get is(){return"newton-forgot-password"}static get properties(){return{buttonText:{type:String,attr:"button-text"},defaultLabel:{type:String,attr:"default-label"},email:{type:String,attr:"email"},isServer:{context:"isServer"},onForgotSubmit:{method:!0},showSubmitButton:{type:Boolean,attr:"show-submit-button"},submitted:{state:!0}}}static get events(){return[{name:"onForgotPasswordSuccess",method:"onForgotPasswordSuccess",bubbles:!0,cancelable:!0,composed:!0},{name:"onForgotPasswordFailure",method:"onForgotPasswordFailure",bubbles:!0,cancelable:!0,composed:!0},{name:"forgotPasswordSubmitted",method:"forgotPasswordSubmitted",bubbles:!0,cancelable:!0,composed:!0},{name:"privateinFocus",method:"privateinFocus",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"newton-forgot-password .container{padding-top:2rem;padding-bottom:2rem;text-align:center}newton-forgot-password .email{background-image:url(src/components/auth/newton-forgot-password/assets/images/username.png)}newton-forgot-password .button{margin-top:10px}"}}export{e as NewtonForgotPassword};