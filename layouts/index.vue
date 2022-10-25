<template>
    <!-- 基本布局 -->
      <div>
        <!-- 顶部导航 -->
        <AppHeader />
        <KeepAlive> <nuxt />
        <!-- 底部 --></KeepAlive>
       
        <AppFooter />
      </div>
    </template>
    
    <script>
    import AppHeader from "@/components/AppHeader.vue";
    import AppFooter from "@/components/AppFooter.vue";
    
    export default {
      components: {
        AppHeader,
        AppFooter,
      },
    };
    </script>
    
    <style>
    body {
      margin-top: 0px;
      margin-left: 0px;
      margin-bottom: 0px;
      width: 100%;
      height: 100%;
      background-color: #f1f0f0;
    }
    </style>
    