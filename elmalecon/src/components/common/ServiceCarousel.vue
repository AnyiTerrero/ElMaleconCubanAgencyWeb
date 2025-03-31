<template>
  <div class="service-carousel">
    <b-carousel 
      :interval="4000"
      controls
      indicators
    >
      <b-carousel-slide
        v-for="(service, index) in services"
        :key="index"
        :img-src="service.image"
      >
        <div class="carousel-caption">
          <h3>{{ service.title }}</h3>
          <router-link :to="service.link" class="btn btn-light">
            Más información
          </router-link>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      required: true
    }
  }
}
</script>