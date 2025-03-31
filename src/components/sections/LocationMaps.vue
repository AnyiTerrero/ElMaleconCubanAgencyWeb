<template>
    <div class="location-maps">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-8">
            <h2 class="text-center mb-4 display-5">Nuestras Ubicaciones</h2>
            
            <div class="map-container mb-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.552509766611!2d-82.71958368493214!3d28.07194098268199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2d03f07b6c3a5%3A0x4c8d0b5546d4223e!2s10148%20US%20Hwy%2019%2C%20Port%20Richey%2C%20FL%2034668%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1718650947909!5m2!1ses!2ses"
                class="main-map"
                loading="lazy"
                allowfullscreen
              ></iframe>
              
              <div class="location-info bg-light p-4 mt-3">
                <h5 class="text-primary mb-3">Oficina Principal</h5>
                <p class="mb-1"><i class="fas fa-map-marker-alt me-2"></i>10148 US HWY 19, Port Richey, FL 34668</p>
                <p class="mb-1"><i class="fas fa-phone me-2"></i>(813) 863-6878</p>
                <p class="mb-0"><i class="fas fa-clock me-2"></i>Lun-Sáb: 9AM - 6PM</p>
              </div>
            </div>
  
            <div class="row">
              <div v-for="(location, index) in secondaryLocations" 
                   :key="index"
                   class="col-md-4 mb-4">
                <div class="location-card h-100">
                  <iframe
                    :src="location.mapUrl"
                    class="secondary-map"
                    loading="lazy"
                    allowfullscreen
                  ></iframe>
                  <div class="location-info bg-light p-3">
                    <h6 class="text-primary">{{ location.name }}</h6>
                    <p class="small mb-1">{{ location.address }}</p>
                    <p class="small mb-0">{{ location.hours }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const secondaryLocations = [
    {
      name: 'Tampa',
      address: '4410 W Hillsborough Ave, Tampa, FL',
      hours: 'Lun-Vie: 9AM - 5PM',
      mapUrl: 'https://maps.google.com/maps?q=4410+W+Hillsborough+Ave+Tampa+FL'
    },
    {
      name: 'Saint Petersburg',
      address: '12450 Spring Hill Dr, Spring Hill, FL',
      hours: 'Lun-Sáb: 10AM - 6PM',
      mapUrl: 'https://maps.google.com/maps?q=12450+Spring+Hill+Dr'
    }
  ]
  </script>
  
  <style scoped>
  .location-maps {
    padding: 5rem 0;
    background-color: #f8f9fa;
  }
  
  .map-container {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }
  
  .main-map {
    width: 100%;
    height: 400px;
    border: none;
  }
  
  .secondary-map {
    width: 100%;
    height: 200px;
    border: none;
    border-radius: 10px 10px 0 0;
  }
  
  .location-info {
    border-radius: 0 0 10px 10px;
  }
  
  .location-card {
    transition: transform 0.3s ease;
  }
  
  .location-card:hover {
    transform: translateY(-5px);
  }
  
  .text-primary {
    color: var(--primary);
  }
  
  .bg-light {
    background-color: #fff !important;
  }
  </style>