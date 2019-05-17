import { a as patchBrowser, b as bootstrapLazy } from './rmslogin-ce907d76.js';

patchBrowser().then(resourcesUrl => {
  return bootstrapLazy([["rms-login",[[1,"rms-login",{"name":[1],"type":[1],"email":[1],"password":[1]}]]]], { resourcesUrl });
});
