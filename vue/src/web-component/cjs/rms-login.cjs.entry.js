'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./rmslogin-81ed82cd.js');

const welcomeMsg = `Welcome to`;
const loginBlurb = `By logging in, you confirm that you
   will only access materials to which you are
   legally entitled. Any use of materials accessed should be in adherence with
   the terms of your agreement.`;
const currentYear = () => new Date().getFullYear();
class RmsLogin {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.name = 'Generic App';
        this.type = 'native';
        this.email = 'native@prop.com';
        this.loginAttempt = __chunk_1.createEvent(this, "loginAttempt", 7);
    }
    loginAttemptHandler() {
        const details = { email: this.email, password: this.password };
        this._doConsoleLog(details);
        this.loginAttempt.emit(details);
    }
    handleChange(type, event) {
        this[type] = event.target.value;
    }
    render() {
        return (__chunk_1.h("div", { class: "login-form" }, __chunk_1.h("div", { class: 'type-flag ' + this.type, title: this.type }), __chunk_1.h("img", { class: "logo", src: "/assets/logo.png" }), __chunk_1.h("h3", null, welcomeMsg, " ", this.name), __chunk_1.h("p", null, __chunk_1.h("small", null, loginBlurb)), __chunk_1.h("form", { class: "form" }, __chunk_1.h("div", { class: "form-group" }, __chunk_1.h("input", { type: "text", class: "form-control", placeholder: "Email", name: "email", value: this.email, onInput: event => this.handleChange('email', event), required: true })), __chunk_1.h("div", { class: "form-group" }, __chunk_1.h("input", { type: "password", class: "form-control", placeholder: "Password", name: "password", value: this.password, onInput: event => this.handleChange('password', event), required: true })), __chunk_1.h("button", { type: "button", class: "btn", onClick: () => this.loginAttemptHandler() }, "Login")), __chunk_1.h("p", { class: "question" }, __chunk_1.h("a", { href: "#" }, __chunk_1.h("small", null, "Forgot password? Reset here."))), __chunk_1.h("p", { class: "question" }, __chunk_1.h("a", { href: "#" }, __chunk_1.h("small", null, "Need an account? Request access here."))), __chunk_1.h("small", null, this.name, " \u00A9", __chunk_1.h("span", null, currentYear()))));
    }
    _doConsoleLog(details) {
        const msg = this.type === 'native'
            ? 'Native web component login attempt:'
            : 'Native web component emit:';
        console.log(msg, details);
    }
    static get style() { return ".login-form{position:relative;text-align:center;width:300px;height:450px;overflow:hidden;display:inline-block;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;color:rgba(0,0,0,.87);font-size:13px;background-color:#f3f3f4;padding:20px}.login-form .type-flag{position:absolute;top:5px;right:5px;width:50px;height:50px;background-size:contain;background-repeat:no-repeat}.login-form .type-flag.native{background-image:url(assets/native.svg)}.login-form .type-flag.angular{background-image:url(assets/angular.png)}.login-form .type-flag.react{background-image:url(assets/react.png)}.login-form .type-flag.vue{background-image:url(assets/vue.png)}.login-form .logo{width:150px;display:block;margin:0 auto}.login-form .form .form-group{margin-bottom:8px;display:-ms-flexbox;display:flex}.login-form .form .form-group .form-control{-ms-flex:1;flex:1;border:1px solid #e5e6e7;display:block;padding:6px 12px;font-size:14px;line-height:1.42857;background-color:#fff;border:1px solid #ccc;-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}.login-form .form .btn{width:100%;border-radius:2px;background:#fff;border:1px solid #e7e7e7;margin-bottom:0;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;padding:6px 12px;font-size:14px;line-height:1.42857}.login-form .form .btn:hover{background-color:#c41230;color:#fff}.login-form .question{margin:10px 0;cursor:pointer}.login-form .question a{text-decoration:none;color:rgba(0,0,0,.87)}.login-form .question a small{color:#337ab7}"; }
}

exports.rms_login = RmsLogin;
