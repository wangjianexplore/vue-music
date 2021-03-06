// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './less/public.less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import components from './components/index';
import VueLazyload from 'vue-lazyload';
// import axios from 'axios';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(components);
// Vue.prototype.$http = axios;
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '',
  loading: '',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
