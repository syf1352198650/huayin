<template>
  <div>
    <img src="@/assets/11.webp" style="height: 350px; width: 100%" alt="" />
    <BaseTitleBox title="关于我们"></BaseTitleBox>
    <TheCompanyTeamPageContent :persons="persons"></TheCompanyTeamPageContent>
    <br /><br />
  </div>
</template>

<script>
// import "@/plugins/axios";
import { teamList } from "~/msgData";
import { getImage } from "~/api";
import BaseTitleBox from "@/components/BaseTitleBox.vue";
import TheCompanyTeamPageContent from "@/components/TheCompanyTeamPageContent.vue";

export default {
  components: {
    BaseTitleBox,
    TheCompanyTeamPageContent,
  },
  data() {
    return {
      persons:teamList,
      imgList: [
        {
          name: "1",
          src: require("@/assets/11.webp"),
          title: "这是第一张",
        },
      ],
    };
  },
  created() {
    this.getImgList();
  },
  methods: {
    async getImgList() {
      // const img1 = await this.$http.get("/huayin/get-img?name=1-4.webp");
      const img1=await getImage()
      this.imgList[0].name = img1.data.data[0].name;
      this.imgList[0].src = img1.data.data[0].location;
    },
  },
};
</script>
