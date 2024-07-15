<script setup>
</script>

<template>
  <footer class="footer">
    <img src="@/assets/logo/logo.png" alt="Logo" class="logo" />
    <span>MyLog.com</span>
  </footer>
</template>

<style scoped>
.footer {
  height:35px;
  display: flex;
  align-items: center;
  background-color: #34495E;
  color: white;
  width: 100%;
  position: fixed; /* Or absolute, depending on your layout */
  bottom: 0;
  left: 0;
  padding-left: 10px;
  box-sizing: border-box;
  font-family: 'Impact', fantasy;
}

.logo {
  /* Adjust the logo size as needed */
  width: 30px; /* Example size */
  height: auto;
  margin-right: 10px;
}
</style>
