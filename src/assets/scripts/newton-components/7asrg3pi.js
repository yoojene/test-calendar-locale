/*! Built with http://stenciljs.com */
const{h:e}=window.NewtonComponents;class t{constructor(){this.model={email:"",password:""},this.submitted=!1}componentWillLoad(){this.isServer||"undefined"==typeof newtonService&&console.error("Newton Service not installed, please install @pfizer/newton-js-sdk and bind it to the window.")}loginFormSubmit(e){this.submitted=!0,e.preventDefault(),this.isServer||("undefined"!=typeof newtonService?newtonService.service("auth").loginViaEmail(this.model.email,this.model.password).then(e=>{this.onLoginSucess.emit(e)},e=>{this.onLoginFailure.emit(e)}):this.onLoginFailure.emit(new Error("Newton Service not installed, please install @pfizer/newton-js-sdk and bind it to the window.")))}resetPassword(){this.onResetClicked.emit()}handleLogin(e){this.model.email=e.target.value}handlePassword(e){this.model.password=e.target.value}render(){return e("form",{name:"loginForm",class:"container",onSubmit:e=>this.loginFormSubmit(e)},e("label",{class:"helix--label"},e("input",{class:"helix--input email",value:this.model.email,onInput:e=>this.handleLogin(e),name:"email",type:"email",placeholder:"Email Address",tabindex:"1",required:!0})),e("label",{class:"helix--label"},e("input",{class:"helix--input password",value:this.model.password,onInput:e=>this.handlePassword(e),name:"password",type:"password",placeholder:"Password",tabindex:"2",required:!0})),e("button",{class:"helix--button helix--submit login",type:"submit"}," Login "),e("a",{class:"forgot-password",onClick:()=>this.resetPassword()},"Forgot your password?"))}static get is(){return"newton-login"}static get properties(){return{isServer:{context:"isServer"},loginFormSubmit:{method:!0},model:{state:!0},resetPassword:{method:!0}}}static get events(){return[{name:"onLoginSucess",method:"onLoginSucess",bubbles:!0,cancelable:!0,composed:!0},{name:"onLoginFailure",method:"onLoginFailure",bubbles:!0,cancelable:!0,composed:!0},{name:"onResetClicked",method:"onResetClicked",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"newton-login .container{padding-top:2rem;padding-bottom:2rem;text-align:center}newton-login .email{background-image:url(/assets/images/username.png),url(/public/assets/img/username.png)}newton-login .password{background-image:url(/assets/images/password.png),url(/public/assets/img/password.png)}newton-login .forgot-password{display:block;margin-top:50px}"}}export{t as NewtonLogin};