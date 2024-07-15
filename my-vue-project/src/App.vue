<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'

import Navbar from './components/Navbar.vue'
import Login from './components/PageMainBody/Login.vue'
import ContentArea from './components/ContentArea.vue'
import Footer from './components/Footer.vue'
import { nameStorage } from './store/nameStorage.js'

import { onMounted } from 'vue';

onMounted(() => {
  document.body.style.minWidth = '768px';
});
const route = useRoute()

const backgroundStyle = computed(() => {
  if (route.path == '/') {
    return {
      backgroundColor: '#34495E'
    };
  }
});

</script>

<template>
  <Navbar v-if="$route.path !== '/'" />
  <div class="full-page" :style="backgroundStyle">
    <Login v-if="$route.path == '/'" />
    <ContentArea v-if="$route.path !== '/'" />
  </div> 
  <Footer v-if="$route.path !== '/'"/>
</template>

<style scoped>
.full-page {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh; /* 确保最小高度为视口高度，但允许内容增长时超出这个高度 */
    width: 100%;
    padding-top: 40px;
    background-attachment: fixed;
}

body {
  margin: 0;
  padding: 0;
  width: 100%; /* Ensure body takes full viewport width without overflow */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}
</style>