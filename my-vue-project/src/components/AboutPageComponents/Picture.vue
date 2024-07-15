<script setup>

</script>

<template>
    <div class="pic">
        <img src="@/assets/picture/about.jpeg" alt="About pic1">
    </div>
</template>

<style scoped>
    .pic img { 
      width: 500px; /* You can adjust this value to fit your design */
      border-radius: 20px; 
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }
    
    /* Additional styles to ensure no margins are affecting layout */
    .pic {
      margin: 0;
    }
    
    /* Ensuring image takes only necessary space */
    .pic img {
      display: block;
      max-width: 100%; /* Makes the image responsive */
      height: auto; /* Keeps the aspect ratio */
    }
    @media (max-width: 768px) { /* Adjust for mobile responsiveness */
    
        .pic {
        max-width: 100%;
      }
    }
</style>