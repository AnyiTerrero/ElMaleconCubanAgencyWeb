<template>
  <div class="home">
    <!-- Carrusel -->
    <div class="container-fluid p-0 mb-5 pb-5">
      <carousel :items="carouselItems" />
    </div>

    <!-- Sección principal -->
    <div class="container-fluid py-5">
      <div class="container py-5">
        <h1 class="section-title text-center mb-5">Más de 5 años conectando familias</h1>
        <!-- Contenido principal... -->
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/common/Carousel.vue'

export default {
  components: { Carousel },
  data() {
    return {
      carouselItems: [
        { image: require('@/assets/img/carousel-1.webp'), alt: 'Envíos a Cuba' },
        { image: require('@/assets/img/carousel-3.webp'), alt: 'Productos variados' },
        { image: require('@/assets/img/carousel-4.webp'), alt: 'Servicios adicionales' },
        { image: require('@/assets/img/carousel-5.webp'), alt: 'Remesas a Cuba' }
      ]
    }
  }
}
</script>