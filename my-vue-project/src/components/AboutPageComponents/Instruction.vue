<script setup>

</script>

<template>
    <div class="text-content">
        <h1><span class="simple">Simple, </span><br />Meet Flexible.</h1>
        <p>Whatever you’re publishing.<br/>
            Whoever your audience is.</p>
        <p>MyLog makes it simple to get started.<br/>
            And effortlessly captures every footprint of your life.</p>
        <p>
          Upload your beautiful moments now.<br/>
          And share you feel at this instant.
        </p>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

    .text-content {
      max-width: 50%; /* Adjust this value as needed */
    }
    
    .text-content h1 {
      font-family: 'Impact', fantasy;
      font-size: 60px;
    }
    .simple{
        letter-spacing: 4px;
        font-family: 'Dancing Script', cursive;
        font-size:70px
    }
    
    .text-content p {
      font-size: 15px;
      font-family: 'Gill Sans', sans-serif;
    }

    @media (max-width: 768px) { /* Adjust for mobile responsiveness */
      .text-content {
        max-width: 100%;
      }
    }
</style>