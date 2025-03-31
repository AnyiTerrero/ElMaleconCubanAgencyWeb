<template>
  <div class="ubicaciones">
    <div class="jumbotron jumbotron-fluid page-header">
      <div class="container text-center py-5">
        <h1 class="text-white display-3">Ubicaciones</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
            <li class="breadcrumb-item active">Ubicaciones</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container-fluid py-5">
      <div class="container">
        <!-- Mapa Principal -->
        <div class="row mb-5 justify-content-center">
          <div class="col-12 col-lg-10 col-xl-8">
            <h2 class="text-center mb-4 display-5">Nuestra Ubicación Principal</h2>
            <div class="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.552509766611!2d-82.71958368493214!3d28.07194098268199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2d03f07b6c3a5%3A0x4c8d0b5546d4223e!2s10148%20US%20Hwy%2019%2C%20Port%20Richey%2C%20FL%2034668%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1718650947909!5m2!1ses!2ses"
                allowfullscreen
                loading="lazy"
                class="main-map"
              ></iframe>
            </div>
          </div>
        </div>

        <!-- Mapas Secundarios -->
        <div class="row">
          <div 
            v-for="(location, index) in locations"
            :key="index"
            class="col-md-4 mb-4"
          >
            <div class="location-card">
              <iframe
                :src="location.mapUrl"
                class="location-map"
                allowfullscreen
                loading="lazy"
              ></iframe>
              <div class="location-info">
                <h5 class="text-primary">{{ location.name }}</h5>
                <p class="text-muted small">{{ location.schedule }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: [
        {
          name: 'Saint Petersburg',
          mapUrl: 'https://maps.google.com/maps?q=...',
          schedule: 'Lun-Sáb: 10:00 AM - 6:00 PM'
        },
        {
          name: 'Spring Hill',
          mapUrl: 'https://maps.google.com/maps?q=...',
          schedule: 'Lun-Sáb: 10:00 AM - 6:00 PM'
        },
        {
          name: 'Tampa',
          mapUrl: 'https://maps.google.com/maps?q=...',
          schedule: 'Lun-Sáb: 10:00 AM - 6:00 PM'
        }
      ]
    }
  }
}
</script>

<style scoped>
.map-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.main-map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  border: 0;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.location-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.location-map {
  width: 100%;
  height: 300px;
  border: 0;
}

.location-info {
  padding: 1.5rem;
  background: #f8f9fa;
}
</style>