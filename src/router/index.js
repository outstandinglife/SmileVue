import Vue from 'vue'
import Router from 'vue-router'
const ShoppingMall = () => import('components/ShoppingMall')

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'ShoppingMall', component: ShoppingMall}
    ]
})