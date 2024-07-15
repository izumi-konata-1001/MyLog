<script setup>
import { nameStorage } from '@/store/nameStorage.js';
import UploadContent from '../UploadPageComponents/UploadContent.vue'

const username = nameStorage.getName();
</script>

<template>
    <div class="upload-container">
        <div v-if="username !== 'Administrator' && username !== ''">
            <UploadContent />
        </div>
        <div v-else-if="username === 'Administrator'">

            <p>Sorry,<br/>
                Administrator can’t upload.</p>
        </div>
        <div v-else>
            <p>Sorry,<br/>
                You haven't signin.😥<br/>
                Anonymity can’t upload.</p>
        </div>
    </div>
</template>

<style scoped>
.upload-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }

  p{
    font-family: 'Impact', fantasy;
    font-size: 50px;
  }
</style>