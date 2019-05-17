import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

const welcomeMsg = `Welcome to`;
const loginBlurb = `By logging in, you confirm that you
   will only access materials to which you are
   legally entitled. Any use of materials accessed should be in adherence with
   the terms of your agreement.`;

const currentYear = () => new Date().getFullYear();

@Component({
  tag: 'rms-login',
  styleUrl: 'rms-login.scss',
  shadow: true
})
export class RmsLogin {
  @Prop() name: string = 'Generic App';
  @Prop() type: string = 'native';
  @Prop() email: string = 'native@prop.com';
  @Prop() password: string;

  @Event() loginAttempt: EventEmitter;

  public loginAttemptHandler() {
    const details = { email: this.email, password: this.password };
    this._doConsoleLog(details);
    this.loginAttempt.emit(details);
  }

  public handleChange(type: string, event: any) {
    this[type] = event.target.value;
  }

  public render() {
    return (
      <div class="login-form">
        <div class={'type-flag ' + this.type} title={this.type} />
        <img class="logo" src="/assets/logo.png" />
        <h3>
          {welcomeMsg} {this.name}
        </h3>
        <p>
          <small>{loginBlurb}</small>
        </p>

        <form class="form">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              name="email"
              value={this.email}
              onInput={event => this.handleChange('email', event)}
              required
            />
          </div>

          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              value={this.password}
              onInput={event => this.handleChange('password', event)}
              required
            />
          </div>

          <button
            type="button"
            class="btn"
            onClick={() => this.loginAttemptHandler()}
          >
            Login
          </button>
        </form>

        <p class="question">
          <a href="#">
            <small>Forgot password? Reset here.</small>
          </a>
        </p>

        <p class="question">
          <a href="#">
            <small>Need an account? Request access here.</small>
          </a>
        </p>

        <small>
          {this.name} &copy;
          <span>{currentYear()}</span>
        </small>
      </div>
    );
  }

  private _doConsoleLog(details: { email: string; password: string }): void {
    const msg =
      this.type === 'native'
        ? 'Native web component login attempt:'
        : 'Native web component emit:';
    console.log(msg, details);
  }
}
