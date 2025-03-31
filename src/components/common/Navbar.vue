<template>
    <div class="container-fluid position-relative nav-bar p-0">
      <div class="container-lg position-relative p-0 px-lg-3" style="z-index: 9;">
        <nav class="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
          <router-link to="/" class="navbar-brand d-block d-lg-none">
            <h1 class="m-0 display-4 text-primary">El Malecón</h1>
          </router-link>
          
          <button 
            class="navbar-toggler"
            @click="toggleMenu"
            :aria-expanded="isMenuOpen.toString()"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div 
            class="collapse navbar-collapse justify-content-between"
            :class="{ show: isMenuOpen }"
          >
            <div class="navbar-nav ml-auto py-0">
              <router-link 
                to="/servicios" 
                class="nav-item nav-link"
                active-class="active"
              >
                Servicios
              </router-link>
              <router-link 
                to="/ubicaciones" 
                class="nav-item nav-link"
                active-class="active"
              >
                Ubicaciones
              </router-link>
            </div>
            
            <router-link to="/" class="navbar-brand mx-5 d-none d-lg-block">
              <h1 class="m-0 display-4 text-primary">El Malecón</h1>
            </router-link>
            
            <div class="navbar-nav mr-auto py-0">
              <router-link 
                to="/preguntas" 
                class="nav-item nav-link"
                active-class="active"
              >
                Preguntas
              </router-link>
              <router-link 
                to="/envios" 
                class="nav-item nav-link"
                active-class="active"
              >
                Envíos
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isMenuOpen = ref(false)
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  </script>