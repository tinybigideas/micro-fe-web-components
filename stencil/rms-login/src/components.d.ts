/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { JSX } from '@stencil/core';


export namespace Components {
  interface RmsLogin {
    'email': string;
    'name': string;
    'password': string;
    'type': string;
  }
}

declare namespace LocalJSX {
  interface RmsLogin extends JSXBase.HTMLAttributes {
    'email'?: string;
    'name'?: string;
    'onLoginAttempt'?: (event: CustomEvent<any>) => void;
    'password'?: string;
    'type'?: string;
  }

  interface IntrinsicElements {
    'rms-login': RmsLogin;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


declare global {



  interface HTMLRmsLoginElement extends Components.RmsLogin, HTMLStencilElement {}
  var HTMLRmsLoginElement: {
    prototype: HTMLRmsLoginElement;
    new (): HTMLRmsLoginElement;
  };

  interface HTMLElementTagNameMap {
    'rms-login': HTMLRmsLoginElement;
  }

  interface ElementTagNameMap extends HTMLElementTagNameMap {}
}

