<template>
    <div class="service-card">
      <div class="service-img">
        <img :src="image" :alt="title" class="img-fluid rounded-circle">
      </div>
      <div class="service-content">
        <h5 class="service-title">{{ title }}</h5>
        <p class="service-description">{{ description }}</p>
        <router-link :to="link" class="service-link">
          Más información <i class="fa fa-arrow-right ms-1"></i>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .service-card {
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    margin: 1rem;
    padding: 1.5rem;
  }
  
  .service-card:hover {
    transform: translateY(-5px);
  }
  
  .service-img {
    width: 120px;
    height: 120px;
    margin: -60px auto 1rem;
  }
  
  .service-img img {
    border: 3px solid var(--primary);
    padding: 0.5rem;
  }
  
  .service-content {
    text-align: center;
  }
  
  .service-title {
    color: var(--primary);
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .service-description {
    color: #666;
    font-size: 0.9rem;
    min-height: 60px;
  }
  
  .service-link {
    color: var(--primary);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .service-link:hover {
    color: var(--secondary);
  }
  </style>