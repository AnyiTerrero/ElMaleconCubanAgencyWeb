<template>
    <main>
      <HeroCarousel :slides="carouselSlides" />
      
      <div class="container-fluid py-5">
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-lg-7">
              <h1 class="section-title position-relative text-center mb-5">
                Más de 5 años conectando familias
              </h1>
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-4 py-5">
              <h4 class="font-weight-bold mb-3">Sobre Nosotros</h4>
              <p>Fundada por cubano-americanos, nos especializamos en brindar soluciones integrales...</p>
            </div>
            
            <div class="col-lg-4" style="min-height: 400px;">
              <img class="position-absolute w-100 h-100" src="/img/about.webp" alt="Nuestro equipo">
            </div>
            
            <div class="col-lg-4 py-5">
              <h4 class="font-weight-bold mb-3">Nuestras Ventajas</h4>
              <div v-for="(advantage, index) in advantages" :key="index" class="text-muted mb-3">
                <i class="fa fa-check text-secondary mr-2"></i>
                {{ advantage }}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ShippingServices />
      <TestimonialsSection />
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import HeroCarousel from '@/components/sections/HeroCarousel.vue'
  import ShippingServices from '@/components/sections/ShippingServices.vue'
  
  const carouselSlides = ref([
    { image: '/img/carousel-1.webp', alt: 'Envíos a Cuba' },
    { image: '/img/carousel-3.webp', alt: 'Productos variados' },
    { image: '/img/carousel-4.webp', alt: 'Servicios adicionales' },
    { image: '/img/carousel-5.webp', alt: 'Remesas a Cuba' }
  ])
  
  const advantages = ref([
    'Envíos rápidos y seguros',
    'Múltiples métodos de pago',
    'Soporte bilingüe'
  ])
  </script>