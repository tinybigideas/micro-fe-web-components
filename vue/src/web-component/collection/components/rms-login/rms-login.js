import { h } from '@stencil/core';
const welcomeMsg = `Welcome to`;
const loginBlurb = `By logging in, you confirm that you
   will only access materials to which you are
   legally entitled. Any use of materials accessed should be in adherence with
   the terms of your agreement.`;
const currentYear = () => new Date().getFullYear();
export class RmsLogin {
    constructor() {
        this.name = 'Generic App';
        this.type = 'native';
        this.email = 'native@prop.com';
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
        return (h("div", { class: "login-form" },
            h("div", { class: 'type-flag ' + this.type, title: this.type }),
            h("img", { class: "logo", src: "/assets/logo.png" }),
            h("h3", null,
                welcomeMsg,
                " ",
                this.name),
            h("p", null,
                h("small", null, loginBlurb)),
            h("form", { class: "form" },
                h("div", { class: "form-group" },
                    h("input", { type: "text", class: "form-control", placeholder: "Email", name: "email", value: this.email, onInput: event => this.handleChange('email', event), required: true })),
                h("div", { class: "form-group" },
                    h("input", { type: "password", class: "form-control", placeholder: "Password", name: "password", value: this.password, onInput: event => this.handleChange('password', event), required: true })),
                h("button", { type: "button", class: "btn", onClick: () => this.loginAttemptHandler() }, "Login")),
            h("p", { class: "question" },
                h("a", { href: "#" },
                    h("small", null, "Forgot password? Reset here."))),
            h("p", { class: "question" },
                h("a", { href: "#" },
                    h("small", null, "Need an account? Request access here."))),
            h("small", null,
                this.name,
                " \u00A9",
                h("span", null, currentYear()))));
    }
    _doConsoleLog(details) {
        const msg = this.type === 'native'
            ? 'Native web component login attempt:'
            : 'Native web component emit:';
        console.log(msg, details);
    }
    static get is() { return "rms-login"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["rms-login.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["rms-login.css"]
    }; }
    static get properties() { return {
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "'Generic App'"
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'native'"
        },
        "email": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "email",
            "reflect": false,
            "defaultValue": "'native@prop.com'"
        },
        "password": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "password",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "loginAttempt",
            "name": "loginAttempt",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
