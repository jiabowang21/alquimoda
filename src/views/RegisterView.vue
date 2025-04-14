<script setup>
import { ref } from 'vue';

const form = ref({
  username: '',
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const handleSubmit = () => {
  if (form.value.password !== form.value.confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  console.log("Registering user", form.value);
};
</script>

<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100 bg-light">
    <div class="card p-4 shadow-lg" style="width: 24rem;">
      <h2 class="text-center mb-4">Register</h2>

      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input v-model="form.username" type="text" required class="form-control">
        </div>

        <div class="mb-3">
          <label class="form-label">Name</label>
          <input v-model="form.name" type="text" required class="form-control">
        </div>

        <div class="mb-3">
          <label class="form-label">Surname</label>
          <input v-model="form.surname" type="text" required class="form-control">
        </div>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input v-model="form.email" type="email" required class="form-control">
        </div>

        <div class="mb-3">
          <label class="form-label">Password</label>
          <input v-model="form.password" type="password" required class="form-control">
        </div>

        <div class="mb-3">
          <label class="form-label">Confirm Password</label>
          <input v-model="form.confirmPassword" type="password" required class="form-control">
        </div>

        <button type="submit" class="btn btn-primary w-100">Register</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>