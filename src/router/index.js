import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { 
      title: 'El Malecón - Envíos a Cuba',
      metaTags: [
        { name: 'description', content: 'Envía remesas a Cuba en MLC, USD, CUP y gestiona tu documentación de viaje' }
      ]
    }
  },
  {
    path: '/servicios',
    name: 'services',
    component: () => import('@/views/ServicesView.vue'),
    meta: { 
      title: 'Servicios - El Malecón',
      metaTags: [
        { name: 'description', content: 'Nuestros servicios especializados para la comunidad cubana' }
      ]
    }
  },
  // ... otras rutas con misma estructura
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100
      }
    }
    return { top: 0 }
  }
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'El Malecón'
  to.meta.metaTags?.forEach(tag => {
    const metaTag = document.createElement('meta')
    Object.entries(tag).forEach(([key, value]) => {
      metaTag.setAttribute(key, value)
    })
    document.head.appendChild(metaTag)
  })
})

export default router