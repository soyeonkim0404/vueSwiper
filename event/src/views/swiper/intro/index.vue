<template>
  <div>
    <button type="button" @click="nextStepEvent">시작~!</button>
  </div>
</template>

<script>
  export default {
    name: "intro",
    props: ["pageNum"],
    data() {
      return {
        num: 0
      };
    },
    methods: {
      nextStepEvent() {
        this.$emit("pageNum", this.num + 1);
      }
    }
  };
</script>

<style scoped>
  button {
    background: #2c3e50;
    width: 400px;
    height: 65px;
    border: none;
    color: #fff;
    font-size: 2.5rem;
  }
</style>
