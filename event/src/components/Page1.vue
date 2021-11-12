<template>
  <div>page1</div>
</template>

<script>
  export default {
    name: "Page1",
    data() {
      return {
        num: 1
      };
    },

    methods: {
      nextPage() {
        this.$emit("pageNum", this.num + 1);
      }
    }
  };
</script>

<style scoped></style>
