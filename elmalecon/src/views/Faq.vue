<template>
  <div class="faq-page">
    <div class="page-header">
      <div class="container text-center py-5">
        <h1 class="text-white display-3">Preguntas Frecuentes</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
            <li class="breadcrumb-item active">FAQ</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container py-5">
      <div class="faq-container">
        <div 
          v-for="(item, index) in faqItems"
          :key="index"
          class="faq-item"
          @click="toggleItem(index)"
        >
          <div class="faq-question">
            {{ item.question }}
            <i class="fas fa-chevron-down float-right"></i>
          </div>
          <div class="faq-answer" :class="{ active: item.active }">
            <div v-html="item.answer"></div>
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
      faqItems: [
        {
          question: '¿Cómo funciona el proceso para enviar paquetes?',
          answer: 'Para realizar un envío, los clientes deben traer los productos...',
          active: false
        },
        // ... otras preguntas
      ]
    }
  },
  methods: {
    toggleItem(index) {
      this.faqItems[index].active = !this.faqItems[index].active
    }
  }
}
</script>

<style scoped>
.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-question {
  background: #00007af5;
  color: white;
  padding: 1.25rem;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-answer {
  background: #f1f1f1;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.faq-answer.active {
  max-height: 500px;
  padding: 1.25rem;
}
</style>