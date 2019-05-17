import{d as e,e as s,f as t}from"./p-8da096b1.js";const l="Welcome to",a="By logging in, you confirm that you\n   will only access materials to which you are\n   legally entitled. Any use of materials accessed should be in adherence with\n   the terms of your agreement.",o=()=>(new Date).getFullYear();class n{constructor(t){e(this,t),this.name="Generic App",this.type="native",this.email="native@prop.com",this.loginAttempt=s(this,"loginAttempt",7)}loginAttemptHandler(){const e={email:this.email,password:this.password};this._doConsoleLog(e),this.loginAttempt.emit(e)}handleChange(e,s){this[e]=s.target.value}render(){return t("div",{class:"login-form"},t("div",{class:"type-flag "+this.type,title:this.type}),t("img",{class:"logo",src:"/assets/logo.png"}),t("h3",null,l," ",this.name),t("p",null,t("small",null,a)),t("form",{class:"form"},t("div",{class:"form-group"},t("input",{type:"text",class:"form-control",placeholder:"Email",name:"email",value:this.email,onInput:e=>this.handleChange("email",e),required:!0})),t("div",{class:"form-group"},t("input",{type:"password",class:"form-control",placeholder:"Password",name:"password",value:this.password,onInput:e=>this.handleChange("password",e),required:!0})),t("button",{type:"button",class:"btn",onClick:()=>this.loginAttemptHandler()},"Login")),t("p",{class:"question"},t("a",{href:"#"},t("small",null,"Forgot password? Reset here."))),t("p",{class:"question"},t("a",{href:"#"},t("small",null,"Need an account? Request access here."))),t("small",null,this.name," ©",t("span",null,o())))}_doConsoleLog(e){}static get style(){return".login-form{position:relative;text-align:center;width:300px;height:450px;overflow:hidden;display:inline-block;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;color:rgba(0,0,0,.87);font-size:13px;background-color:#f3f3f4;padding:20px}.login-form .type-flag{position:absolute;top:5px;right:5px;width:50px;height:50px;background-size:contain;background-repeat:no-repeat}.login-form .type-flag.native{background-image:url(assets/native.svg)}.login-form .type-flag.angular{background-image:url(assets/angular.png)}.login-form .type-flag.react{background-image:url(assets/react.png)}.login-form .type-flag.vue{background-image:url(assets/vue.png)}.login-form .logo{width:150px;display:block;margin:0 auto}.login-form .form .form-group{margin-bottom:8px;display:-ms-flexbox;display:flex}.login-form .form .form-group .form-control{-ms-flex:1;flex:1;border:1px solid #e5e6e7;display:block;padding:6px 12px;font-size:14px;line-height:1.42857;background-color:#fff;border:1px solid #ccc;-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}.login-form .form .btn{width:100%;border-radius:2px;background:#fff;border:1px solid #e7e7e7;margin-bottom:0;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;padding:6px 12px;font-size:14px;line-height:1.42857}.login-form .form .btn:hover{background-color:#c41230;color:#fff}.login-form .question{margin:10px 0;cursor:pointer}.login-form .question a{text-decoration:none;color:rgba(0,0,0,.87)}.login-form .question a small{color:#337ab7}"}}export{n as rms_login};