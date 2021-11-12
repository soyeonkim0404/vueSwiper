<template>
  <div>page2</div>
</template>

<script>
  export default {
    name: "Page2",
    data() {
      return {
        num: 2
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
