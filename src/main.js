// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Router from 'vue-router'
import App from './App'
import Vuex from 'vuex'
import  VueResource from "vue-resource";
import store from './vuex/store.js'
import ElementUI  from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import "./assets/js/rem.js";
import "font-awesome/css/font-awesome.min.css";


Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Router);
Vue.use(ElementUI);
Vue.use(VueResource);
//Vue.http.options.emulateJSON = true;
new Vue({
    el:"#app",
    store,
    router,
    template: '<App/>',
    components: { App }
});

