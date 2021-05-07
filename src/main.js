import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
//导入 elementui 组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    // components: { App }, //映射组件标签
    // template: '<App/>', //指定需要渲染到页面的模板
    router,
}).$mount('#app')

// new Vue({
//     el: '#app',
//     components: { App }, //映射组件标签
//     template: '<App/>', //指定需要渲染到页面的模板
//     router
// })