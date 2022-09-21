<!-- 文章内容块 -->
<template>
  <el-card
    class="box-card5jmncv"
    style="width: 78%; margin-left: 7%"
    shadow="never"
  >
    <h2>{{ title }}</h2>
    <p v-html="msg"></p>
  </el-card>
</template>

<script>
  import { showEditArtial } from '~/api';
export default {
  name: "BaseContentBox",
  data() {
    return {
      msg: "",
      title: "",
    };
  },
  created() {
    this.getPath();
  },
  watch: {
    $route: "getPath",
  },
  methods: {
    async getPath() {
      let id = this.$route.params.id;
      const res = await showEditArtial(id)
      this.title = res.data.data[0].title;
      this.msg = res.data.data[0].content;
    },
  },
};
</script>

<style>
.box-card5 h2 {
  font-weight: 500;
  text-align: center;
  margin-bottom: 50px;
}
.box-card5 p {
  font-weight: 300;
}
.box-card5 {
  font-family: PingFang SC;
  font-size: 20px;
  margin: 0 auto;
  margin-top: 1%;
  min-height: 500px;
  position: relative;
  filter: drop-shadow(0px 5px 10px rgba(193, 193, 193, 0.25));
}
</style>
