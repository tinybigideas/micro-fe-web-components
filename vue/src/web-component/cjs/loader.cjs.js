'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./rmslogin-81ed82cd.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["rms-login.cjs",[[1,"rms-login",{"name":[1],"type":[1],"email":[1],"password":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
