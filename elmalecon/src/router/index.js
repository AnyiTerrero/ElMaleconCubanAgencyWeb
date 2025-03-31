import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Envios from '@/views/Envios.vue'
import Faq from '@/views/Faq.vue'
import Servicios from '@/views/Servicios.vue'
import Ubicaciones from '@/views/Ubicaciones.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/envios', component: Envios },
    { path: '/preguntas', component: Faq },
    { path: '/servicios', component: Servicios },
    { path: '/ubicaciones', component: Ubicaciones }
  ]
})