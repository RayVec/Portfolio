<template>
  <div class="home">
    <div class="block">
      <div class="about-start">
        <div class="img-me-zone">
          <img
            class="img-me"
            src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/about-me/me2.png"
          />
          <div class="img-shadow"></div>
        </div>
        <div class="about-start-content">
          <div>
            Hi, there! I am Rui Wei, a multidisciplinary designer with full of
            passion and curiosity.
          </div>
          <div>
            My belief is that through design we can dig out the potential of
            technology to serve people better, creating comfortable🚿,
            imaginative🚀 and efficient⚙️ experiences that enhance the happiness
            of human society.
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="top-bar work-length">
        <div class="title">Experience</div>
        <div class="bar-divide"></div>
      </div>
      <div class="experience">
        Through active experimentation, I discovered and solidified my interest
        and position in the sea of technology to become a courageous and
        innovative user-centered designer. After that, I was fortunate to have
        work experiences👨‍💻 related to product design at
        <el-popover placement="top-start" trigger="hover">
          <div class="company-popover">
            <img
              class="company-popover-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/about-me/meituan.png"
            />
            <div class="company-popover-right">
              <div class="company-popover-position">Product design intern</div>
              <div class="company-popover-time">06/2018 - 09/2018</div>
            </div>
          </div>
          <a
            slot="reference"
            href="https://about.meituan.com/en"
            target="_blank"
            >Meituan</a
          > </el-popover
        >,
        <el-popover placement="top-start" trigger="hover">
          <div class="company-popover">
            <img
              class="company-popover-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/about-me/keep.png"
            />
            <div class="company-popover-right">
              <div class="company-popover-position">Product design intern</div>
              <div class="company-popover-time">10/2018 - 02/2019</div>
            </div>
          </div>
          <a slot="reference" href="https://www.gotokeep.com/" target="_blank"
            >Keep</a
          >
        </el-popover>
        and
        <el-popover placement="top-start" trigger="hover">
          <div class="company-popover">
            <img
              class="company-popover-img"
              src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/about-me/huawei.png"
            />
            <div class="company-popover-right">
              <div class="company-popover-position">UX engineer</div>
              <div class="company-popover-time">08/2019 - 08/2021</div>
            </div>
          </div>
          <a slot="reference" href="https://www.huawei.com/us/" target="_blank"
            >Huawei</a
          > </el-popover
        >, and now I choose to come across the ocean to chase my master’s
        degree👨‍🎓 in the US to meet new challenges.
      </div>

      <!-- <div class="intro" style="margin-top: 2vw; margin-bottom: 3vw">
        With strong curiosity and experience about technology, bussiness, media,
        game, and sociology, I am a person who walks between technology
      </div> -->
    </div>
    <div class="block">
      <div class="top-bar work-length">
        <div class="title">Knowledge</div>
        <div class="bar-divide"></div>
      </div>
      <div class="experience">
        The knowledge I have accumulated through my work and studies is mainly
        in the following areas: <br />
        💼 enterprise system<br />
        🛒 eCommerce<br />
        👭 online community<br />
        🏦 financial product
      </div>
    </div>
    <div class="block">
      <div class="top-bar work-length">
        <div class="title">Interests</div>
        <div class="bar-divide"></div>
      </div>
      <div class="experience">
        Of course out of my design work, I can draw inspiration from the
        following interests:<br />
        🎬 Watch fantastic films, TV, and anime works with impressive visual
        effects and moving stories<br />
        📱 Learn about the latest electronic device and their interactions<br />
        🎮 Play console games, especially from Japan<br />
        🍳 Cook all kinds of Chinese food<br />
        🎸 Listen to all kinds of music, sometimes may be in deep craziness
        <br />
        🗞️ Read social and business reviews, love to think of the operation
        logic behind the world <br />
        🖱️ Watch e-sports games, which have been a new form of sports <br />
        📒 Meet fun people and stories
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
    setWorksScroll() {
      this.setWorkScroll(0);
      this.setWorkScroll(1);
    },
    setWorkScroll(index) {
      let main = document.getElementsByClassName("main")[0];

      console.log("-----------------begin calculate scroll---------------");
      const element = document.getElementsByClassName("work")[index];

      const elementOffsetTop = element.getBoundingClientRect().top;
      console.log("elementoffsettop", elementOffsetTop);
      const windowHeight = document.documentElement.clientHeight;
      const elementHeight = element.clientHeight - windowHeight / 5;
      console.log("elementheight", elementHeight);
      console.log("windowHeight", windowHeight);

      const windowScrollTop = main.scrollTop;
      console.log("windowScrollTop", windowScrollTop);
      let judge1 = elementOffsetTop <= (3 * windowHeight) / 5;
      let judge2 = elementOffsetTop >= (3 * windowHeight) / 5 - elementHeight;
      console.log(judge1);
      console.log(judge2);
      if (judge1 && judge2) {
        console.log("元素在可视区域出现");
        let visible_true =
          document.getElementsByClassName("work-profile")[index].style
            .visibility === "visible";
        console.log("visibility", visible_true);
        if (visible_true === true) {
          console.log("execute visible true");
        } else {
          document.getElementsByClassName("work-profile")[
            index
          ].style.visibility = "visible";
          document.getElementsByClassName("work-profile")[index].style.display =
            "flex";
          let animated_styles = [
            "work-sign",
            "work-title",
            "work-intro",
            "work-view",
            "work-features",
          ];
          console.log(animated_styles);
          for (let style of animated_styles) {
            console.log(style);
            document.getElementsByClassName(style)[index].animate(
              [
                {
                  background: "#222",
                  color: "#222",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                },
                {
                  background: "#222",
                  color: "#222",
                  transform: "scaleX(1)",
                  transformOrigin: "left",
                  offset: 0.6,
                },
                {
                  background: "#222",
                  color: "#222",
                  transform: "scaleX(1)",
                  transformOrigin: "left",
                },
              ],
              500
            );
          }
        }
      } else {
        console.log("元素在可视区域消失");
        document.getElementsByClassName("work-profile")[
          index
        ].style.visibility = "hidden";
        document.getElementsByClassName("work-profile")[index].style.display =
          "none";
      }
      console.log("-----------------end calculate scroll---------------");
    },
    setScrollEvent() {
      console.log("setscrollevent");
      let main = document.getElementsByClassName("main")[0];
      main.addEventListener("scroll", this.setWorksScroll);
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
/* popover */

.company-popover {
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
}
.company-popover-img {
  width: 60px;
}
.company-popover-right {
  margin-left: 16px;
}
.company-popover-position {
  font-size: 18px;
  font-weight: bold;
}
.company-popover-time {
  font-size: 16px;
  color: #a3aaaf;
  font-weight: 100;
  margin-top: 8px;
}

.experience {
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
.img-me-zone {
  position: relative;
  height: 300px;
}
.about-start-content {
  width: 70%;
  font-size: 20px;
  color: #222;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* flex-basis: 10px; */
}
.about-start {
  padding: 2vw 0;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}
.img-me {
  height: 300px;
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
  .img-me-zone {
    height: 90vw;
    margin-bottom: 30px;
    text-align: center;
  }
  .img-me {
    height: 90vw;
    margin-left: -20px;
  }
  .img-shadow {
    position: absolute;
    right: calc(15vw - 20px);
    left: unset;
    top: 20px;
    height: 90vw;
    width: 60vw;
    background-color: #222;
    z-index: -1;
  }
}
</style>
