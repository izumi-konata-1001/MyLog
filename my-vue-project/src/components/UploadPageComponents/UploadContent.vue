<script setup>
import { ref } from 'vue';
import { nameStorage } from '@/store/nameStorage.js';
  
  const postContent = ref('');
  const imageFile = ref(null);
  
  const username = nameStorage.getName();
  const handleFileUpload = (event) => {
    imageFile.value = event.target.files[0];
  };
  
  const resizeImage = (file, maxWidth, maxHeight, callback) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
  
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }
  
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
  
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
  
        callback(canvas.toDataURL('image/jpeg'));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const submitPost = () => {
  if (imageFile.value) {
    resizeImage(imageFile.value, 800, 600, (resizedImage) => {
      const now = new Date(); // 获取当前时间
      const timestamp = now.toISOString(); // 转换为ISO字符串（YYYY-MM-DDTHH:mm:ss.sssZ）

      const postsArray = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      postsArray.push({
        content: postContent.value,
        image: resizedImage,
        uploader: nameStorage.getName(),
        timestamp, 
      });
      try {
        localStorage.setItem('blogPosts', JSON.stringify(postsArray));
        alert('Post submitted successfully!');
      } catch (e) {
        alert('Error saving post: ' + e);
      }

      postContent.value = '';
      imageFile.value = null;
      document.getElementById('post-image').value = '';
    });
  }
};

</script>

<template>
    <form @submit.prevent="submitPost">
        <h1>
            <span class="record-your">Record Your</span>
            <span class="footprint">   Footprint</span>
        </h1>
        <div class="form-group">
            <label for="post-content">Post Content:</label>
            <textarea id="post-content" v-model="postContent" rows="4" required></textarea>
        </div>

        <div class="form-group">
            <label for="post-image">Post Image:</label>
            <input type="file" id="post-image" @change="handleFileUpload" accept="image/*">
        </div>
          <button type="submit">Submit Post</button>
    </form>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

.record-your {
  font-family: 'Impact', fantasy;
  font-size: 50px;
}

.footprint {
  letter-spacing: 4px;
  font-family: 'Dancing Script', cursive;
  font-size:70px
}
.form-group {
    margin-bottom: 20px;
  }
  
.form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
button[type="submit"] {
    background-color: #34495E;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
button[type="submit"]:hover {
    background-color: #34495E;
  }
</style>