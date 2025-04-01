<script setup>
import { ref } from 'vue'
import OutfitModal from './OutfitModalView.vue'

const showModal = ref(false)

const generateOutfit = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="card p-4 w-50">
      <h2 class="text-center mb-4">Outfit Generator</h2>

      <div class="mb-3">
        <label for="weather" class="form-label">Weather</label>
        <select v-model="weather" class="form-select" id="weather">
          <option value="Sunny">Sunny</option>
          <option value="Rainy">Rainy</option>
          <option value="Cloudy">Cloudy</option>
          <option value="Windy">Windy</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="event" class="form-label">Event</label>
        <select v-model="event" class="form-select" id="event">
          <option value="Wedding">Wedding</option>
          <option value="Party">Party</option>
          <option value="Business meeting">Business meeting</option>
          <option value="Casual outing">Casual outing</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="preference" class="form-label">Preference</label>
        <select v-model="preference" class="form-select" id="preference">
          <option value="Formal attire">Formal attire</option>
          <option value="Casual attire">Casual attire</option>
          <option value="Sporty">Sporty</option>
          <option value="Trendy">Trendy</option>
        </select>
      </div>

      <button @click="generateOutfit" class="btn btn-dark w-100">
        Generate Outfit
      </button>
    </div>
  </div>

  <!-- Using the modal component -->
  <OutfitModal
      :showModal="showModal"
      @closeModal="closeModal" />
</template>

<style scoped>
</style>
