<template>
  <div class="intro">
    <button type="button" @click="nextPage">시작하지</button>
  </div>
</template>

<script>
  export default {
    name: "Intro",
    data() {
      return {
        num: 0
      };
    },

    methods: {
      nextPage() {
        this.$emit("pageNum", this.num + 1);
      }
    }
  };
</script>

<style scoped>
  .intro {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #f1f3f5;
  }
  button {
    background: #2c3e50;
    width: 400px;
    height: 65px;
    border: none;
    color: #fff;
    font-size: 2.5rem;
  }
</style>
