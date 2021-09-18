import Vue from 'vue'
import App from './App.vue'
import store from './store';
import mixins from './mixins';

Vue.config.productionTip = false;

Vue.mixin(mixins);

new Vue({
  render: h => h(App),
  store
}).$mount('#app');
