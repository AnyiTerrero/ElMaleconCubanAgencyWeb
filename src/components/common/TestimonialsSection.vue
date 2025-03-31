<template>
    <div class="container-fluid py-5">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <h1 class="section-title position-relative text-center mb-5">Lo que dicen nuestros clientes</h1>
          </div>
        </div>
        
        <swiper
          :modules="[Autoplay]"
          :space-between="30"
          :autoplay="{ delay: 5000 }"
          :breakpoints="{ 640: { slidesPerView: 1 }, 1024: { slidesPerView: 2 } }"
        >
          <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-card text-center p-4 bg-light rounded">
              <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
              <p class="mb-4">{{ testimonial.text }}</p>
              <h5 class="font-weight-bold">{{ testimonial.author }}</h5>
              <span>{{ testimonial.location }}</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay } from 'swiper/modules'
  
  const testimonials = [
    {
      text: 'Excelente servicio al cliente. Muy confiables. Les deseo muchos éxitos.',
      author: 'Yolaisi Martinez Garcia',
      location: 'Miami, FL'
    },
    // ... otros testimonios
  ]
  </script>