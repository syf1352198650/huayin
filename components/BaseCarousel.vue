<!-- 轮播图 -->
<template>
  <el-carousel
    trigger="click"
    height="366px"
    :interval="3000"
    arrow="always"
    style="width: 100%"
  >
    <el-carousel-item v-for="item in imgList" :key="item.name">
      <div style="display: flex; justify-content: center; align-items: center">
        <img
          :src="item.src"
          style="height: 100%; width: 100%; min-height: 366px"
          :title="item.title"
        />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: ["imgList"],
};
</script>

<style></style>
