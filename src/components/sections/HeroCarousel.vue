<template>
    <div class="container-fluid p-0 mb-5 pb-5">
      <swiper
        :modules="modules"
        :loop="true"
        :autoplay="{ delay: 5000 }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }"
        @swiper="onSwiperInit"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img class="w-100 img-fluid" :src="slide.image" :alt="slide.alt">
          <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div class="p-3 text-center" style="max-width: 900px;">
              <h2 class="text-white mb-4">{{ slide.title }}</h2>
            </div>
          </div>
        </swiper-slide>
        
        <template #container-end>
          <div class="swiper-button-prev" @click="swiper.slidePrev()"></div>
          <div class="swiper-button-next" @click="swiper.slideNext()"></div>
        </template>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay, Navigation } from 'swiper/modules'
  
  const modules = [Autoplay, Navigation]
  const swiper = ref(null)
  
  const props = defineProps({
    slides: {
      type: Array,
      required: true
    }
  })
  
  const onSwiperInit = (swiperInstance) => {
    swiper.value = swiperInstance
  }
  </script>