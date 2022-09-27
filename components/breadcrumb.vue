<template>
    <div>
        <el-breadcrumb separator="/">
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
         return{}
        }
    }
</script>