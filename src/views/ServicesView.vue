<template>
    <main>
      <PageHeader 
        title="Nuestros Servicios" 
        :breadcrumb="'Inicio'" 
        :current-page="'Servicios'"
      />
  
      <div class="container-fluid py-5">
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-6">
              <h2 class="section-title">Servicios para la Comunidad Cubana</h2>
            </div>
          </div>
  
          <div class="row g-4">
            <div v-for="(service, index) in services" 
                 :key="index"
                 class="col-lg-4 col-md-6">
              <ServiceCard 
                :title="service.title"
                :image="service.image"
                :description="service.description"
                :link="service.link"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import PageHeader from '@/components/common/PageHeader.vue'
  import ServiceCard from '@/components/common/ServiceCard.vue'
  
  const services = ref([
    {
      title: 'Envío de Remesas',
      image: '/img/service-remesas.webp',
      description: 'Transferencias rápidas y seguras en múltiples monedas',
      link: '/servicios/remesas'
    },
    {
      title: 'Gestión Documental',
      image: '/img/service-documentos.webp',
      description: 'Trámites migratorios y legalizaciones',
      link: '/servicios/documentos'
    },
    {
      title: 'Venta de Pasajes',
      image: '/img/service-pasajes.webp',
      description: 'Mejores tarifas aéreas a Cuba',
      link: '/servicios/pasajes'
    }
  ])
  </script>