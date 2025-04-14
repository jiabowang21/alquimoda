<script setup>
const metrics = [
  {
    name: "Wedding Pants",
    value: "$30",
    change: "+20% month over month"
  },
  {
    name: "White Hoodie",
    value: "$41.99",
    change: "+33% month over month"
  }
];

const users = [
  { name: "Elynn Lee", email: "email@fakedomain.net" },
  { name: "Oscar Dum", email: "email@fakedomain.net" }
];
</script>

<template>
  <div class="metrics-container">
    <h2>Fashion & Style Metrics <span>📊</span></h2>

    <!-- Métricas -->
    <div class="card">
      <h3>Summary</h3>
      <div class="metric-cards">
        <div class="metric-card" v-for="item in metrics" :key="item.name">
          <h4>{{ item.name }}</h4>
          <p class="value">{{ item.value }}</p>
          <p class="change">{{ item.change }}</p>
        </div>
      </div>
    </div>

    <!-- Gráfico -->
    <div class="card">
      <h3>Usage Trend</h3>
      <div class="chart-area">
        <img src="/icons/metrics.png" alt="Usage trend chart" />
      </div>
    </div>

    <!-- Usuarios -->
    <div class="card">
      <h3>Most Active Users</h3>
      <ul class="user-list">
        <li v-for="user in users" :key="user.email">
          <strong>{{ user.name }}</strong><br />
          <small>{{ user.email }}</small>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
:root {
  --accent: #4CAF50;
  --light: #f9f9f9;
  --shadow: rgba(0, 0, 0, 0.05);
  --text: #333;
}

.metrics-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: var(--text);
}

.card {
  background-color: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 16px var(--shadow);
  transition: 0.3s ease;
}

.card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.card h3 {
  margin-bottom: 1.5rem;
  color: var(--text);
  font-size: 1.3rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.metric-cards {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.metric-card {
  background-color: var(--light);
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  text-align: center;
  width: 200px;
  box-shadow: 0 2px 6px var(--shadow);
}

.metric-card h4 {
  margin: 0;
  font-size: 1rem;
  color: #555;
}

.metric-card .value {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--accent);
  margin: 0.4rem 0;
}

.metric-card .change {
  font-size: 0.9rem;
  color: #2e7d32;
}

.chart-area img {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: 10px;
}

.user-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

.user-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}
</style>
