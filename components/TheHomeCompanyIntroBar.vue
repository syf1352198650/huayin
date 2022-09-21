<!-- 主页公司介绍栏 -->
<template>
  <div class="box">
    <div class="box-img"><img class="img-main" src="@/assets/22.webp" /></div>
    <div class="box-card">
      <div class="card">
        <div class="card-sub-text">{{ subText }}</div>
        <div class="card-main-text">{{ msg }}</div>
        <router-link to="/introduction"
          ><a href="#" class="link-more"
            >了解更多<img src="@/assets/right.png" /></a
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHomeCompanyIntroBar",
  props:{
 subText:{
  type:String,
  default:'title',
  msg:{
    type:String,
    default:'深圳华银'
  }
 }
  },
  data() {
    return {
      // subText: "Who are we?",
      // msg: "深圳市华银精治资产管理公司是中国顶尖的私募资产管理机构，中国基金业协会首批特别会员，前海股权交易中心首批挂牌企业。目前华银精治管理近百只基金，规模30亿元，投资业绩排列全国前茅，获得2016年和2015年全国私募业绩排名冠军。",
    };
  },
};
</script>

<style>
.box {
  display: flex;
  margin: 0 auto;
  width: 84%;
  max-height: 428px;
  align-items: center;
  box-sizing: border-box;
  overflow-y: hidden;
  margin-bottom: 3%;
}
.box-img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 45%;
}
.img-main {
  width: 120%;
}
.box-card {
  height: 100%;
  width: 55%;
}
.card {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 40px;
  background: #ffffff;
  font-family: PingFang SC;
  font-size: 20px;
  font-weight: 300;
}
.card:hover {
  filter: drop-shadow(0px 10px 20px rgba(142, 142, 142, 0.25));
}
.card-main-text {
  letter-spacing: 0.1em;
  color: #333333;
  margin-bottom: 14px;
}

.card-sub-text {
  letter-spacing: 0.04em;
  text-align: left;
  color: #666666;
  margin-bottom: 10px;
}
.link-more {
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #eb5049;
}

@media only screen and (max-width: 1365px) {
  .box {
    flex-direction: column;
    max-height: none;
  }
  .box-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 150px;
  }
  .img-main {
    height: 120%;
    width: 100%;
  }
  .box-card {
    width: 90%;
    height: 55%;
  }
}
</style>
