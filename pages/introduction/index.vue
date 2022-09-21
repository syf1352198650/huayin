<template>
  <!-- 公司介绍详情 -->
  <div>
    <TheCompanyIntroPageContent id="control_card" :companyIntro="companyIntro"/>
  </div>
</template>

<script>
import TheCompanyIntroPageContent from "@/components/TheCompanyIntroPageContent.vue";
import {companyIntro} from "../../msgData"
export default {
  data(){
    return{
      companyIntro:companyIntro
    }
  },
  components: {
    TheCompanyIntroPageContent,
  },
};
</script>

<style></style>
