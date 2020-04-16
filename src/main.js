import Vue from 'vue'
import App from './App.vue'
import router from './router'
import config from './config'
import API from './api'
import storeFactory from './store';

Vue.config.productionTip = false
Vue.prototype.$config = config
Vue.prototype.$API = API(config)
const StoreFactory = storeFactory(config, Vue.prototype.$API)
const store = new StoreFactory()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
