<script setup>
import Logo from "../LoginPageComponents/Logo.vue"
import WelcomeMessage from "../LoginPageComponents/WelcomeMessage.vue"
import InputBox from "../LoginPageComponents/InputBox.vue"
import { useRouter } from 'vue-router';
import { nameStorage } from '@/store/nameStorage.js'

const router = useRouter();
function navigateToHome() {
  router.push('/home');
  nameStorage.clearName();
}
</script>

<template>
    <div class="container">
        <Logo />
        <WelcomeMessage />
        <InputBox />
        <p>———————— or ————————</p>
        <button @click="navigateToHome">Just look around</button>
    </div>
</template>

<style scoped>
.container {
    margin:100px;
    text-align: center;
    font-family: 'Arial', sans-serif;
  }
p{
  color:white;
}
button {
  padding: 12px 65px;
  background-color:#FFFAEE ;
  border: none;
  cursor: pointer;
  margin-top: 5px;
  }
</style>
