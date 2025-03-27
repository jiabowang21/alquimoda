<script setup>
import { useAuthStore } from "../store/auth";
const auth = useAuthStore();

const logout = () => {
  auth.logout();
  window.location.href = "/login";
};
</script>

<template>
  <div class="text-center mt-10">
    <h1 class="text-3xl font-bold">Welcome to the Dashboard</h1>
    <button @click="logout" class="mt-4 px-4 py-2 bg-red-500 text-white rounded">
      Logout
    </button>
  </div>
</template>

<style scoped>

</style>