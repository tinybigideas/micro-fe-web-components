import { c as patchEsm, b as bootstrapLazy } from './rmslogin-a91447be.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["rms-login",[[1,"rms-login",{"name":[1],"type":[1],"email":[1],"password":[1]}]]]], options);
  });
};

export { defineCustomElements };
