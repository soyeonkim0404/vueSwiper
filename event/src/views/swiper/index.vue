<template>
  <div class="wrap">
    <component :is="componentData[pageNum]" :pageNum="pageNum" :stepNum="stepNum" />
  </div>
</template>

<script>
  import Intro from "@/views/swiper/intro";
  import Step from "@/views/swiper/step";

  export default {
    name: "wrap",
    components: {
      Intro,
      Step
    },
    data() {
      return {
        pageNum: 0,
        stepNum: 1,
        componentData: ["Intro", "Step"]
      };
    }
  };
</script>

<style scoped>
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #f1f3f5;
  }
</style>
