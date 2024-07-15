<script setup>
import { ref } from 'vue';
import { nameStorage } from '@/store/nameStorage.js';
import { useRouter } from 'vue-router';

const name = ref('');
const showWarning = ref(false);
const router = useRouter();

function startJourney() {
  if (name.value.trim() === '') {
    showWarning.value = true;
    return;
  }
  showWarning.value = false;
  nameStorage.addName(name.value.trim());
  router.push('/home');
}
</script>

<template>
    <div class="name-input">
        <span v-if="showWarning" class="warning">Please enter you name!</span>
            <br/>
        <input type="text" placeholder="Your Name" v-model="name"required>
            <br/>
        <button @click="startJourney">Start</button>
    </div>
</template>

<style scoped>
.name-input span{
    color:#FFFAEE;
  }
  .name-input input {
    margin: 20px;
    padding: 10px;
    width: 200px;
  }
  
  .name-input button {
    padding: 12px 100px;
    background-color: #FED39A;
    border: none;
    cursor: pointer;
    color:#2c3e50;
  }
  </style>