<template>
  <div>
    <!-- 基金资讯列表 -->
    <div>
      <!-- <el-card id="box-cardx">
        <div class="list-title" slot="header">
          <h2>基金资讯</h2>
          <div>Fund Information</div>
        </div>
        <div v-for="(item, index) in articleList" :key="index" class="text item">
          <router-link :to="'/fund/fundlist/' + item.id" id="text">
            <a href="#">{{ item.title }}</a>
          </router-link>
          <hr />
        </div>
      </el-card> -->
       <el_card :articleList="articleList" :title="['基金咨询','Fund Information']" :baseUrl="'/fund/fundlist/'"></el_card>
      <!-- 分页导航 -->
      <div class="control-center">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// import "@/plugins/axios";
import el_card from "../../components/e-card.vue"
import { getArticle } from '~/api';
export default {
  components: {el_card},
  data() {
    return {
      id: "",
      articleList: [],
      queryInfo: {
        title: "",
        type: "基金报告",
        pagenum: parseInt(this.$route.path.replace("/fund/", "")),
        pagesize: "15",
      },
    };
  },
  watch: {
    $route(to, from) {
      if (to.path.replace("/fund/", "") != this.queryInfo.pagenum) {
        this.queryInfo.pagenum = to.path.replace("/fund/", "");
        this.getArticleList();
      }
    },
  },

  created() {
    this.getArticleList();
  },

  methods: {
    handleSizeChange(val) {
      this.queryInfo.pagesize = val;
      console.log(`每页 ${val} 条`);
    },
    async handleCurrentChange(val) {
      this.queryInfo.pagenum = val;
      this.$router.push("/fund/" + val);
      this.getArticleList();
    },
    // 获取文章列表
    async getArticleList() {
      // const res = await this.$http.get("/huayin/get-articles", {
      //   params: this.queryInfo,
      // });
      const res=await getArticle(this.queryInfo)
      this.articleList = res.data.data;
    },
  },
};
</script>

<style>
.text {
  font-size: 20px;
  color: white;
}
.list-title {
  color: #fff;
  margin-bottom: 20px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 4px solid #eb5049;
}
.list-title h2 {
  color: #fff;
  margin: 0;
  padding: 0;
}
.item {
  margin-top: 30px;
}
.text a {
  text-decoration: none;
  color: #ffffff;
  font-family: PingFang SC;
  font-size: 18px;
  font-weight: 300;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

#box-cardx {
  /* text-align: center; */
  width: 70%;
  min-height: 600px;
  margin: 20px auto;
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
  /* margin-top: -100px; */
  /* margin-left: 100px; */
  margin: 0 auto;
  z-index: 9999;
}
.control-center {
  text-align: center;
}
.el-pagination {
  margin: 40px auto;
  font-family: PingFang SC;
  font-size: 20px;
  font-weight: 400;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  /*当前选中页数的样式进行修改*/
  background-color: #eb5049;
  color: #fff;
}
</style>
