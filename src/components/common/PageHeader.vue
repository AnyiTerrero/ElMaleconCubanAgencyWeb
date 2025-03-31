<template>
    <div class="page-header">
      <h1 class="display-3 text-primary mb-3">{{ title }}</h1>
      <div class="d-inline-flex align-items-center text-muted">
        <router-link to="/" class="text-decoration-none text-muted">{{ breadcrumb }}</router-link>
        <i class="fa fa-circle px-3"></i>
        <span class="current-page">{{ currentPage }}</span>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    breadcrumb: {
      type: String,
      default: "Inicio"
    },
    currentPage: {
      type: String,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .page-header {
    text-align: center;
    padding: 4rem 0;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                url('/img/header-bg.webp') center center/cover;
    color: white;
    margin-bottom: 5rem;
  }
  
  .page-header h1 {
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .current-page {
    color: var(--primary);
    font-weight: 500;
  }
  </style>