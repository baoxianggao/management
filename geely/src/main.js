// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

// Vue.http.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
// Vue.http.headers.common['Authorization'] = 'Basic dGVzdDoxMjM0NTY=';
// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';


//引用饿了么UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
