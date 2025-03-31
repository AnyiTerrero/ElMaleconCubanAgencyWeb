<template>
    <div class="social-links">
      <a class="btn btn-outline-secondary btn-social" href="https://facebook.com">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a class="btn btn-outline-secondary btn-social" href="https://instagram.com">
        <i class="fab fa-instagram"></i>
      </a>
      <a class="btn btn-outline-secondary btn-social" href="https://wa.me/+18138636878">
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  </template>
  
  <style scoped>
  .btn-social {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 5px;
    transition: all 0.3s;
  }
  
  .btn-social:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  </style>