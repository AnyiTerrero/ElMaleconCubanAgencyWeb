<template>
    <div class="container-fluid bg-primary py-2 d-none d-md-block">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-start">
            <div class="d-inline-flex align-items-center">
              <i class="fa fa-phone-alt text-white me-2"></i>
              <span class="text-white">(813) 863-6878</span>
            </div>
          </div>
          <div class="col-md-6 text-end">
            <div class="d-inline-flex align-items-center">
              <a v-for="(social, index) in socialLinks" 
                 :key="index"
                 :href="social.url" 
                 class="text-white px-2"
                 target="_blank"
                 rel="noopener">
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const socialLinks = [
    {
      icon: 'fab fa-whatsapp',
      url: 'https://wa.me/18138636878'
    },
    {
      icon: 'fab fa-facebook-f',
      url: 'https://facebook.com/elmalecon'
    },
    {
      icon: 'fab fa-instagram',
      url: 'https://instagram.com/elmalecon'
    }
  ]
  </script>
  
  <style scoped>
  .bg-primary {
    background-color: var(--primary) !important;
  }
  
  .fa-phone-alt {
    font-size: 0.9rem;
  }
  
  .text-white:hover {
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
  </style>