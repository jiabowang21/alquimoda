<template>
  <div class="outfit-week">
    <h2>Weekly Outfits</h2>

    <!-- Weekdays -->
    <div
        class="day"
        v-for="(day, index) in days.slice(0, 5)"
        :key="day.name"
    >
      <h3>{{ day.name }}</h3>
      <img :src="day.image" :alt="`Outfit for ${day.name}`" />
      <ul>
        <li v-for="detail in day.details" :key="detail">{{ detail }}</li>
      </ul>
    </div>

    <!-- Weekend centered -->
    <div class="weekend-row">
      <div
          class="day"
          v-for="(day, index) in days.slice(5)"
          :key="day.name"
      >
        <h3>{{ day.name }}</h3>
        <img :src="day.image" :alt="`Outfit for ${day.name}`" />
        <ul>
          <li v-for="detail in day.details" :key="detail">{{ detail }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const base = import.meta.env.BASE_URL;

const days = [
  {
    name: "Monday",
    image: "/icons/monday.png",
    details: [
      "Top: Beige short-sleeve shirt",
      "Bottom: Brown shorts",
      "Shoes: White sneakers",
      "Bag: White crossbody",
      "Palette: Neutrals and fuchsia highlights"
    ]
  },
  {
    name: "Tuesday",
    image: "/icons/tuesday.png",
    details: [
      "Top: Light tan overshirt",
      "Bottom: Olive green pants",
      "Inner layer: White t-shirt",
      "Shoes: White sneakers",
      "Palette: Earthy green tones"
    ]
  },
  {
    name: "Wednesday",
    image: "/icons/wenesday.png",
    details: [
      "Top: Dark brown jacket",
      "Bottom: Beige chinos",
      "Inner layer: Green t-shirt",
      "Shoes: White sneakers",
      "Palette: Warm brown and neutral"
    ]
  },
  {
    name: "Thursday",
    image: "/icons/thursday.png",
    details: [
      "Top: Black jacket with beige inner shirt",
      "Bottom: Rust brown pants",
      "Shoes: White sneakers",
      "Palette: Deep earth tones"
    ]
  },
  {
    name: "Friday",
    image: "/icons/friday.png",
    details: [
      "Top: Olive green overshirt",
      "Bottom: Dark denim jeans",
      "Inner layer: White t-shirt",
      "Shoes: White sneakers",
      "Palette: Green, navy and denim blue"
    ]
  },
  {
    name: "Saturday",
    image: "/icons/saturday.png",
    details: [
      "Top: Beige overshirt",
      "Bottom: Light beige pants",
      "Inner layer: White t-shirt",
      "Shoes: White sneakers",
      "Palette: Soft neutrals"
    ]
  },
  {
    name: "Sunday",
    image: "/icons/sunday.png",
    details: [
      "Top: Light beige jacket",
      "Bottom: Navy trousers",
      "Inner layer: Checkered scarf & beige shirt",
      "Shoes: White sneakers",
      "Palette: Navy and warm accents"
    ]
  }
];
</script>

<style scoped>
.outfit-week {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 1rem;
}

.day {
  width: 100%;
  max-width: 220px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  background-color: #fdfdfd;
}

.day img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 0.5rem;
}

h2 {
  grid-column: 1 / -1;
  text-align: center;
  font-size: 1.8rem;
}

/* Weekend row centered */
.weekend-row {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.day {
  width: 100%;
  max-width: 220px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  background-color: #f0f0f5; /* <-- Fondo gris claro */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); /* (opcional) sombra ligera */
}

</style>
