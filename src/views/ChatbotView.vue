<template>
  <div class="chat-container">
    <div class="chat-header">
      <h3>Asistente virtual</h3>
      <p>Tu estilista en línea</p>
      <button class="clear-button" @click="clearMessages">Limpiar</button>
    </div>
  <!-- Mensajes del chatbot -->
    <div class="messages" ref="messagesContainer">
    <div v-for="(message, index) in messages" :key="index" class="message" :class="message.type">
        <div v-if="message.type === 'bot'" class="bot-message">
          <p>{{ message.text }}</p>
          <div v-if="message.images" class="bot-images">
            <img v-for="(img, idx) in message.images" :key="idx" :src="img" alt="Bot suggestion" />
          </div>
        </div>
        <div v-if="message.type === 'user'" class="user-message">
          <p>{{ message.text }}</p>
        </div>
      </div>
    </div>

    <!-- Input para el usuario -->
    <div class="chat-input">
      <input v-model="userInput" placeholder="Escribe un mensaje..." @keyup.enter="sendMessage" />
      <button @click="sendMessage">Enviar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onUpdated } from 'vue'

const messages = ref([])
const userInput = ref('')
const messagesContainer = ref(null)

const selectedShirt = ref(null)

const sendMessage = () => {
  const text = userInput.value.trim().toLowerCase()
  if (!text) return

  messages.value.push({ type: 'user', text })
  userInput.value = ''
  messages.value.push({ type: 'bot', text: 'Procesando...' })

  setTimeout(() => {
    messages.value.pop()

    if (text.includes('camiseta')) {
      // Bot responde con una camiseta
      selectedShirt.value = "../../public/icons/camiseta1.png"
      messages.value.push({
        type: 'bot',
        text: 'Aquí tienes la camiseta',
        images: [selectedShirt.value]
      })

    } else if (text.includes('outfit')) {
      if (selectedShirt.value) {
        messages.value.push({
          type: 'bot',
          text: 'Aquí tienes un outfit completo con esa camiseta:',
          images: [
            selectedShirt.value,
            "../../public/icons/pantalon1.jpg",
            "../../public/icons/zapatos3.png"
          ]
        })
      } else {
        messages.value.push({
          type: 'bot',
          text: 'Primero elige una camiseta antes de mostrarte un outfit completo.'
        })
      }

    } else {
      // Mensaje genérico
      messages.value.push({
        type: 'bot',
        text: '¡No entendí bien! Puedes pedirme una camiseta o un outfit.'
      })
    }
  }, 800)
}
const clearMessages = () => {
  messages.value = [
    { type: 'bot', text: 'Hola, soy tu estilista virtual. ¿En qué puedo ayudarte hoy?' }
  ]
  selectedShirt.value = null
}

// Auto scroll al final cuando se actualiza el DOM
onUpdated(() => {
  const el = messagesContainer.value
  if (el) {
    el.scrollTop = el.scrollHeight
  }
})

// Inicializa con mensaje de bienvenida
clearMessages()
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f7fa;
}

.chat-container {
  width: 800px; /* Tamaño fijo o usa max-width para responsive */
  height: 800px;
  margin: 40px auto; /* Centrado horizontal y separación del borde superior */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #ddd;
}

.chat-header {
  text-align: center;
  margin-bottom: 20px;
}

.chat-header h3 {
  margin-bottom: 5px;
}

.message {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  max-width: 80%;
}

.message p {
  margin: 0;
  word-wrap: break-word; /* Permite que el texto se ajuste dentro del contenedor */
}

.bot-message {
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 10px;
  display: inline-block;
  align-self: flex-start; /* Alinea a la izquierda */
}

.user-message {
  background-color: #d1e7ff;
  padding: 10px;
  border-radius: 10px;
  display: inline-block;
  align-self: flex-end; /* Alinea a la derecha */
  text-align: right;
}

.chat-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 20px;
}

.chat-input input {
  width: 80%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
}

.chat-input button {
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.chat-input button:hover {
  background-color: #0056b3;
}

img {
  width: 100%;
  max-width: 200px;
  margin-top: 10px;
}

.clear-button {
  margin-top: 10px;
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}

.clear-button:hover {
  background-color: #d9363e;
}

.messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  margin-bottom: 10px;
}

.bot-images {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.bot-images img {
  width: 100px;
  height: auto;
  border-radius: 8px;
  border: 1px solid #ccc;
}

</style>
