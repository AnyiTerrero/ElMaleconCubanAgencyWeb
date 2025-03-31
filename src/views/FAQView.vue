<template>
    <div class="container py-5">
      <h1 class="section-title mb-5">Preguntas Frecuentes</h1>
      <AccordionFAQ :faqs="faqsData" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import AccordionFAQ from '@/components/common/AccordionFAQ.vue'
  
  const faqsData = ref([
    {
      question: '¿Cómo funciona el proceso para enviar paquetes?',
      answer: 'Para realizar un envío, los clientes deben traer los productos...'
    },
    {
      question: '¿Cuál es el tiempo de entrega?',
      answer: 'Para envíos a La Habana ofrecemos un plazo estimado de 7 días...'
    },
    // ... más preguntas
  ])
  </script>