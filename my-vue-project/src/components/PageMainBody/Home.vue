<script setup>
import { nameStorage } from '@/store/nameStorage.js'
import { onMounted } from 'vue'
import Picture from '../HomePageComponents/Picture.vue'
import WelcomeMessage from '../HomePageComponents/WelcomeMessage.vue'

</script>

<template>
    <div class="container">
        <Picture />
        <WelcomeMessage />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
</style>
