<template>
    <div class="faq-container">
      <div 
        v-for="(item, index) in faqs" 
        :key="index" 
        class="faq-item"
        :class="{ 'active': openIndex === index }"
      >
        <div 
          class="faq-question"
          role="button"
          :aria-expanded="openIndex === index"
          @click="toggleAccordion(index)"
        >
          <span>{{ item.question }}</span>
          <i class="fas" :class="openIndex === index ? 'fa-minus' : 'fa-plus'"></i>
        </div>
        
        <transition name="slide">
          <div 
            v-show="openIndex === index" 
            class="faq-answer"
            role="region"
            :aria-labelledby="'question-' + index"
          >
            <p>{{ item.answer }}</p>
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    faqs: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(item => 
          Object.prototype.hasOwnProperty.call(item, 'question') && 
          Object.prototype.hasOwnProperty.call(item, 'answer')
        )
      }
    }
  })
  
  const openIndex = ref(null)
  
  const toggleAccordion = (index) => {
    openIndex.value = openIndex.value === index ? null : index
  }
  </script>
  
  <style scoped>
  .faq-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
  }
  
  .faq-item {
    margin-bottom: 1rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .faq-item.active {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .faq-question {
    padding: 1.25rem;
    background-color: var(--primary);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .faq-question:hover {
    background-color: var(--secondary);
  }
  
  .faq-question i {
    font-size: 0.9rem;
    transition: transform 0.3s ease;
  }
  
  .faq-item.active .faq-question i {
    transform: rotate(180deg);
  }
  
  .faq-answer {
    padding: 1.25rem;
    background-color: #f8f9fa;
    color: #495057;
    line-height: 1.6;
  }
  
  .slide-enter-active,
  .slide-leave-active {
    transition: max-height 0.3s ease-in-out;
    max-height: 500px;
    overflow: hidden;
  }
  
  .slide-enter-from,
  .slide-leave-to {
    max-height: 0;
    opacity: 0;
  }
  </style>