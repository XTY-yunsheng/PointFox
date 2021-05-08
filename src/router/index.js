/*
 * 路由器模块
 * */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../components/Register'
import Login from '../components/Login'
import Work from '../components/Work'
import StuInfo from '../components/StuInfo'
import Manage from '../components/Manage'
import CNNode from '../components/CNNode'
Vue.use(VueRouter)

export default new VueRouter({
    //n个路由
    routes: [
        { path: '/register', component: Register },
        { path: '/login', component: Login },
        { path: '/work', component: Work },
        { path: '/info', component: StuInfo },
        { path: '/manage', component: Manage },
        { path: '/cnnode', component: CNNode },
        { path: '/', redirect: '/login' },
    ]
})