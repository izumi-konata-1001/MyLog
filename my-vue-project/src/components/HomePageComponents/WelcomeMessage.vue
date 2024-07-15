<script setup>
import { nameStorage } from '@/store/nameStorage.js'
import { computed, onMounted } from 'vue';

onMounted(() => {
  nameStorage.getName();
});

const name = computed(() => nameStorage.name);
</script>

<template>
    <div class="greeting">
      <h1 v-if="name !== ''">Hello, {{ name }}!</h1>
      <h1 v-else>Hi, there!</h1>
      <p v-if="name === ''">You haven't login, But...</p>
      <p>Welcome to MyLog🎉<br/>
      Start your Journey now!</p>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
.greeting {
  padding: 10px 0;
  text-align: center;
}

.greeting h1 {
  font-size: 70px;
  font-family: 'Dancing Script', cursive;
  letter-spacing: 4px;
}

.greeting p {
  font-family:'Impact', fantasy;
  font-size: 25px;
}
</style>