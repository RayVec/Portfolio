<template>
  <div class="main">
    <div class="title">
      Sports<i @click="home" class="el-icon-s-home icon-right"></i>
    </div>
    <template v-if="status === 1">
      <div class="block">
        <div class="block-title">Options</div>
        <div class="block-divide"></div>
        <div class="sports">
          <div class="sport">
            <div class="sport-name">Frisbee</div>
            <img
              class="sport-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/site/frisbee.jpeg"
            />
          </div>
          <div class="sport">
            <div class="sport-name">Tennis</div>
            <img
              class="sport-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/site/tennis.jpeg"
            />
          </div>
          <div class="sport">
            <div class="sport-name">Running</div>
            <img
              class="sport-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/site/running.png"
            />
          </div>
          <div class="sport">
            <div class="sport-name">Soccer</div>
            <img
              class="sport-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/site/football.jpeg"
            />
          </div>
          <div class="sport">
            <div class="sport-name">Football</div>
            <img
              class="sport-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/site/rugby.jpg"
            />
          </div>
          <div class="sport">
            <div class="sport-name">Softball</div>
            <img
              class="sport-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/site/softball.jpg"
            />
          </div>
        </div>
      </div>
      <div class="block">
        <div class="block-title">Preparation</div>
        <div class="block-divide"></div>
        <div class="preparation-tips">
          Please check each item to ensure you are completely prepared
        </div>
        <el-checkbox-group v-model="checkList">
          <div class="check-item">
            <el-checkbox label="pre1"></el-checkbox>
            <div class="check-content">Water</div>
          </div>
          <div class="check-item">
            <el-checkbox label="pre2"></el-checkbox>
            <div class="check-content">Sports wear</div>
          </div>
          <div class="check-item">
            <el-checkbox label="pre3"></el-checkbox>
            <div class="check-content">
              Sports equipments (ball, frisbee, ...)
            </div>
          </div>
          <div class="check-item">
            <el-checkbox label="pre4"></el-checkbox>
            <div class="check-content">Contact your partners</div>
          </div>
          <div class="check-item">
            <el-checkbox label="pre5"></el-checkbox>
            <div class="check-content">Confirm weather condition</div>
          </div>
        </el-checkbox-group>
      </div>
      <div class="block">
        <div class="block-title">Map</div>
        <div class="block-divide"></div>
        <div class="preparation-tips">
          You can click the left-top corner (View larger map) to view location
          in Google Map
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.25379975640078!2d-97.75761984640596!3d30.35455394137565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb1a05256877%3A0xf412a6929128693c!2s7022%20Hart%20Ln%2C%20Austin%2C%20TX%2078731!5e0!3m2!1sen!2sus!4v1665946624833!5m2!1sen!2sus"
          class="google-map"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="select">
        <div class="select-button" @click="go">Go!</div>
      </div>
    </template>
    <template v-if="status === 2">
      <div class="block">
        <div class="congrats">Congratulation on your arrival!</div>
        <div>
          <img
            class="congrats-img"
            src="https://raw.githubusercontent.com/RayVec/images/main/site/thumb.jpg"
          />
        </div>
        <div class="congrats-1">Here are some useful information for you</div>
      </div>
      <div class="block">
        <div class="block-title">Destination</div>
        <div class="block-divide"></div>
        <div class="destinations">
          <div class="destination">
            <img
              class="destination-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/site/pictures/4.jpg"
            />
            Frisbee/Football
          </div>
          <div class="destination">
            <img
              class="destination-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/site/pictures/12.jpg"
            />
            Tennis
          </div>
          <div class="destination">
            <img
              class="destination-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/site/pictures/14.jpg"
            />
            Running
          </div>
          <div class="destination">
            <img
              class="destination-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/site/pictures/13.jpg"
            />
            Soccer
          </div>
          <div class="destination">
            <img
              class="destination-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/site/pictures/2.jpg"
            />
            Softball
          </div>
        </div>
      </div>
      <div class="block">
        <div class="block-title">Surroundings</div>
        <div class="block-divide"></div>
        <div class="surroundings">
          <div class="surrounding">
            <div class="surrounding-left">
              <img
                class="surrounding-img"
                src="https://raw.githubusercontent.com/RayVec/images/main/site/starbucks.png"
              />
              <div class="surrounding-name">Starbucks</div>
            </div>
            <div @click="surGo(1)" class="surrounding-go">go</div>
          </div>
          <div class="surrounding">
            <div class="surrounding-left">
              <img
                class="surrounding-img"
                src="https://raw.githubusercontent.com/RayVec/images/main/site/bread.png"
              />
              <div class="surrounding-name">Wholy Bagel</div>
            </div>
            <div @click="surGo(2)" class="surrounding-go">go</div>
          </div>
          <div class="surrounding">
            <div class="surrounding-left">
              <img
                class="surrounding-img"
                src="https://raw.githubusercontent.com/RayVec/images/main/site/food.png"
              />
              <div class="surrounding-name">KAPATAD Kitchen and Cafe</div>
            </div>
            <div @click="surGo(3)" class="surrounding-go">go</div>
          </div>
          <div class="surrounding">
            <div class="surrounding-left">
              <img
                class="surrounding-img"
                src="https://raw.githubusercontent.com/RayVec/images/main/site/shop.png"
              />
              <div class="surrounding-name">Ready to Run</div>
            </div>
            <div @click="surGo(5)" class="surrounding-go">go</div>
          </div>
          <div class="surrounding">
            <div class="surrounding-left">
              <img
                class="surrounding-img"
                src="https://raw.githubusercontent.com/RayVec/images/main/site/church.png"
              />
              <div class="surrounding-name">
                Northwest Hills United Methodist Church
              </div>
            </div>
            <div @click="surGo(4)" class="surrounding-go">go</div>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="block-title">Emergency</div>
        <div class="block-divide"></div>
        <div class="surroundings">
          <div class="surrounding">
            <div class="surrounding-left">
              <img
                class="surrounding-img"
                src="https://raw.githubusercontent.com/RayVec/images/main/site/emergency.png"
              />
              <div class="surrounding-name">Austin Emergency Center</div>
            </div>
            <div @click="surGo(6)" class="surrounding-go">go</div>
          </div>
        </div>
      </div>
    </template>
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
      checkList: [],
      status: 1,
    };
  },
  methods: {
    home() {
      this.$router.push("/site/index");
    },
    surGo(m) {
      if (m === 1) {
        window.open("https://goo.gl/maps/Yk5vzexBcr6FAKjs5");
      }
      if (m === 2) {
        window.open("https://g.page/wholy-bagel-austin?share");
      }
      if (m === 3) {
        window.open("https://goo.gl/maps/fe4fH41sSdNgPekd7");
      }
      if (m === 4) {
        window.open("https://goo.gl/maps/UvZzXRCU8SgWgkRr8");
      }
      if (m === 5) {
        window.open("https://goo.gl/maps/3XX4rHpymBKbdNk59");
      }
      if (m === 6) {
        window.open("https://g.page/AustinEmergencyCenter_FarWest?share");
      }
    },
    go() {
      if (this.checkList.length === 5) {
        let main = document.getElementsByClassName("main")[0];
        main.scrollTop = 0;
        this.status = 2;
      } else {
        alert(
          "Please check each preparation item to make sure you are completely prepared, thanks~"
        );
      }
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
.destination-img {
  width: 100%;
  border-radius: 10px;
}
.destination {
  width: 48%;
  padding: 0 0 3vw 0;
}
.destinations {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 4vw 0 0 0;
}
.surrounding-go {
  border-radius: 10px;
  background-color: #193c40;
  padding: 1.5vw 8vw;
  color: white;
}
.surrounding-left {
  display: flex;
  align-items: center;
  padding-right: 5vw;
}
.surrounding-name {
  text-align: start;
}
.surrounding-img {
  width: 10vw;
  height: 10vw;
  margin-right: 3vw;
}
.surrounding {
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 5vw;
  /* width: 100%; */
  padding: 2vw 0;
}

.surroundings {
  flex-wrap: wrap;
  padding: 5vw 0;
}
.congrats-img {
  width: 100%;
}
.congrats-1 {
  font-size: 5vw;
  color: #a6acaf;
  margin: 2vw 0;
  text-align: start;
}
.congrats {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6vw;
  padding: 4vw 0 0 0;
}
.check-content {
  margin-left: 4vw;
}
.check-item {
  font-size: 5vw;
  display: flex;
  padding: 4vw 0;
  text-align: left;
  align-items: center;
}
.block >>> .el-checkbox__inner {
  width: 5vw;
  height: 5vw;
}
.block >>> .el-checkbox__inner::after {
  width: 1vw;
  height: 2vw;
  left: 1.8vw;
  top: 0.5vw;
}
.block >>> .el-checkbox__label {
  display: none;
}
.preparation-tips {
  display: flex;
  justify-content: start;
  text-align: start;
  font-size: 4.5vw;
  color: #a6acaf;
  margin: 3vw 0;
}
.sport-name {
  width: 20vw;
  text-align: start;
}
.block-divide {
  margin-top: 2vw;
  width: 20vw;
  height: 1.5vw;
  background-color: #d96941;
}
.sport-img {
  width: 25vw;
  height: 25vw;
}
.sport {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vw;
  width: 45vw;
}
.block-title {
  font-size: 7vw;
  text-align: start;
  font-weight: bold;
}
.sports {
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.block {
  margin: 5vw 0;
  padding: 0 2vw;
}
.google-map {
  width: 100%;
  height: 100vw;
  border: 0;
  margin-top: 3vw;
  border-radius: 10px;
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
  padding: 30px 0;
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
.icon-right {
  position: absolute;
  top: 30%;
  left: 5%;
}
.title {
  position: relative;
  font: bold;
  color: white;
  font-size: 9vw;
  background-color: #193c40;
  padding: 20px 10px;
  background-size: 100% 100%;
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), */
  /* url("https://raw.githubusercontent.com/RayVec/images/main/kids_battery_14.jpg"); */
  text-align: center;
}
.main {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
}
</style>
