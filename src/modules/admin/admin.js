/**
 * Created by Admin on 2018/11/13.
 */
import Vue from 'vue'
import Admin from './admin.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import VueRouter from 'vue-router'
import store from '../../vuex/store'
import Vuex from 'vuex'
import router from '../../route/routesAdmin'
import Mock from '../../mock'
import 'vue-instant/dist/vue-instant.css'
import VueInstant from 'vue-instant'
// import VueHighCharts from 'vue-highcharts'
// Vue.use(VueHighCharts)


Vue.use(VueInstant)
Vue.use(ElementUI)
// Vue.use(VueRouter)
Vue.use(Vuex)

const app3 = new Vue({
    //el: '#app',
    //template: '<App/>',
    router,
    store,
    //components: { App }
    render: h => h(Admin)
}).$mount('#admin')
export default routers;
