import Vue from 'vue';
import App from './App.vue';

import { defineCustomElements } from './web-component/loader';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/rms-\w*/];

// Bind the custom elements to the window object
defineCustomElements(window);

new Vue({
  render: h => h(App)
}).$mount('#app');
