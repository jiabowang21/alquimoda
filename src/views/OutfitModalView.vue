<script setup>
import {defineProps, defineEmits, ref} from 'vue'

const outfits = [
  [
    "../../public/icons/camiseta1.png",
    "../../public/icons/pantalon1.jpg",
    "../../public/icons/zapatos1.png",
    "../../public/icons/gorra1.png"
  ],
  [
    "../../public/icons/camiseta2.png",
    "../../public/icons/pantalon2.jpg",
    "../../public/icons/zapatos2.png",
    "../../public/icons/gorra1.png"
  ],
  [
    "../../public/icons/camiseta3.png",
    "../../public/icons/pantalon3.jpg",
    "../../public/icons/zapatos3.png",
    "../../public/icons/gorra2.png"
  ]
]

const props = defineProps({
  showModal: Boolean
})

const emit = defineEmits(['closeModal'])

const closeModal = () => {
  emit('closeModal')
}
const outfitImages1 = [
  "../../public/icons/gorra1.png",
  "../../public/icons/camiseta1.png",
  "../../public/icons/pantalon1.jpg",
  "../../public/icons/zapatos3.png"
]

const outfitImages2 = [
  "../../public/icons/gorra2.png",
  "../../public/icons/camiseta2.png",
  "../../public/icons/pantalon2.png",
  "../../public/icons/zapatos3.png"
]

const outfitImages = ref(outfitImages1)

const outfitNumber = ref(1)

const generateNewOutfit = () => {
  outfitNumber.value = (outfitNumber.value === 1) ? 2 : 1
  outfitImages.value = (outfitNumber.value === 1) ? outfitImages1 : outfitImages2
}
</script>

<template>
  <div v-if="showModal" class="modal fade show" tabindex="-1" style="display: block;" aria-modal="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Generated Outfit</h5>
          <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
        </div>
        <div class="modal-body text-center">
          <div class="d-flex flex-column align-items-center">
            <img :src="outfitImages[0]" alt="Outfit 1" class="img-fluid mb-3" />
            <img :src="outfitImages[1]" alt="Outfit 2" class="img-fluid mb-3" />
            <img :src="outfitImages[2]" alt="Outfit 3" class="img-fluid mb-3" />
            <img :src="outfitImages[3]" alt="Outfit 4" class="img-fluid mb-3" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" @click="generateNewOutfit">New</button>
          <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Backdrop for modal -->
  <div v-if="showModal" class="modal-backdrop fade show" @click="closeModal"></div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}
.img-fluid {
  max-width: 125px; /* Establece el tamaño máximo deseado */
  height: auto;
}
.mb-3 {
  margin-bottom: 0rem;
}
</style>