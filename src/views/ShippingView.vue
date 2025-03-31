<template>
    <main>
      <PageHeader
        title="Envíos a Cuba"
        breadcrumb="Inicio"
        current-page="Envíos"
      />
  
      <ShippingServices />
  
      <div class="container shipping-details py-5">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="row g-4">
              <div class="col-lg-4">
                <div class="info-card">
                  <h3><i class="fas fa-question-circle me-2"></i>¿Cómo funciona?</h3>
                  <ol class="steps">
                    <li>Empaqueta tus artículos</li>
                    <li>Visita nuestras oficinas</li>
                    <li>Recibe tu tracking</li>
                    <li>¡Entrega en Cuba!</li>
                  </ol>
                </div>
              </div>
  
              <div class="col-lg-8">
                <div class="rate-calculator">
                  <h3 class="mb-4">Calcula tu envío</h3>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label">Tipo de envío</label>
                      <select class="form-select">
                        <option>Express (7-15 días)</option>
                        <option>Marítimo (35-50 días)</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Peso (lbs)</label>
                      <input type="number" class="form-control" placeholder="Ej: 10">
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100">
                        Calcular costo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <FaqSection topic="envios" />
    </main>
  </template>
  
  <script setup>
  import PageHeader from '@/components/common/PageHeader.vue'
  import ShippingServices from '@/components/sections/ShippingServices.vue'
  import FaqSection from '@/components/common/FaqSection.vue'
  </script>
  
  <style scoped>
  .shipping-details {
    background-color: #f9f9f9;
  }
  
  .info-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  }
  
  .info-card h3 {
    color: var(--primary);
    margin-bottom: 1.5rem;
  }
  
  .steps {
    padding-left: 1.5rem;
  }
  
  .steps li {
    margin-bottom: 1rem;
    position: relative;
    padding-left: 1.5rem;
  }
  
  .steps li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 8px;
    height: 8px;
    background: var(--primary);
    border-radius: 50%;
  }
  
  .rate-calculator {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  }
  
  .form-label {
    font-weight: 500;
    color: #555;
  }
  
  .btn-primary {
    background-color: var(--primary);
    border: none;
    padding: 0.7rem;
    font-weight: 500;
  }
  
  .btn-primary:hover {
    background-color: var(--secondary);
  }
  </style>