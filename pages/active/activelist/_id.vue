<template>
  <div>
    <img src="@/assets/22.webp" style="height: 350px; width: 100%" alt="" />
    <!-- 面包屑导航 -->
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb1">
      <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/active/1' }"
        >公司动态</el-breadcrumb-item
      >
      <el-breadcrumb-item>动态详情</el-breadcrumb-item>
    </el-breadcrumb> -->
    <div class="breadcrumb1">  <Breadcrumb :lists="lists"></Breadcrumb></div>
  
    <!-- 内容详情 -->
    <BaseContentBox></BaseContentBox>
  </div>
</template>

<script>
// import "@/plugins/axios";
import BaseContentBox from "@/components/BaseContentBox.vue";
import Breadcrumb from "@/components/breadcrumb.vue"
export default {
  components: {
    BaseContentBox,
    Breadcrumb
},
  data(){
    return{
      lists:[]
    }
  },
  methods:{
    getRouter(){
      this.lists=this.$route.matched.filter(v=>v.meta&&v.meta.title)
    }
  },
  created(){
    this.getRouter()
  }
};
</script>

<style>
.text {
  font-size: 14px;
  color: white;
}

.item {
  margin-bottom: 25px;
}
.text a {
  text-decoration: none;
  color: aliceblue;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

#box-card1 {
  width: 220px;
  height: 600px;
  background-color: #572d2d;
  position: absolute;
  margin-top: -100px;
  margin-left: 100px;
  z-index: 9999;
}
.control-center {
  text-align: center;
}
.breadcrumb1 {
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 7%;
  font-family: PingFang SC;
  font-size: 20px;
  font-weight: 300;
}
</style>
