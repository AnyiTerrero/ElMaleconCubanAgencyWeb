<template>
  <div id="app">
    <Topbar />
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Topbar,
    Navbar,
    Footer
  }
}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';
@import '@/assets/css/main.css';

/* Estilos globales */
.page-header {
  margin-bottom: 90px;
  background-size: cover;
  background-position: center;
}

.section-title {
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 30px;
}
</style>