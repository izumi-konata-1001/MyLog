<script setup>
import Footprint from '../FootprintsPageComponents/Footprint.vue'
</script>

<template>
    <div class="container">
        <div class="title">
            <h1>Footprints</h1>
        </div>
        <div class="posts-container">
            <Footprint />
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.title{
    text-align: center;
}

.title  h1 {
  font-size: 60px;
  font-family: 'Dancing Script', cursive;
  letter-spacing: 3px;
  text-shadow:2px 2px 6px #FED39A;
}

.posts-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 5px;
}
</style>