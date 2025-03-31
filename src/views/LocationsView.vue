<template>
    <main>
      <PageHeader 
        title="Nuestras Ubicaciones" 
        :breadcrumb="'Inicio'" 
        :current-page="'Ubicaciones'"
      />
  
      <div class="container-fluid py-5">
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-8 mx-auto text-center">
              <h2 class="section-title">Encuéntranos en Florida</h2>
              <p class="lead">Contamos con múltiples ubicaciones para mejor servicio</p>
            </div>
          </div>
  
          <div class="row g-4">
            <div v-for="(location, index) in locations" 
                 :key="index"
                 class="col-lg-4 col-md-6">
              <LocationCard :location="location" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import PageHeader from '@/components/common/PageHeader.vue'
  import LocationCard from '@/components/common/LocationCard.vue'
  
  const locations = ref([
    {
      title: 'Port Richey',
      address: '10148 US HWY 19, Port Richey, FL 34668',
      phone: '(813) 863-6878',
      hours: 'Lun-Sáb: 9AM - 6PM',
      mapUrl: 'https://maps.google.com/maps?q=10148+US+HWY+19+Port+Richey+FL'
    },
    {
      title: 'Tampa',
      address: '4410 W Hillsborough Ave, Tampa, FL 34608',
      phone: '(813) 555-1234',
      hours: 'Lun-Sáb: 8AM - 7PM',
      mapUrl: 'https://maps.google.com/maps?q=4410+W+Hillsborough+Ave+Tampa+FL'
    }
  ])
  </script>