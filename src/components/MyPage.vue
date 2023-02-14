<template>
  <div class="main">
    <div class="myinfo">
      <div class="navigation" @click="openLinkedin">
        <div class="avatar">
          <img
            src="https://raw.githubusercontent.com/RayVec/images/main/avatar.jpeg"
            class="avatar-img"
          />
        </div>
        <div class="myName">Ray</div>
      </div>
      <div @click="go(1)" class="navigation">
        <div class="navigation-label">Statement</div>
      </div>
      <div @click="go(2)" class="navigation">
        <div class="navigation-label">Missions</div>
      </div>
      <div @click="go(3)" class="navigation">
        <div class="navigation-label">Background</div>
      </div>
    </div>
    <div id="statement" class="show">
      <div class="statement">
        <div class="shell-statement">
          <div class="statement-title">Statement</div>
          <div class="statement-content">
            Bridging the boundaries between reality and virtuality
          </div>
        </div>
      </div>
      <el-carousel height="600px">
        <el-carousel-item v-for="item in show_images" :key="item">
          <img class="show-image" :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="missions" class="show">
      <div class="shell">
        <div class="statement-title">Missions</div>
        <div class="missions">
          <div class="mission">
            <img
              class="mission-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg"
            />
            <div>Always pay attention to and apply the latest technology</div>
          </div>
          <div class="mission">
            <img
              class="mission-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/multiple%20device.png"
            />
            <div>
              Be interested across all devices for a seamless experience
            </div>
          </div>
          <div class="mission">
            <img
              class="mission-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/empathy.jpg"
            />
            <div>Stay empathy, put users' concern at first</div>
          </div>
          <div class="mission">
            <img
              class="mission-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/nomi.png"
            />
            <div>Find personality, pour stories and emotions into product</div>
          </div>
        </div>
      </div>
    </div>
    <div id="background" class="show">
      <div class="shell">
        <div class="statement-title">Background</div>
        <el-timeline class="timeline">
          <el-timeline-item timestamp="now" placement="top">
            <el-card>
              <div class="time-item">
                <div class="time-intro">
                  After long-time consideration and practice, I decided to
                  transfer from a programmer to designer, which is to think
                  about the impact of technology on people, communities,
                  society, etc., I hoped to bring new ideas through my own
                  technical background
                </div>
              </div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2021" placement="top">
            <el-card>
              <div class="time-item">
                <div class="time-intro">
                  Engaged in coding and product design work in Internet
                  companies, my focus of work gradually shifted from technology
                  to management, design, and business.
                </div>
              </div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019" placement="top">
            <el-card>
              <div class="time-item">
                <div class="time-intro">
                  I majored in software engineering as an undergraudate student,
                  where I really got to know what was going on in this industry,
                  everything was changing everyday. New technologies and
                  products reforms the basic business mode of the society, these
                  strengthened my resove to catch this trend.
                </div>
              </div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2015" placement="top">
            <el-card>
              <div class="time-item">
                <div class="time-intro">
                  As a typical Chinese teenager, I tried to explore new world
                  from books, medias and internet despite that I was under the
                  stress of schoolwork, where I fell in love with history,
                  literature, music, games and art, and then cultivated the
                  habit of thinking about human and society
                </div>
              </div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      show_images: [
        'https://raw.githubusercontent.com/RayVec/images/main/ImageForArticle_17177(1).jpg',
        'https://raw.githubusercontent.com/RayVec/images/main/apple%20smart%20home.png',
        'https://raw.githubusercontent.com/RayVec/images/main/767E96D4-CF16-40D7-9FE4-5E866FE44020_1_201_a.jpeg',
        'https://raw.githubusercontent.com/RayVec/images/main/smart-city-cloud-computing-design-concept-transparent-globe-cityscape-clouds-digital-network-connections-technology-183139073%20(1).jpg'
      ]
    }
  },
  props: {},
  methods: {
    go(v) {
      if (v === 1) {
        document
          .getElementById('statement')
          .scrollIntoView({ behavior: 'smooth' })
      }
      if (v === 2) {
        document
          .getElementById('missions')
          .scrollIntoView({ behavior: 'smooth' })
      }
      if (v === 3) {
        document
          .getElementById('background')
          .scrollIntoView({ behavior: 'smooth' })
      }
    },
    openLinkedin() {
      window.open('https://www.linkedin.com/in/rayvec')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.time-intro {
  font-size: 20px;
  text-align: left;
}
.time-item {
  display: flex;
}
.timeline >>> .el-timeline-item__timestamp {
  font-size: 20px;
}
.timeline >>> .el-card {
  background-color: unset;
  border: unset;
  color: white;
}
.timeline {
  margin-top: 30px;
}
.mission-img {
  width: 250px;
  height: 250px;
  border-radius: 125px;
  margin-right: 20px;
}
.missions {
  display: flex;
  flex-wrap: wrap;
}
.mission {
  margin-top: 30px;
  width: 50%;
  display: flex;
  font-size: 28px;
  text-align: left;
  align-items: center;
}
.statement-content {
  text-align: left;
}
.statement-title {
  font-size: 28px;
}
.navigation-label {
  font-size: 18px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.myName {
  font-size: 28px;
  font-weight: bold;
}
.navigation:hover {
  background-color: rgb(234, 51, 34);
  color: white;
  cursor: pointer;
}
.navigation {
  color: black;
  margin-top: 10px;
  border: 4px solid black;
  box-shadow: 0 0 15px black;
  display: flex;
  overflow: hidden;
  border-radius: 8px;
  width: 100px;
  flex-direction: column;
  /* background-color: rgb(234, 51, 34); */
  background-color: white;
}
.avatar {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: black;
  font-size: 26px;
  font-weight: bold;
}
.avatar-img {
  width: 100px;
  /* height: 70px; */
  object-fit: fill;
}
.myinfo {
  position: fixed;
  left: 0;
  width: 250px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  z-index: 5;
  justify-content: center;
}
.show-image {
  width: 100%;
  height: 100%;
  object-fit: cover;

  filter: brightness(0.4);
}
.show {
  position: relative;
  /* height: 600px; */
  width: 100%;
  height: max-content;
}
.statement {
  position: absolute;
  z-index: 3;
  height: 600px;
}
.shell {
  padding: 50px 0;
  padding-left: 250px;
  color: white;
  font-size: 80px;
  font-weight: bold;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.shell-statement {
  height: 100%;
  padding-left: 250px;
  color: white;
  font-size: 80px;
  font-weight: bold;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.main {
  background-color: #212121;
  width: 100%;
  height: 100vh;
  overflow: auto;
}
</style>
