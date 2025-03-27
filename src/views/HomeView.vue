<script setup>
</script>

<template>
  <div class="welcome-container d-flex flex-column justify-content-center align-items-center text-center">
    <img src="../../public/icons/logo2.png" alt="Alquimoda Logo" class="logo mb-4" />
    <h1 class="welcome-text">Welcome to AlquiModa</h1>
    <p class="lead">Your fashion assistant, one outfit at a time 👗👔</p>
  </div>
</template>

<style scoped>
.welcome-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #dfe4ea 100%);
  font-family: 'Poppins', sans-serif;
  padding: 2rem;
}

.logo {
  width: 700px;
  height: auto;
}

.welcome-text {
  font-size: 2.5rem;
  font-weight: 600;
  color: #2c3e50;
}
</style>
