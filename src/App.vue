<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import MyPage from "./components/MyPage.vue";

export default {
  name: "App",
  components: {
    MyPage,
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
body {
  margin: 0;
}
</style>
