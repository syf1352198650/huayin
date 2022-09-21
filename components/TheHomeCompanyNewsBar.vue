<!-- 主页公司动态栏 -->
<template>
  <el-row class="news-box" :gutter="70" type="flex" align="center" style="margin: 0 auto;  box-sizing: border-box; width:88%;">
    <el-col
      class="col"
      md:={span:12} span:24
      v-for="o in newsList"
      :key="o.id"
    >
      <el-card id="control-card" shadow="never">
        <el-row >
          <router-link :to="'/active/activelist/' + o.id" id="text">
          <a href="#"><h3 class="card-title" style="margin:0px 0;">{{ o.title }}</h3></a>
          </router-link>
        </el-row>
        <el-row ><el-divider style="margin:0px 0;" id="divider-card"></el-divider></el-row>
        <el-row>
          <img src="@/assets/news.webp" class="image" />
        </el-row>
        <el-row  id="control-left1">
          <p class="card-content" v-html="o.content"></p>
        </el-row>
        <el-row><router-link :to="'/active/activelist/' + o.id"
          ><a href="#" class="link-more"
            >查看详情<img src="@/assets/right.png" /></a
        ></router-link></el-row>
      </el-card>
    </el-col>
    
  
    <br />
  </el-row>
</template>

<script>
export default {
  name: "TheHomeCompanyNewsBar",
  props:["newsList"],
  data() {
    return {
      
    };
  },
};
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.card-title {
  font-family: "PingFang SC";
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 0.04em;
}
.card-content {
  font-family: "PingFang SC";
  font-weight: 300;
  font-size: 20px;
  display: flex;
  letter-spacing: 0.1em;
  max-height: 200px;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* 限制在一个块元素显示的文本的行数 */
  -webkit-box-orient: vertical; /* 垂直排列 */
  text-overflow: ellipsis;
  overflow: hidden;
  color: #333333;
}
.el-card {
  padding: 4%;
}

#divider-card {
  border-top: 4px solid #eb5049;
  background-color: none;
}
#control-left1 {
  padding-left: 1%;
}

a {
  text-decoration: none;
  color: #333333;
}
.image {
  width: 100%;
  margin-bottom: 2%;
}
#control-card {
  height: fit-content;
}
#control-card:hover {
  filter: drop-shadow(0px 10px 20px rgba(142, 142, 142, 0.25));
}
.link-more {
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #eb5049;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 300;
}
@media only screen and (max-width: 992px) {
  .news-box {
    flex-direction: column;
    align-items: center;
  }
  .el-col {
    margin-bottom: 40px;
  }
}
</style>
