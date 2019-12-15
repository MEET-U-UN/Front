import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// General components
import Modal from './components/ui/Modal.vue';

import vuetify from './plugins/vuetify';

// * Component registration
Vue.component('Modal', Modal);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
