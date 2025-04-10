<script setup>
import { ref, computed } from 'vue'

// Lista de productos simulada
const items = ref([
  {
    id: 1,
    name: 'Abrigo beige',
    price: 49.99,
    image: '/icons/abrigo1.png',
    selected: false
  },
  {
    id: 2,
    name: 'Camisa blanca',
    price: 24.90,
    image: '/icons/camisa1.png',
    selected: false
  },
  {
    id: 3,
    name: 'Jeans slim fit',
    price: 39.50,
    image: '/icons/jeans1.png',
    selected: false
  },
  {
    id: 4,
    name: 'Zapatillas urbanas',
    price: 59.90,
    image: '/icons/zapatillas1.png',
    selected: false
  }
])

// Cómputo de los seleccionados
const selectedItems = computed(() => items.value.filter(item => item.selected))

const totalPrice = computed(() =>
    selectedItems.value.reduce((sum, item) => sum + item.price, 0).toFixed(2)
)

const placeOrder = () => {
  if (selectedItems.value.length === 0) {
    alert('Por favor, selecciona al menos un producto.')
    return
  }

  alert(`Has comprado:\n\n${selectedItems.value.map(i => i.name).join('\n')}\n\nTotal: $${totalPrice.value}`)
}
</script>

<template>
  <div class="shopping-list">
    <h2>🛒 Lista de Compras Inteligente</h2>
    <table>
      <thead>
      <tr>
        <th></th>
        <th>Producto</th>
        <th>Precio</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>
          <input type="checkbox" v-model="item.selected" />
        </td>
        <td class="item-info">
          <img :src="item.image" alt="item" />
          <span>{{ item.name }}</span>
        </td>
        <td>${{ item.price.toFixed(2) }}</td>
      </tr>
      </tbody>
    </table>

    <div class="summary">
      <p><strong>Total:</strong> ${{ totalPrice }}</p>
      <button @click="placeOrder">Comprar seleccionados</button>
    </div>
  </div>
</template>

<style scoped>
.shopping-list {
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

thead th {
  text-align: left;
  padding: 10px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ccc;
}

tbody td {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #0056b3;
}

.item-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-info img {
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #ccc;
}
</style>
