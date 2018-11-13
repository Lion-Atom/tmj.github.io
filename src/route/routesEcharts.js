/**
 * Created by Admin on 2018/11/12.
 */

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../modules/echarts/views/home.vue'
import Table from '../modules/echarts/views/components/table.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path:'/views/components/table',
            name:'Table',
            component:Table
        }
    ]
})
