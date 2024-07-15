<script setup>
import Instruction from '../AboutPageComponents/Instruction.vue'
import Picture from '../AboutPageComponents/Picture.vue'
</script>

<template>
    <div class="about">
        <Instruction />
        <Picture />
    </div>
</template>

<style scoped>
.about {
    display: flex;
    align-items: center;
    justify-content: space-around; /* This will space out the image and text evenly */
    padding: 50px 0;
    text-align: left; /* Left-align the text within its container */
    margin-left:10px;
    margin-right:10px;
  }

  @media (max-width: 768px) { /* Adjust for mobile responsiveness */
    .about {
      flex-direction: column;
      text-align: center;
    }
  }
</style>

