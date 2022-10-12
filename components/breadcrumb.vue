<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(v,i) in lists" :key="i">{{v.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </template>
<script>
    export default{
        name:"e-card",
        props:{
         lists:{
            type:Array,
            default(){
                return []
            }
         }    
             }
        ,
        data(){
         return{
            
         }
        },
        created(){
           console.log("lists",this.lists);
        }
    }
</script>
<style>
    .text {
      font-size: 14px;
      color: white;
    }
    
    .item {
      margin-bottom: 25px;
    }
    .text a {
      text-decoration: none;
      color: aliceblue;
    }
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both;
    }
    
    #box-card1 {
      width: 220px;
      height: 600px;
      background-color: #572d2d;
      position: absolute;
      margin-top: -100px;
      margin-left: 100px;
      z-index: 9999;
    }
    .control-center {
      text-align: center;
    }
    .breadcrumb1 {
      margin-top: 40px;
      margin-bottom: 40px;
      margin-left: 7%;
      font-family: PingFang SC;
      font-size: 20px;
      font-weight: 300;
    }
    </style>
    