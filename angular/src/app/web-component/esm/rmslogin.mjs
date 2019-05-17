import { a as patchBrowser, b as bootstrapLazy } from './rmslogin-a91447be.js';

patchBrowser().then(resourcesUrl => {
  return bootstrapLazy([["rms-login",[[1,"rms-login",{"name":[1],"type":[1],"email":[1],"password":[1]}]]]], { resourcesUrl });
});
