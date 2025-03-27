<script setup>
import { ref } from 'vue';

const closet = ref({
  Tops: [("../../public/icons/camiseta1.png"),
         ("../../public/icons/camiseta2.png"),
         ("../../public/icons/camiseta3.png")],
  Bottoms: [("../../public/icons/pantalon1.jpg"),
            ("../../public/icons/pantalon2.png")],
  Shoes: [("../../public/icons/zapatos1.png"),
          ("../../public/icons/zapatos2.png")],
  Accessories: [("../../public/icons/gorra1.png"),
                ("../../public/icons/gorra2.png")]
});

const selectedImage = ref(null);

const showPreview = (image) => {
  selectedImage.value = image;
};

const closePreview = () => {
  selectedImage.value = null;
};
</script>

<template>
  <div class="closet-wrapper">
    <div class="closet-form text-center">
      <h1 class="mb-5">👗 My Virtual Closet</h1>

      <div v-for="(items, category) in closet" :key="category" class="category-card mb-4">
        <h4 class="category-title">{{ category }}</h4>
        <hr />
        <div class="d-flex flex-wrap justify-content-center gap-3">
          <img
              v-for="(item, index) in items"
              :key="index"
              :src="item"
              alt="Clothing item"
              class="closet-img"
              @click="showPreview(item)"
          />
        </div>
      </div>
    </div>

    <div v-if="selectedImage" class="preview-overlay" @click="closePreview">
      <img :src="selectedImage" class="preview-image" />
    </div>
  </div>
</template>

<style scoped>
.closet-wrapper {
  min-height: 100vh;
  background: white;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow-y: auto;
  text-align: center;
}

.closet-form {
  max-width: 800px;
  width: 100%;
  background: linear-gradient(135deg, #A67B5B 0%, #805A3B 100%);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.category-card {
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  background: linear-gradient(135deg, #D2B48C 0%, #A67B5B 100%);
}

.category-title {
  margin-bottom: 0.5rem;
}

.closet-img {
  width: 120px;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
}

.closet-img:hover {
  transform: scale(1.05);
}

.preview-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.preview-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
}
</style>
