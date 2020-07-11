import Vue from 'vue'
import App from './App.vue'
import routers from './router'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


new Vue({
  router: routers,
  render: h => h(App),
}).$mount('#app')
