<!-- 主页基金资讯栏 -->
<template>
  <el-row
    class="trend-box"
    :gutter="50"
    type="flex"
    align="center"
    style="margin: 0 auto; box-sizing: border-box; width: 84%"
  >
    <el-col md:={span:24} span:12>
      <div class="grid-content">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item
            v-for="item in articleList"
            :key="item.id"
            :title="item.title"
            name="1"
          >
            <router-link :to="'/fund/fundlist/' + item.id" id="text"
              ><a href="#"
                ><div id="control_width" v-html="item.content"></div></a
            ></router-link>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-col>
    <el-col md:={span:24} span:12>
      <div class="grid-content">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item
            v-for="item in articleList2"
            :key="item.id"
            :title="item.title"
            name="1"
          >
            <router-link :to="'/fund/fundlist/' + item.id" id="text"
              ><a href="#"
                ><div id="control_width" v-html="item.content"></div></a
            ></router-link>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// import axios from "~/plugins/axios";
export default {
  name: "TheHomeFundInfoBar",
  props: ["fundList","fundList2"],

  data() {
    return {
      activeNames: ["1"],
      articleList: this.fundList,
      articleList2: this.fundList2
    };
  },

  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: #333;
}
.trend-box {
  width: 81%;
  margin: 0 auto;
  padding: 40px;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  background-color: #fff;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
}
.el-collapse-item__header {
  font-family: PingFang SC;
  font-size: 20px;
  font-weight: 400;
}
#control_width {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
  height: 50px;
  font-family: PingFang SC;
  font-size: 16px;
  font-weight: 300;
}
@media only screen and (max-width: 992px) {
  .trend-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
