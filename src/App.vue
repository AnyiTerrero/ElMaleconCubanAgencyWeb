<template>
    <TopBar />
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </template>
  
  <script setup>
  import TopBar from '@/components/common/TopBar.vue'
  import Navbar from '@/components/common/Navbar.vue'
  import Footer from '@/components/common/Footer.vue'
  </script>
  
  <style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>