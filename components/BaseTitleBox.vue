<!-- 标题框 -->
<template>
  <div class="box-divider">
    <h2>{{ title }}<a href="/introduction"></a></h2>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  name: "BaseTitleBox",
  props: {
    title: {
      type: String,
      default: "Title",
    },
  },
};
</script>

<style>
.box-divider {
  margin: 3% auto;
}
h2 {
  font-family: "PingFang SC";
  font-weight: 400;
  letter-spacing: 0.04em;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 4px;
  color: #333333;
}
.divider {
  margin: 0 auto;
  width: 50px;
  height: 2px;
  border-top: 4px solid #eb5049;
}
</style>
