<template>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.linkedin {
  width: 30px;
  height: 30px;
  margin-left: 20px;
  cursor: pointer;
}
.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
}
.img {
  width: 100vw;
  height: 100vw;
}
.select-button {
  margin-top: 5vw;
  width: 80vw;
  height: 15vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d96941;
  color: white;
  border-radius: 10px;
  font-size: 5vw;
  cursor: pointer;
}

.select {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hello {
  text-align: center;
  font-size: 7vw;
  margin-top: 6vw;
  margin-bottom: 6vw;
}
.title {
  font: bold;
  color: white;
  font-size: 9vw;
  background-color: #193c40;
  padding: 20px 10px;
  background-size: 100% 100%;
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), */
  /* url("https://raw.githubusercontent.com/RayVec/images/main/kids_battery_14.jpg"); */
  text-align: start;
}
.main {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
}
</style>
