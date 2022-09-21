<template>
    <div>
      <!-- 公司动态列表 -->
      <div>
        <el-card id="box-cardn">
          <div class="list-title" slot="header">
            <h2>{{title[0]}}</h2>
            <div>{{title[1]}}</div>
          </div>
          <div
            v-for="(item, index) in articleList"
            :key="index"
            class="text item"
          >
            <router-link :to="baseUrl + item.id" id="text"
              ><a href="#">{{ item.title }}</a></router-link
            >
            <hr />
          </div>
        </el-card>
      
       
      </div>
    </div>
  </template>
<script>
    export default{
        name:"e-card",
        props:{
             articleList:{
                type:Array,
                default(){
                    return {}
                }
             },
             baseUrl:{
                type:String,
                default(){
                    return ""
                }
             },
             title:{
                type:Array,
                default(){
                    return []
                }
             }
        },
        data(){
         return{}
        }
    }
</script>