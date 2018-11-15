/**
 * Created by Admin on 2018/11/12.
 */
import Vue from 'vue'
import Echarts from './echarts.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import VueRouter from 'vue-router'
// import store from '../../vuex/store'
// import Vuex from 'vuex'
import router from '../../route/routesEcharts'
import Mock from '../../mock'
import Highlight from '../../assets/plugins/highlight/highlight.js'


Vue.use(ElementUI)
Vue.use(Highlight)
// Vue.use(VueRouter)
// Vue.use(Vuex)

const app3 = new Vue({
    //el: '#app',
    //template: '<App/>',
    router,
    // store,
    //components: { App }
    render: h => h(Echarts)
}).$mount('#echarts')
