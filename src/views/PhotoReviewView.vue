<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// Simulate a captured photo (you can pass a real one via props or global state)
const photo = '/sample-photo.jpg'; // Replace with dynamic data as needed

const saveToCloset = () => {
  router.push('/closet');
};

const takeAnother = () => {
  router.push('/scanner');
};
</script>

<template>
  <div class="photo-review-container d-flex flex-column justify-content-center align-items-center text-center">
    <img src="icons/camiseta3.png" alt="Captured Photo" class="captured-photo mb-4" />

    <div class="d-flex gap-3">
      <button @click="saveToCloset" class="btn btn-success">Save to Closet</button>
      <button @click="takeAnother" class="btn btn-outline-primary">Take Another One</button>
    </div>
  </div>
</template>

<style scoped>
.photo-review-container {
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #dfe4ea 100%);
  font-family: 'Poppins', sans-serif;
}

.captured-photo {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
</style>
