<template>
  <div class="container-fluid bg-primary py-3 d-none d-md-block">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-center text-lg-left mb-2 mb-lg-0"></div>
        <div class="col-md-6 text-center text-lg-right">
          <div class="d-inline-flex align-items-center">
            <a class="text-white px-3" :href="socials.whatsapp" target="_blank">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a class="text-white px-3" :href="socials.facebook" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="text-white px-3" :href="socials.instagram" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
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
      socials: {
        whatsapp: 'https://api.whatsapp.com/send?phone=18138636878',
        facebook: 'https://www.facebook.com/profile.php?id=100066512800527',
        instagram: 'https://www.instagram.com/el_malecon_llc'
      }
    }
  }
}
</script>