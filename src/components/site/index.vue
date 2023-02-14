<template>
  <div class="main">
    <div class="title">Relaxing journey</div>
    <div class="show">
      <el-carousel direction="vertical" :interval="4000" height="50vw">
        <el-carousel-item v-for="item in 14" :key="item">
          <img
            style="width: 100%; height: 100%; border-radius: 10px"
            :src="
              'https://raw.githubusercontent.com/RayVec/images/main/site/pictures/' +
              item +
              '.jpg'
            "
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="hello">
      Good {{ time }}, <br />
      How's the mood and what do you want to try today?
    </div>
    <div class="select">
      <div @click="openRead" class="select-button">Rest/Read</div>

      <div @click="openSports" class="select-button">Sports</div>
      <div @click="openOutdoor" class="select-button">Outdoor activities</div>
    </div>
    <div>
      <img
        class="img"
        src="https://raw.githubusercontent.com/RayVec/images/main/site/kids_battery_14.jpg"
      />
    </div>
    <div class="bottom">
      Created by Rui Wei
      <div>
        <img
          @click="openLinkedin"
          style=""
          class="linkedin"
          src="https://raw.githubusercontent.com/RayVec/images/main/linkedin.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "Morning",
    };
  },
  methods: {
    openRead() {
      this.$router.push("/site/read");
    },
    openOutdoor() {
      this.$router.push("/site/outdoor");
    },
    openSports() {
      this.$router.push("/site/sports");
    },
    setTime() {
      let date = new Date();

      if (date.getHours() >= 0 && date.getHours() < 12) {
        this.time = "Morning";
      } else if (date.getHours() >= 12 && date.getHours() < 18) {
        this.time = "Afternoon";
      } else {
        this.time = "Night";
      }
      console.log(this.time);
    },
    openLinkedin() {
      window.open("http://www.linkedin.com/in/rayvec");
    },
  },
  mounted() {
    this.setTime();
  },
};
</script>

<style scoped>
.show {
  margin: 0 auto;
  margin-top: -3vw;

  width: 90vw;
}
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
  padding-bottom: 60px;
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
