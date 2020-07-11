import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import menu from './components/Menu.vue'
import servicos from './components/Servicos.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes:[
    {
        path: '/',
        component: menu,
        children: [
            {
                path: '/',
                components:{
                    aux: Home
                }
            },
            {
                path: '/servicos',
                components:{
                    aux: servicos
                }
            }
    ]
    }
    ]
})