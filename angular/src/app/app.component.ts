import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import './web-component';

@Component({
  selector: 'app-angular',
  template: `
    <rms-login
      #login
      name="Miu Insights"
      [type]="type"
      (loginAttempt)="onLoginAttempt($event)"
    >
    </rms-login>
  `
})
export class AppComponent implements OnInit {
  public type = 'angular';

  @ViewChild('login') private _loginComponent: ElementRef<HTMLRmsLoginElement>;

  public ngOnInit(): void {
    this._setEmail('angular@input.com');
  }

  public onLoginAttempt(
    event: CustomEvent<{ email: string; password: string }>
  ): void {
    console.log('Angular login attempt:', event.detail);
  }

  private _setEmail(email: string): void {
    this._loginComponent.nativeElement.email = email;
  }
}
