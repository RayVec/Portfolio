<template>
  <div class="home">
    <div class="block">
      <div class="about-start">
        <img
          class="img-me"
          src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/fun/poster.png"
        />
        <div class="about-start-content">
          <div>
            As a lifelong learner 🧑‍🎓 and designer 🖌, I never stop my step to
            absorb ideas from different kinds of fields. On my journey of study
            and work, I am excited and proud to harvest so many different,
            weird, interesting, and meaningful experiences, and I can’t wait to
            share them with you 😝.
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="top-bar work-length">
        <div class="title">🖥 Product/UX design & development</div>
        <div class="bar-divide"></div>
      </div>
      <div class="projects">
        <div class="project">
          <div @click="openEscapeRoom" class="project-inner">
            <div class="activity-look">
              Take a look ~
              <i class="el-icon-caret-right" style="color: #d90404"></i>
            </div>
            <div class="activity-mask"></div>
            <div class="project-top">
              <el-carousel>
                <el-carousel-item v-for="item in 3" :key="item">
                  <img
                    class="project-img"
                    :src="
                      'https://raw.githubusercontent.com/RayVec/images/main/portfolio/fun/vr/present' +
                      item +
                      '.png'
                    "
                  />
                </el-carousel-item>
              </el-carousel>
            </div>

            <div class="project-bottom">
              <div>
                <div class="project-title">
                  Escape-Room: My first team-work VR project
                </div>
                <div class="project-content">
                  Instructed by Prof Jakki Bailey, I learned research and
                  development methods related to virtual environments , and
                  completed an impressive VR game about escape room experience
                  with my teammates.
                </div>
              </div>
              <div class="project-labels">
                <div class="activity-label">VR</div>
                <div class="activity-label">Game</div>

                <div class="activity-label">HCI</div>
              </div>
            </div>
          </div>
        </div>
        <div class="project">
          <div @click="openSwipe" class="project-inner">
            <div class="activity-look">
              Take a look ~
              <i class="el-icon-caret-right" style="color: #d90404"></i>
            </div>
            <div class="activity-mask"></div>
            <div class="project-top">
              <img
                class="project-img"
                :src="'https://raw.githubusercontent.com/RayVec/images/main/portfolio/fun/swipe.png'"
              />
            </div>

            <div class="project-bottom">
              <div>
                <div class="project-title">SWIPE</div>
                <div class="project-content">
                  Control your Android directly and freely with just one swipe
                  on your screen’s edge! It is an individual project designed by
                  me to improve the interaction efficiency of OS system.
                </div>
              </div>
              <div class="project-labels">
                <div class="activity-label">Android</div>
                <div class="activity-label">Interaction</div>

                <div class="activity-label">Gesture</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="top-bar work-length">
        <div class="title">🧩 Activities</div>
        <div class="bar-divide"></div>
      </div>
      <div class="activities">
        <div class="activity">
          <div @click="openPower" class="activity-inner">
            <div class="activity-look">
              Take a look ~
              <i class="el-icon-caret-right" style="color: #d90404"></i>
            </div>
            <div class="activity-mask"></div>
            <img
              class="activity-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/fun/visual-design-speech.png"
            />
            <div class="activity-right">
              <div>
                <div class="activity-title">
                  TED Talk: The power of connection
                </div>
                <div class="activity-content">
                  I was fortunate to deliver a TED talk in my Visual Design
                  class to share my thinking and vision about new design
                  perspectives in the era of connection of devices, it was
                  really a precious memory for me.
                </div>
              </div>
              <div class="activity-labels">
                <div class="activity-label">Speech</div>
                <div class="activity-label">Digital ecology</div>
                <div class="activity-label">IoT</div>
                <div class="activity-label">Visual design</div>
                <div class="activity-label">Cloud computing</div>
                <div class="activity-label">HCI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="top-bar work-length">
        <div class="title">✏️ Creative design thinking</div>
        <div class="bar-divide"></div>
      </div>
      <div class="projects">
        <div class="project">
          <div @click="openSDCT" class="project-inner">
            <div class="activity-look">
              Take a look ~
              <i class="el-icon-caret-right" style="color: #d90404"></i>
            </div>
            <div class="activity-mask"></div>
            <img
              class="project-img"
              :src="'https://raw.githubusercontent.com/RayVec/images/main/portfolio/fun/sdct.png'"
            />

            <div class="project-bottom">
              <div>
                <div class="project-title">Defining SDCT's Identity</div>
                <div class="project-content">
                  In my Design Thinking class, my team conducted a creative way
                  using projector to help SDCT(our college) staff increase a
                  sense of identity, this try breaks the boundry between digital
                  design and physical design.
                </div>
              </div>
              <div class="project-labels">
                <div class="activity-label">Physical design</div>
                <div class="activity-label">Public space</div>
                <div class="activity-label">Environment design</div>
              </div>
            </div>
          </div>
        </div>
        <div class="project">
          <div @click="openRelaxingJourney" class="project-inner">
            <div class="activity-look">
              Take a look ~
              <i class="el-icon-caret-right" style="color: #d90404"></i>
            </div>
            <div class="activity-mask"></div>
            <img
              class="project-img"
              :src="'https://raw.githubusercontent.com/RayVec/images/main/portfolio/fun/relaxing-journey.png'"
            />

            <div class="project-bottom">
              <div>
                <div class="project-title">Relaxing journey</div>
                <div class="project-content">
                  Developed a mobile website to introduce and guide users to
                  appreciate the view around my residence, this project is
                  inspired by my instructer Ann Armstrong(http://ann-made.org)
                  of Design Thinking class
                </div>
              </div>
              <div class="project-labels">
                <div class="activity-label">View around</div>
                <div class="activity-label">Online to Offline</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import indexVue from "./index.vue";
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    // this.setScrollEvent();
    setTimeout(() => {
      this.show = true;
    }, 200);
  },
  methods: {
    openRelaxingJourney() {
      window.open("http://rayvec.net/#/site/index");
    },
    openSDCT() {
      window.open(
        "https://drive.google.com/file/d/1cBXa0CRsA0BYCgdifunuDHp8xgAKsREz/view?usp=sharing"
      );
    },
    openSwipe() {
      window.open(
        "https://drive.google.com/file/d/1-jE3Gsx89YpNXncXpQsvQX-qD8ZZ469x/view?usp=sharing"
      );
    },
    openEscapeRoom() {
      window.open(
        "https://drive.google.com/file/d/1pY3S0YI7xnS-0zBUguciyaY4xG_7_8t4/view?usp=share_link"
      );
    },
    openPower() {
      // this.$router.push("/free-trial");
      // let main = document.getElementsByClassName("main")[0];
      // main.scrollTop = 0;
      window.open(
        "https://drive.google.com/file/d/1AwC_Bgm_QxdbxWOCea5V5DyZgsbzwngI/view?usp=sharing"
      );
    },
  },
};
</script>

<style scoped>
a,
a:link,
a:visited,
a:hover,
a:active {
  color: inherit;
}
/* project */
.projects >>> .el-carousel__container {
  width: 100%;
  height: unset;
  aspect-ratio: 16/9;
}
.projects >>> .el-carousel__item {
}
.projects {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 20px;
  color: #222;
  padding: 20px 0 0 0;
  align-items: stretch;
}
.project {
  width: 48%;
}
.project-inner:hover .activity-mask {
  display: unset;
}
.project-inner:hover .activity-look {
  display: unset;
}
.project-inner {
  position: relative;
  cursor: pointer;
  height: 100%;
  margin: 2px;
  border: #dedede 1px solid;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px rgb(224, 224, 224);
}
.project-img {
  width: 100%;
  aspect-ratio: 16/9;
}
.project-title {
  font-size: 28px;
  font-weight: bold;
}
.project-bottom {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 1vw;
}
.project-content {
  font-size: 20px;
  margin-top: 0.5vw;
  color: rgb(51, 51, 51);
}
.project-labels {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5vw;
}

/* activity */
.activity-look {
  display: none;
  position: absolute;
  z-index: 999;
  color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: max(3vw, 24px);
}
.activity-mask {
  display: none;
  position: absolute;
  z-index: 998;
  width: 100%;
  height: 100%;
  opacity: 65%;
  background-color: black;
}
.activity-labels {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2vw;
}
.activity-label {
  padding: 4px 16px;
  border-radius: 8px;
  background-color: #466a52;
  width: fit-content;
  color: white;
  font-size: 18px;
  margin-right: 16px;
  margin-bottom: 16px;
}
.activity-content {
  font-size: 20px;
  margin-top: 2vw;
  color: rgb(51, 51, 51);
}
.activity-img {
  width: 50%;
}
.activity-inner:hover .activity-mask {
  display: unset;
}
.activity-inner:hover .activity-look {
  display: unset;
}
.activity-inner {
  position: relative;
  cursor: pointer;
  margin: 2px;
  border: #dedede 1px solid;
  display: flex;
  align-items: stretch;
  box-shadow: 0 0 8px rgb(224, 224, 224);
}
.activity-title {
  font-size: 28px;
  font-weight: bold;
}
.activity-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1vw;
}
.activity {
  width: 100%;
}
.activities {
  display: flex;
  font-size: 20px;
  color: #222;
  padding: 20px 0 0 0;
}
.img-shadow {
  position: absolute;
  left: 20px;
  top: 20px;
  height: 300px;
  width: 200px;
  background-color: #222;
  z-index: -1;
}

.about-start-content {
  font-size: 20px;
  color: #222;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 10px;
  /* flex-basis: 10px; */
}
.about-start {
  display: flex;
  /* align-items: stretch; */
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.img-me {
  width: 100%;
}

.bar-divide {
  flex: 1;
  margin-left: 3vw;
  height: 2px;
  background-color: #222;
}
.top-bar {
  display: flex;
  align-items: center;
}

.fade-enter-active {
  transition: all 0.5s ease-in-out;
  transform-origin: top bottom;
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(0px, 0px);
}

.work-intro {
  font-size: 1.2vw;
  font-weight: 400;
  /* color: #626567; */
  color: #222;
}
.work-title {
  width: fit-content;
  font-size: 4vw;
  margin-bottom: 1.5vw;
  font-weight: 600;
  color: #222;
  /* transition: all 0.2s ease-in-out; */
}
.work-img {
  width: 50vw;
  aspect-ratio: 16/16;
  transition: all 0.8s ease-in-out;
}
@keyframes scaleLong {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  100% {
    transform: scaleX(1);
    transform-origin: left;
  }
}

/* .work:hover .work-intro {
  animation: word-long 0.5s ease-in-out;
}
.work:hover .work-view {
  animation: word-long 0.5s ease-in-out;
}
.work:hover .work-title {
  animation: word-long 0.5s ease-in-out;
}
.work:hover .bar-black {
  background-color: #d90404;
  animation: scaleLong 0.5s ease-in-out;
}
*/
.work-right:hover .work-img {
  animation: scaleBig 1s ease-in-out;
  transform: scale(1.11);
}
@keyframes word-long {
  0% {
    background: #222;
    color: #222;
    transform: scaleX(0);
    transform-origin: left;
  }
  80% {
    background: #222;
    color: #222;
    transform: scaleX(1.3);
    transform-origin: left;
  }
  100% {
    background: #222;
    color: #222;
    transform: scaleX(1.3);
    transform-origin: left;
  }
}

@keyframes scaleBig {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1.11);
  }
  /* 100% {
    transform: scale(1);
  } */
}
.work-right {
  overflow: hidden;
  cursor: pointer;
}
.work-left {
  width: 24%;
  opacity: 0;
  visibility: hidden;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.work {
  width: 100%;
  padding: 0 0 20vh 0;
  position: relative;
  display: flex;
  justify-content: flex-end;
}

.passion-item {
  margin-bottom: 2vw;
  text-align: center;
  margin-right: 1vw;
  font-size: 1.2vw;
  color: #626567;
}
.passion {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 10vw;
}
.circle {
  width: 6vw;
  height: 6vw;
  padding: 1vw;
  border: 2px solid #222;
  background-color: #ecf0f1;
  border-radius: 2vw;
}
.texture {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: -80px;
  left: 2vw;
  font-weight: bold;
  color: #f7f9f9;
  font-size: 8vw;
  letter-spacing: 5.1vw;
  z-index: -1;
}
.intro {
  font-size: 1.5vw;
  color: #626567;
}
.bar-black {
  width: 100%;
  height: 5px;
  background-color: #222;
  margin-bottom: 4vw;
  /* transition: all 0.5s ease-in-out; */
}
.bar {
  width: 10vw;
  height: 5px;
  background-color: #d90404;
  margin-top: 1.2vw;
}
.left {
  width: 50%;
}
.know-more::after {
  content: "";
  position: absolute;
  z-index: 2;
  /* width: 100%; */
  transform: scaleX(0);
  height: 2px;
  bottom: -1px;
  left: 0;
  background-color: #d90404;
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}
.know-more:hover {
  border-bottom: 1px solid unset;
}
.know-more:hover::after {
  width: 100%;
  transform: scaleX(1);
  transform-origin: bottom left;
}
.know-more {
  position: relative;
  width: fit-content;
  display: flex;
  border-bottom: 1px solid #222;
  margin-top: 1vw;
  cursor: pointer;
}

.highlight {
  color: #d90404;
}
.title {
  font-size: 32px;
  color: #222;
  font-weight: bold;
  font-weight: bolder;
}
.block {
  padding: 20px 0;
}
.home {
  width: max(896px, 65%);
  margin: 0 auto;
  overflow: hidden;
}
@media screen and (max-width: 768px) {
  .home {
    width: 90%;
  }
  .about-start {
    display: flex;
    flex-direction: column;
  }
  .about-start-content {
    width: 100%;
  }
  .activity-inner {
    flex-direction: column;
  }
  .activity-img {
    width: 100%;
  }
  .activity-title {
    font-size: 24px;
  }
  .activity-content {
    font-size: 18px;
  }
  .activity-label {
    font-size: 16px;
  }
  .project-inner {
    flex-direction: column;
  }
  .project-img {
    width: 100%;
  }
  .project-title {
    font-size: 24px;
  }
  .project-content {
    font-size: 18px;
  }
  .project-label {
    font-size: 16px;
  }
}
</style>
