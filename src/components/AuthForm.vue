<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const isLogin = ref(true);
const router = useRouter();

const form = ref({
  username: '',
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const handleSubmit = () => {
  if (!isLogin.value && form.value.password !== form.value.confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  console.log(isLogin.value ? 'Logging in' : 'Registering', form.value);
  if (isLogin.value) {
    router.push('/dashboardView');
  } else {
    router.push('/dashboardView');
  }
};
</script>

<template>
  <div class="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
    <img src="../../public/icons/logo.webp" alt="Logo" style="width: 300px; margin-bottom: 1.5rem;" />
    <div class="card p-4 shadow-lg" style="width: 24rem;">
      <h2 class="text-center mb-4" v-if="isLogin">Login</h2>
      <h2 class="text-center mb-4" v-else>Register</h2>

      <form @submit.prevent="handleSubmit">
        <div v-if="!isLogin">
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
        </div>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input v-model="form.email" type="email" required class="form-control">
        </div>

        <div class="mb-3">
          <label class="form-label">Password</label>
          <input v-model="form.password" type="password" required class="form-control">
        </div>

        <div v-if="!isLogin" class="mb-3">
          <label class="form-label">Confirm Password</label>
          <input v-model="form.confirmPassword" type="password" required class="form-control">
        </div>

        <button type="submit" class="btn btn-primary w-100">
          {{ isLogin ? 'Login' : 'Register' }}
        </button>
      </form>

      <p class="mt-3 text-center">
        {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
        <button @click="isLogin = !isLogin" class="btn btn-link">
          {{ isLogin ? 'Register' : 'Login' }}
        </button>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>