<!-- 底部 -->
<template>
  <div id="footer">
    <footer class="footer">
      <div class="container">
        <div>
          <p>
            Copyright © 2008-2018 FineHedgefunds. All Rights Reserved. Email:
            huayinjingzhi@163.com
          </p>
        </div>
        <div>
          <p>版权所有 © 深圳市华银精治资产管理有限公司 粤ICP备14083240号</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<style>
.container {
  font-family: PingFang SC;
  font-size: 16px;
  font-weight: 300;
  color: #333333;
  margin-top: 40px;
  padding-top: 30px;
  text-align: center;
}
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 150px;
  background-color: #ffffff;
}
</style>
