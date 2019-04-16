import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import reset from 'u-reset.css';
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(require('vue-wechat-title'))


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
