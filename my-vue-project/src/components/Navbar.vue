<script setup>
import { useRouter } from 'vue-router';
import { nameStorage } from '@/store/nameStorage.js'; 
import { computed, onMounted } from 'vue';

onMounted(() => {
  nameStorage.getName(); // 确保获取最新的localStorage值
});

//nameStorage.getName()被用在computed函数中，currentUserName成为一个响应式引用，其值会根据nameStorage对象的name属性的变化而自动更新
const currentUserName = computed(() => nameStorage.getName());

const router = useRouter();

function logout() {
  nameStorage.clearName();
  router.push('/');
}
</script>
<template>
<div class="navbar">
  <span v-if="currentUserName !== ''" class="current-user">Hi, {{ currentUserName }}!</span>
  <span v-else class="current-user">Hi, Stranger!</span>
  <div class="links-container">
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/footprints">Footprints</router-link>
    <router-link to="/upload">Upload</router-link>
    <a href="#" @click="logout">
      {{ currentUserName !== '' ? 'Logout' : 'Back to Login' }}
    </a>
  </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
.navbar {
  display: flex;
  flex-direction: column; /* 默认方向为列，以确保响应式布局 */
  align-items: center; /* 使元素居中 */
  justify-content: center; /* 中心对齐内容 */
  background-color: #f5f5f5;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  font-family: Arial, sans-serif;
  font-size: 15px;
}

.current-user {
  white-space: nowrap;
  color: #2a2a2a;
  font-family: 'Dancing Script', cursive;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 3px 3px 3px #FED39A;
}

.links-container {
  display: flex; /* 使链接排成一行 */
  justify-content: center; /* 链接居中显示 */
  flex-wrap: wrap; /* 允许内容换行 */
  width: 100%; /* 使容器宽度与navbar相同 */
}

.navbar a {
  text-decoration: none;
  color: #2c3e50;
  margin: 10px; /* 上下左右增加空间，保证在换行时也有足够间隔 */
  transition: color 0.3s;
}

.navbar a:last-child {
  margin-right: 10px;
}

.navbar a:hover {
  color: #FED39A;
}

.navbar .router-link-active {
  color: #FED39A;
  font-weight: bold;
}

@media (min-width: 768px) {
  .navbar {
    flex-direction: row; /* 屏幕宽度大于768px时，导航栏方向改为行 */
    justify-content: space-between; /* 元素分散排列 */
    align-items: center; /* 保持垂直居中 */
  }

  .links-container {
    flex: 1; /* 允许链接容器占据剩余空间 */
    justify-content: space-around; /* 分散对齐方式，使链接均匀分布 */
    padding: 0 10px; /* 为链接容器添加内边距 */
  }

  .current-user {
    flex: 0 0 auto; /* 防止问候语伸缩 */
    margin: 0 20px 0 0; /* 调整问候语的右外边距 */
  }
}

</style>
