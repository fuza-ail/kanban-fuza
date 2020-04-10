import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import App from './App.vue';
import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '766789834345-1ch04mb5k1lrfg9tarhmktbepoob22dt.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)


new Vue({
  render: (h)=> h(App)
}).$mount("#app")