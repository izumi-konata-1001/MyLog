<script setup>
import { nameStorage } from '@/store/nameStorage.js'; // 确保路径正确
import { ref, computed, onMounted } from 'vue';
// 其他imports保持不变

const jumpPage = ref('');
const currentPage = ref(1);
const postsPerPage = 9;
const totalPages = computed(() => Math.ceil(posts.value.length / postsPerPage));

onMounted(() => {
  nameStorage.getName();
});

const currentPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return posts.value.slice(start, end);
});

const posts = ref([]);

// 假设nameStorage.getName()现在返回当前用户的名称
const currentUser = computed(() => nameStorage.name);
const isAdmin = currentUser === 'Administrator';

onMounted(() => {
  const savedPosts = localStorage.getItem('blogPosts');
  if (savedPosts) {
    posts.value = JSON.parse(savedPosts);
  }
});

function deletePost(index) {
  // 从posts数组中移除指定索引的帖子
  posts.value.splice(index, 1);
  // 更新localStorage
  localStorage.setItem('blogPosts', JSON.stringify(posts.value));
}

// 在你的<script>标签或Vue组件的methods部分添加这个函数
function formatTextForHtml(text) {
  return text.replace(/\n/g, '<br>');
}

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString(); // 以本地格式显示日期和时间
}

function jumpToPage() {
  const pageNumber = parseInt(jumpPage.value);
  if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages.value) {
    currentPage.value = pageNumber;
    jumpPage.value = ''; // 清空输入框
  } else {
    alert('Please enter a valid page number');
  }
}
</script>

<template>
  <div class="posts-container">
    <div v-for="(post, index) in currentPosts" :key="index" class="post">
        <div class="post-header">
          <p class="auth"><span class="from">From &nbsp;</span>{{ post.uploader }}:</p>
          <button v-if="post.uploader === currentUser || isAdmin" @click="deletePost(index)" class="delete-button">Delete</button>
        </div>
        <img v-if="post.image" :src="post.image" alt="Uploaded Image" class="uploaded-image">
        <p class="content" v-html="formatTextForHtml(post.content)"></p>
        <p class="post-time">{{ formatDate(post.timestamp) }}</p>
    </div>
    <div class="pagination">
      <button @click="currentPage > 1 && currentPage--" :disabled="currentPage <= 1">Previous</button>
      <input type="number" v-model="jumpPage" placeholder="Go to page...">
      <button @click="jumpToPage">Go</button>
      <button @click="currentPage < totalPages && currentPage++" :disabled="currentPage >= totalPages.value">Next</button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
.post {
    background-color: #f5f5f5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: calc(33.333% - 30px);
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 390px; /* 或你需要的固定高度 */
    overflow-y: auto;
}

@media (max-width: 768px) {
  .post {
    width: calc(100% - 40px); /* 调整为100%宽度，减去某些外边距 */
    margin: 0 auto 20px; /* 添加自动外边距以居中显示，并且在帖子之间添加一些垂直间距 */
    height: 470px;
  }
}

/* 自定义滑轨和滑块的样式 */
.post::-webkit-scrollbar {
    width: 5px; /* 滑轨的宽度 */
}

.post::-webkit-scrollbar-track {
    background: #FED39A; /* 滑轨的背景色 */
    border-radius: 10px; /* 若需要，也可以给滑轨设置圆角 */
}

.post::-webkit-scrollbar-thumb {
    background: #34495E; /* 滑块的背景色 */
    border-radius: 10px; /* 滑块的圆角，使其看起来是圆弧形的 */
}

.post::-webkit-scrollbar-thumb:hover {
    background: #555; /* 滑块在鼠标悬停时的背景色 */
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap; /* 允许子项在必要时换行 */
}

.auth {
  margin-top: 0;
  margin-bottom: 5px; /* 可调整为需要的间距 */
  text-align: left;
  font-size: 28px;
  font-family: 'Dancing Script', cursive;
  flex-grow: 1; /* 让名称占据多余空间，确保按钮靠右对齐 */
  min-width: 60%; /* 或根据需要调整，保证足够的空间显示用户名 */
}


.from {
  font-family: 'Gill Sans', sans-serif;
  font-size: 15px;
}

.content {
  font-size: 15px;
  font-family: 'Gill Sans', sans-serif;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 5px;
}
  
.uploaded-image {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  margin-bottom: 5px;
}


.delete-button {
  /* 在按钮被挤到下一行时，增加顶部间距 */
  margin-top: 10px; /* 根据实际布局调整 */
  margin-bottom: 5px;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #34495E;
  color: white;
  border: none;
}

.post-time {
  font-size: 14px;
  color: #777; /* 灰色文本 */
  margin-top: 5px; /* 与图片或文本内容保持一定距离 */
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
}

.pagination input {
  margin: 0 10px;
  padding: 5px;
  width: 80px;
  margin-left: 10px;
  margin-right: 10px;
}

.pagination button{
  background-color: #34495E;
  color: white;
  border: none; /* 移除默认边框 */
  cursor: pointer; /* 显示指针光标以提高用户体验 */
  padding: 5px 15px;
  border-radius: 5px;
}

.pagination button:first-child {
  margin-right: 20px; /* 右边距 */
}

/* 中间按钮，如果有的话，可以设置左右间距 */
.pagination button:not(:first-child):not(:last-child) {
  margin: 0 10px;
}

/* 最后一个按钮 */
.pagination button:last-child {
  margin-left: 20px; /* 左边距 */
}
</style>