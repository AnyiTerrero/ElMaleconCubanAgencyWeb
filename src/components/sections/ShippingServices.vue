<template>
    <div class="shipping-services">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto text-center mb-5">
            <h2 class="section-title">Servicios de Envío</h2>
            <p class="lead">Selecciona el método que mejor se adapte a tus necesidades</p>
          </div>
        </div>
  
        <div class="row g-4">
          <div v-for="(service, index) in services"
               :key="index"
               class="col-lg-4 col-md-6">
            <div class="service-card h-100">
              <div class="service-badge bg-primary">
                {{ service.deliveryTime }}
              </div>
              <div class="service-icon">
                <i :class="service.icon"></i>
              </div>
              <div class="service-body">
                <h3 class="service-title">{{ service.title }}</h3>
                <ul class="service-features">
                  <li v-for="(feature, i) in service.features" :key="i">
                    <i class="fas fa-check-circle"></i> {{ feature }}
                  </li>
                </ul>
                <router-link :to="service.link" class="service-btn">
                  Más detalles
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const services = [
    {
      title: 'Envío Express',
      icon: 'fas fa-rocket',
      deliveryTime: '7-15 Días',
      features: [
        'Entregas puerta a puerta',
        'Seguimiento en tiempo real',
        'Seguro incluido'
      ],
      link: '/envios/express'
    },
    {
      title: 'Envío Marítimo',
      icon: 'fas fa-ship',
      deliveryTime: '35-50 Días',
      features: [
        'Ideal para paquetes grandes',
        'Tarifas económicas',
        'Aceptamos baterías de litio'
      ],
      link: '/envios/maritimo'
    },
    {
      title: 'Avión de Carga',
      icon: 'fas fa-plane',
      deliveryTime: '10-35 Días',
      features: [
        'Balance entre precio y velocidad',
        'Para electrodomésticos',
        'Cobertura nacional'
      ],
      link: '/envios/aereo'
    }
  ]
  </script>
  
  <style scoped>
  .shipping-services {
    padding: 5rem 0;
    background-color: #fff;
  }
  
  .section-title {
    position: relative;
    padding-bottom: 1rem;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--primary);
  }
  
  .service-card {
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    padding: 2rem;
    position: relative;
    transition: all 0.3s ease;
    border: 1px solid #eee;
    height: 100%;
  }
  
  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
  
  .service-badge {
    position: absolute;
    top: -15px;
    right: 20px;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.9rem;
  }
  
  .service-icon {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
  }
  
  .service-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  .service-features {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
  }
  
  .service-features li {
    padding: 0.3rem 0;
    color: #666;
  }
  
  .service-features i {
    color: var(--primary);
    margin-right: 0.5rem;
  }
  
  .service-btn {
    display: inline-block;
    background: var(--primary);
    color: white;
    padding: 0.6rem 1.5rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .service-btn:hover {
    background: var(--secondary);
    transform: translateY(-2px);
  }
  </style>