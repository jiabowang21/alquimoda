<script setup>
import { ref } from 'vue'
const base = import.meta.env.BASE_URL;

const suggestion = ref({
  city: 'Barcelona',
  weather: 'Soleado ☀️',
  temperature: 16,
  event: 'sin evento',
  style: 'casual',
  outfitImages: [
    '/icons/camiseta1.png',
    '/icons/pantalon3.png',
    '/icons/zapatos3.png',
    '/icons/gorra2.png'
  ]
})

const nuevaSugerencia = () => {
  suggestion.value = {
    city: 'Barcelona',
    weather: 'Soleado ☀️',
    temperature: 16,
    event: 'sin evento',
    style: 'casual',
    outfitImages: [
      '/icons/camiseta3.png',
      '/icons/pantalon2.png',
      '/icons/zapatos3.png',
      '/icons/gorra1.png'
    ]
  }
}

const verDetalles = () => {
  alert(`Detalles del outfit:\n\nCiudad: ${suggestion.value.city}\nClima: ${suggestion.value.weather}\nTemperatura: ${suggestion.value.temperature}°C\nEvento: ${suggestion.value.event}\nEstilo: ${suggestion.value.style}`)
}
</script>

<template>
  <div class="outfit-suggestion">
    <h2>Sugerencias de hoy 👗☀️</h2>
    <div class="card">
      <div class="outfit-grid">
        <img v-for="(img, index) in suggestion.outfitImages" :key="index" :src="img" alt="outfit item" />
      </div>
      <div class="info">
        <h3>{{ suggestion.city }}</h3>
        <p><strong>Clima:</strong> {{ suggestion.weather }}</p>
        <p><strong>Temperatura:</strong> {{ suggestion.temperature }}°C</p>
        <p><strong>Evento:</strong> {{ suggestion.event }}</p>
        <p><strong>Estilo:</strong> {{ suggestion.style }}</p>
      </div>
      <div class="buttons">
        <button class="red" @click="nuevaSugerencia">Nueva sugerencia</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.outfit-suggestion {
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  max-width: 200px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
}

.info {
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
}

.info p {
  margin: 4px 0;
}

.buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
}

button {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
}

button.red {
  background-color: #e53935;
  color: white;
}

button.dark {
  background-color: #333;
  color: white;
}
.outfit-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
}

.outfit-grid img {
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ccc;
  object-fit: cover;
}

.info {
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  padding: 10px 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.info h3 {
  margin-bottom: 10px;
  font-size: 18px;
}

.info p {
  margin: 6px 0;
  font-size: 14px;
  color: #333;
}

.outfit-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
}

.outfit-grid img {
  width: 100%;
  height: 120px;
  object-fit: contain;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 8px;
  box-sizing: border-box;
}

</style>
