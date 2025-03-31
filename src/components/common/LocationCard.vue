<template>
    <div class="location-card">
      <div class="card h-100 border-0 shadow">
        <iframe 
          :src="location.mapUrl"
          class="card-img-top map-iframe"
          loading="lazy"
          allowfullscreen
        ></iframe>
        <div class="card-body">
          <h5 class="card-title text-primary">{{ location.title }}</h5>
          <div class="card-text">
            <p class="mb-1"><i class="fa fa-map-marker-alt me-2"></i>{{ location.address }}</p>
            <p class="mb-1"><i class="fa fa-phone-alt me-2"></i>{{ location.phone }}</p>
            <p class="mb-0"><i class="fa fa-clock me-2"></i>{{ location.hours }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    location: {
      type: Object,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .map-iframe {
    height: 250px;
    border: none;
    border-radius: 15px 15px 0 0;
  }
  
  .card-body {
    padding: 1.5rem;
  }
  
  .card-title {
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .card-text p {
    color: #666;
    font-size: 0.9rem;
  }
  </style>