<script setup>
// No se necesita lógica en este caso
</script>

<template>
  <div class="vr-view">
    <h1>VR</h1>
    <video
        class="video-player"
        src="/public/vr.mov"
        controls
        autoplay
        loop
        muted
    ></video>
  </div>
</template>

<style scoped>
.vr-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: 100vh;
  background-color: #f9f9f9;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #222;
}

.video-player {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
</style>
