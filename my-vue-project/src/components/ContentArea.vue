<template>
  <div class="background">
    <div class="content-container">
        <div class="base-panel">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url('@/assets/background/backgroundimg.jpg'); /* 替换为你的图片路径 */
  background-size: cover; /* 确保背景图片覆盖整个元素 */
  background-position: center; /* 将背景图片居中显示 */
  background-attachment: fixed; /* 背景图片固定不动 */
  min-height: 100vh; /* 最小高度为视口的100% */
  width: 100%; /* 宽度为100% */
}

.base-panel {
  margin-left: 100px;
  margin-right: 100px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
  min-height:100vh;
  padding-bottom:50px;
  padding-top:5px;
  /* 根据需要添加更多样式，比如背景色、边框等 */
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}


</style>
