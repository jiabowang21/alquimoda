<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    user: 'Helena',
    group: 'Fashion Lovers',
    time: '3 min ago',
    description: 'Look fresco para verano ☀️',
    image: 'icons/outfit2.png',
    likes: 21,
    comments: 2,
    liked: false,
    showComments: false,
    commentList: ['¡Me encanta!', 'Perfecto para el verano'],
    newComment: ''
  },
  {
    id: 2,
    user: 'Maria',
    group: 'Urban Style',
    time: '2 hrs ago',
    description: 'Casual con estilo 😎',
    image: 'icons/outfit1.png',
    likes: 6,
    comments: 1,
    liked: false,
    showComments: false,
    commentList: ['Buen look 🔥'],
    newComment: ''
  },
  {
    id: 3,
    user: 'Lucía',
    group: 'Streetwear Fans',
    time: '1 hr ago',
    description: '¡Nuevo bolso de temporada!',
    image: 'icons/outfit3.png',
    likes: 15,
    comments: 3,
    liked: false,
    showComments: false,
    commentList: ['Qué bonito 😍', '¿Dónde lo compraste?', 'Me encanta el color.'],
    newComment: ''
  }
])
const toggleLike = (post) => {
  if (post.liked) {
    post.likes--
  } else {
    post.likes++
  }
  post.liked = !post.liked
}

const toggleComments = (post) => {
  post.showComments = !post.showComments
}

const addComment = (post) => {
  const comment = post.newComment.trim()
  if (comment) {
    post.commentList.push(comment)
    post.newComment = ''
    post.comments = post.commentList.length
  }
}
</script>

<template>
  <div class="feed-wrapper">
    <h1>Explore</h1>
    <div class="feed-grid">
      <div class="post-card" v-for="post in posts" :key="post.id">
        <div class="post-header">
          <div class="user-info">
            <strong>{{ post.user }}</strong>
            <span class="group">en {{ post.group }}</span>
          </div>
          <span class="time">{{ post.time }}</span>
        </div>
        <img :src="post.image" class="post-image" />
        <p class="description">{{ post.description }}</p>
        <div class="post-actions">
          <button @click="toggleLike(post)" :class="{ liked: post.liked }">
            {{ post.liked ? '❤️' : '🤍' }} {{ post.likes }}
          </button>
          <button @click="toggleComments(post)">💬 {{ post.comments }}</button>
        </div>

        <!-- mini modal de comentarios -->
        <transition name="fade">
          <div v-if="post.showComments" class="comment-modal">
            <div class="comments-list">
              <div v-for="(cmt, idx) in post.commentList" :key="idx" class="comment-line">
                🗨️ {{ cmt }}
              </div>
            </div>
            <div class="comment-input">
              <input v-model="post.newComment" placeholder="Añade un comentario..." />
              <button @click="addComment(post)">Publicar</button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feed-wrapper {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 30px;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  text-align: left;
  font-size: 28px;
  margin-bottom: 30px;
}

.feed-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.post-card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s ease;
}

.post-card:hover {
  transform: translateY(-4px);
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  color: #444;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.group {
  font-size: 12px;
  color: #007bff;
}

.time {
  font-size: 12px;
  color: #999;
}

.post-image {
  width: 100%;
  border-radius: 8px;
  margin: 10px 0;
  object-fit: cover;
}

.description {
  font-size: 14px;
  margin-bottom: 8px;
  color: #333;
}

.post-actions {
  font-size: 14px;
  color: #555;
}

.post-actions {
  font-size: 14px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 16px;
}

.post-actions button {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: transform 0.2s;
}

.post-actions button:hover {
  transform: scale(1.1);
}

.post-actions button.liked {
  color: #e0245e;
}

.comment-modal {
  margin-top: 12px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.comments-list {
  max-height: 120px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.comment-line {
  padding: 4px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #444;
}

.comment-input {
  display: flex;
  gap: 10px;
}

.comment-input input {
  flex: 1;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.comment-input button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.comment-input button:hover {
  background-color: #0056b3;
}

/* transiciones suaves */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
