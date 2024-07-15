<script setup>
</script>

<template>
    <div class="pic">
        <img src="@/assets/picture/home.jpeg" alt="About pic2" class="pic">
    </div>
</template>

<style scoped>
.pic{
    padding-top: 20px;
}
.pic img { /* 注意这里的选择器改变了，指向 img 标签而不是容器 */
    padding-top: 0px;
    width: 500px;
    margin: 0 auto;
    display: block;
    border-radius: 20px; /* 圆弧形边框 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* 添加阴影 */
}
</style>