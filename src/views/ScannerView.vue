<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const videoRef = ref(null);
const canvasRef = ref(null);
const router = useRouter();
let stream = null;

const startCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.value) {
      videoRef.value.srcObject = stream;
      videoRef.value.play();
    }
  } catch (err) {
    console.error('Error accessing camera:', err);
  }
};

const capturePhoto = () => {
  const canvas = canvasRef.value;
  const context = canvas.getContext('2d');

  canvas.width = videoRef.value.videoWidth;
  canvas.height = videoRef.value.videoHeight;
  context.drawImage(videoRef.value, 0, 0);

  // Optionally save the photo as Base64
  // const photo = canvas.toDataURL('image/png');

  // Redirect after capture
  router.push('/photoReview');
};

onMounted(() => {
  startCamera();
});

onBeforeUnmount(() => {
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
  }
});
</script>

<template>
  <div class="d-flex flex-column align-items-center justify-content-center vh-100">
  <video ref="videoRef" autoplay playsinline class="camera-preview rounded" />

    <button @click="capturePhoto" class="btn btn-dark rounded-circle shadow capture-button d-flex align-items-center justify-content-center">
      <i class="bi bi-camera-fill text-white fs-3"></i>
    </button>

    <!-- Hidden canvas (used for internal capture) -->
    <canvas ref="canvasRef" class="d-none"></canvas>
  </div>
</template>

<style scoped>
.camera-preview {
  width: 70%;
  height: 70%;
}

.capture-button {
  width: 80px;
  height: 80px;
  margin-top: 1.5rem;
  border: none;
}
</style>
