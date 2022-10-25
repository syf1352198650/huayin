
<template>
  <div>
    <!-- 公司动态列表 -->
    <nuxt></nuxt>
    <div>

      <el_card :articleList="articleList" :title="['基金咨询','Fund Information']" :baseUrl="'/fund/fundlist/'"></el_card>
    
      <!-- 分页导航 -->
      <div class="control-center">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="500"
          :background="true"
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
        category:"基金报告",
        pagenum:1,
        pagesize: "15",
      },
    };
  },

  created() {
   this.getArticleList();
  },

  methods: {
    handleSizeChange(val) {
      this.queryInfo.pagesize = val;
      this.getArticleList();
    },
    handleCurrentChange(val) {
      this.queryInfo.pagenum = val;
      this.getArticleList();
   
      
    },
    async getArticleList() {

      const res=await getArticle(this.queryInfo)
      this.articleList = res.data.data;
    },
  },
};
</script>
<style>
.text {
  font-size: 14px;
  color: white;
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

#box-cardn {
  width: 70%;
  min-height: 600px;
  margin: 20px auto;
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
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
