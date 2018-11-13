/**
 * Created by Admin on 2018/11/13.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../modules/admin/views/home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta:{
                keepAlive:true,
            }
        }
    ]
})