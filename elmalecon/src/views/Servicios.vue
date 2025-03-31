<template>
  <div class="servicios-page">
    <div class="page-header">
      <div class="container text-center py-5">
        <h1 class="text-white display-3">Nuestros Servicios</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
            <li class="breadcrumb-item active">Servicios</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container-fluid py-5">
      <div class="container">
        <service-carousel :services="services" />
        
        <div class="row mt-5">
          <div 
            v-for="(service, index) in serviceDetails"
            :key="index"
            class="col-md-6 mb-4"
          >
            <div class="service-detail-card">
              <h3 class="text-primary mb-3">{{ service.title }}</h3>
              <div v-html="service.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCarousel from '@/components/common/ServiceCarousel.vue'

export default {
  components: { ServiceCarousel },
  data() {
    return {
      services: [
        {
          title: 'Envío de Remesas',
          image: require('@/assets/img/service-1.webp'),
          link: '#remesas'
        },
        // ... otros servicios
      ],
      serviceDetails: [
        {
          title: 'Remesas a Cuba',
          content: '<p>Ofrecemos transferencias rápidas y seguras...</p>'
        }
      ]
    }
  }
}
</script>