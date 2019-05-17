import { EventEmitter } from '../../stencil.core';
export declare class RmsLogin {
    name: string;
    type: string;
    email: string;
    password: string;
    loginAttempt: EventEmitter;
    loginAttemptHandler(): void;
    handleChange(type: string, event: any): void;
    render(): any;
    private _doConsoleLog;
}
