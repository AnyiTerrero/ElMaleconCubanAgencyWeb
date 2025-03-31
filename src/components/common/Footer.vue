<template>
    <div class="container-fluid footer bg-light py-5">
      <div class="container text-center py-5">
        <div class="row">
          <div class="col-12 mb-4">
            <router-link to="/" class="navbar-brand m-0">
              <h1 class="m-0 mt-n2 display-4 text-primary">El Malecón</h1>
            </router-link>
          </div>
          
          <div class="col-12 mb-4">
            <SocialLinks />
          </div>
  
          <div class="col-12 mt-2 mb-4">
            <div class="row">
              <ContactInfo />
              <BusinessHours />
            </div>
          </div>
          
          <div class="col-12">
            <p class="m-0">&copy; {{ currentYear }} {{ appName }}. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import SocialLinks from '@/components/common/SocialLinks.vue'
  import ContactInfo from '@/components/common/ContactInfo.vue'
  import BusinessHours from '@/components/common/BusinessHours.vue'
  
  const currentYear = computed(() => new Date().getFullYear())
  const appName = import.meta.env.VITE_APP_NAME
  </script>