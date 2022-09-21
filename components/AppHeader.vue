<!-- 顶部 -->
<template>
  <div class="header w">
    <!-- 标志模块 -->
    <div class="logo">
      <router-link to="/main"
        ><a href="#"><img src="@/assets/logo.svg" /></a
      ></router-link>
    </div>
    <!-- 文字导航栏模块 -->
    <div class="nav">
      <ul>
        <li>
          <router-link to="/main" id="text"><a href="#">首页</a></router-link>
        </li>
        <li>
          <router-link to="/introduction" id="text"
            ><a href="#">公司介绍</a></router-link
          >
        </li>
        <li>
          <router-link to="/fund/1" id="text"
            ><a href="#">基金资讯</a></router-link
          >
        </li>
        <li>
          <router-link to="/active/1" id="text"
            ><a href="#">公司动态</a></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "PingFang SC";
  letter-spacing: 0.04em;
}
.w {
  width: 1200px;
  margin: 0 auto;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.header {
  min-height: 100px;
  margin: 0 auto;
  width: 100%;
}
.logo {
  float: left;
  width: 30%;
  height: 80%;
  margin-left: 6%;
  margin-top: 36px;
}
.nav {
  float: right;
  height: 120px;
  line-height: 120px;
  margin-right: 4%;
}
.nav ul li {
  float: left;
  height: 120px;
  width: 160px;
  box-sizing: border-box;
}
.nav ul li a {
  display: block;
  height: 120px;
  text-align: center;
  line-height: 120px;
  color: #333333;
  font-size: 18px;
}
.nav ul li:hover {
  border-block-end: 4px solid #eb5049;
}
@media only screen and (max-width: 1100px) {
  .header {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .logo {
    width: auto;
    margin-top: 26px;
    margin-left: 0;
  }

  .nav ul li {
    width: 120px;
    height: 80px;
  }
  .nav {
    height: 80px;
    line-height: 80px;
    width: fit-content;
  }
  .nav ul li a {
    line-height: 80px;
    height: 80px;
  }
}
</style>
