<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App"
  };
</script>

<style>
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
</style>
