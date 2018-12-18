import Vue from 'vue';
import Gravatar from 'vue-gravatar'; // https://www.npmjs.com/package/vue-gravatar
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

Vue.component('v-gravatar', Gravatar);
