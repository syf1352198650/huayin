<!-- 公司介绍内容块 -->
<template>
  <div class="box1">
    <div class="box1-img">
      <img class="img1-main" src="@/assets/22-blur.webp" />
    </div>
    <div class="box1-card">
      <div class="card">
        <div class="title">
          <h2>公司介绍</h2>
          <div>Company Introduction</div>
        </div>
        <div class="card-img">
          <img class="img-main" src="@/assets/22.webp" />
        </div>
        <div class="card-sub-text" style="margin: 20px 0">{{ Intro.subText }}</div>
        <div class="card-main-text">{{ Intro.msg }}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:"TheCompanyIntroPage",
    props:{
      companyIntro:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
        Intro:this.companyIntro
      }
    }
  }
</script>


<style>
.box1 {
  display: flex;
  margin: 0 auto;
  width: 88%;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 3%;
  flex-direction: column;
  max-height: none;
  overflow-y: hidden;
}
.box1-img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-height: 100px;
}
.card-img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-height: 350px;
  overflow: hidden;
}
.img1-main {
  height: 120%;
  width: 100%;
}
.box1-card {
  width: 90%;
  height: 55%;
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
.title {
  margin: 20px 0;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 4px solid #eb5049;
}
.title h2 {
  margin: 0;
  padding: 0;
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
</style>
