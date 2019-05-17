import { c as patchEsm, b as bootstrapLazy } from './rmslogin-ce907d76.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["rms-login", [[1, "rms-login", { "name": [1], "type": [1], "email": [1], "password": [1] }]]]], options);
    });
};
export { defineCustomElements };
