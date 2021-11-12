<template>
  <div>
    <button type="button" @click="nextStepEvent">다음~!</button>
  </div>
</template>

<script>
  export default {
    name: "step",
    props: ["pageNum"],
    data() {
      return {
        num: 1
      };
    },
    methods: {
      nextStepEvent() {
        this.$emit("update:pageNum", this.num + 1);
      }
    }
  };
</script>

<style scoped>
  button {
    background: red;
    width: 400px;
    height: 65px;
    border: none;
    color: #fff;
    font-size: 2.5rem;
  }
</style>
