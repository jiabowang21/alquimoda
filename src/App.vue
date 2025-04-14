<script setup>
import {RouterView, useRoute} from 'vue-router';
const route = useRoute();
// Define routes that should NOT show the navbar
const hideNavbarRoutes = ['/', '/login', '/register'];
</script>

<template>
  <!-- Only show navbar if route is not in the hide list -->
  <nav
      v-if="!hideNavbarRoutes.includes(route.path)"
      class="navbar navbar-expand-lg navbar-light px-4 shadow"
      style="background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);"
  >

  <a class="navbar-brand d-flex align-items-center gap-2" href="#">
      <img src="../public/icons/logo2.png" alt="Alquimoda Logo" style="height: 42px;" />
      <span>AlquiModa</span>
    </a>

    <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <RouterLink to="/home" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/scanner" class="nav-link">Scanner</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/closet" class="nav-link">Closet</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/generator" class="nav-link">Generator</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/chatbot" class="nav-link">ChatBot</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/socialMedia" class="nav-link">SocialMedia</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/buy" class="nav-link">Buy</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/ootd" class="nav-link">Outfit of the day</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/calendary" class="nav-link">Calendar</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/donationPoints" class="nav-link">Donation</RouterLink>
        </li>
      </ul>
    </div>
  </nav>

  <router-view />
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>