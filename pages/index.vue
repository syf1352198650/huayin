<template>
  <div>
    <!-- 轮播图 -->
    <BaseCarousel :imgList="this.imgList"></BaseCarousel>
    <!-- 公司介绍栏 -->
    <BaseTitleBox title="公司介绍"></BaseTitleBox>
    <TheHomeCompanyIntroBar :subText="this.theHomeCompanyIntroBar.subText" :msg="this.theHomeCompanyIntroBar.msg" ></TheHomeCompanyIntroBar><br />
    <!-- 广告图 -->
    <div style="display: flex; justify-content: center; align-items: center">
      <img src="@/assets/33.webp" alt="" style="height: 100%; width: 100%; max-height: 120px" />
    </div>
    <!-- 公司动态栏 -->
    <BaseTitleBox title="公司动态"></BaseTitleBox>
    <TheHomeCompanyNewsBar :newsList="this.newsList"></TheHomeCompanyNewsBar>
    <!-- 基金资讯栏 -->
    <BaseTitleBox title="基金资讯"></BaseTitleBox>
    <TheHomeFundInfoBar :fundList="this.fundList" :fundList2="this.fundList2" ></TheHomeFundInfoBar>
  </div>
</template>

<script>
// import axios from "@/plugins/axios";
import {theHomeCompanyIntroBar} from "../msgData/index"
import { getdata } from "~/api";
import BaseCarousel from "@/components/BaseCarousel.vue";
import BaseTitleBox from "@/components/BaseTitleBox.vue";
import TheHomeCompanyIntroBar from "@/components/TheHomeCompanyIntroBar.vue";
import TheHomeCompanyNewsBar from "@/components/TheHomeCompanyNewsBar.vue";
import TheHomeFundInfoBar from "@/components/TheHomeFundInfoBar.vue";
import {imgList} from "../msgData"
export default {
  props:{
  type:Array,
  default(){
    return []
  }
    },
  data() {
    return {
      theHomeCompanyIntroBar:theHomeCompanyIntroBar,
      imgList: imgList
    };
  }
,
  components: {
    BaseCarousel,
    BaseTitleBox,
    TheHomeCompanyIntroBar,
    TheHomeCompanyNewsBar,
    TheHomeFundInfoBar,
  },
  async asyncData() {
    // const fundRes = await axios.get("/huayin/get-articles", {
    //   params: {
    //     title: "",
    //     type: "基金报告",
    //     pagenum: 1,
    //     pagesize: 4,
    //   },
    // });
    const fundRes= await getdata({
      
        category: "基金报告",
        pagenum: 1,
        pagesize: 4,
      })
    // const fundRes2 = await axios.get("/huayin/get-articles", {
    //   params: {
    //     title: "",
    //     type: "基金报告",
    //     pagenum: 2,
    //     pagesize: 4,
    //   },
    // });
    const fundRes2=await getdata({
       
        category: "基金报告",
        pagenum: 2,
        pagesize: 4,
      })
    // const newsRes = await axios.get("/huayin/get-articles", {
    //   params: {
    //     title: "",
    //     type: "新闻中心",
    //     pagenum: 1,
    //     pagesize: 2,
    //   },
    // });
    const newsRes=await getdata({
      
        category: "基金报告",
        pagenum: 1,
        pagesize: 2,
      })

    return {
      fundList: fundRes.data.data,
      fundList2: fundRes2.data.data,
      newsList: newsRes.data.data,
    };
    // return{
    //   fundList:[],
    //   fundList2:[],
    //   newsList:[]
    // }
  },
};
</script>
