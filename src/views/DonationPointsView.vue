<script setup>
const locations = [
  {
    name: "Recycling Point 1 (Street A, 30)",
    rating: "4.8 (500 reviews)",
    distance: "1.2 km",
    image: "/icons/point1.jpg"
  },
  {
    name: "Donation Spot 2 (Street B, 20)",
    rating: "4.6 (320 reviews)",
    distance: "0.8 km",
    image: "/icons/point2.png"
  },
  {
    name: "Solidarity Textile Center (Street C, 130)",
    rating: "4.9 (210 reviews)",
    distance: "1.6 km",
    image: "/icons/point3.png"
  }
];
</script>

<template>
  <div class="donation-view">
    <div class="map-area">
      <img src="/icons/mapa.png" alt="Map with donation points" />
    </div>

    <div class="list-area">
      <h2>Nearby Centers</h2>
      <div class="location-card" v-for="(loc, index) in locations" :key="index">
        <img :src="loc.image" :alt="loc.name" />
        <div class="info">
          <h3>{{ loc.name }}</h3>
          <p>⭐ {{ loc.rating }}</p>
          <p>📍 {{ loc.distance }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.donation-view {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 700px;
  margin: 0 auto;
}

.map-area {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.map-area img {
  width: 100%;
  height: 400px; /* Aumentamos la altura */
  object-fit: cover; /* Asegura que ocupe todo el espacio */
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.list-area {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.list-area h2 {
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.location-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  background-color: #f4f4f4;
  transition: box-shadow 0.2s;
}

.location-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
}

.location-card img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.location-card .info {
  flex: 1;
}

.location-card h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #222;
}

.location-card p {
  margin: 0.2rem 0;
  font-size: 0.95rem;
  color: #555;
}

.location-card button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}

.location-card button:hover {
  background-color: #45a047;
}
</style>
