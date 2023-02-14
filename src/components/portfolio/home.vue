<template>
  <div class="home">
    <div class="about">
      <div class="row">
        <div class="left animate__animated animate__fadeInUp">
          <div class="title">
            I am <span class="highlight">R</span>ui Wei, a UX/Product designer
            &#128515;
          </div>
          <div class="bar"></div>
          <div class="intro">
            I am a problem solver 🧐, a data informer 🔍, a business analyst 📈,
            a restricted artist 🎨, a systematical architect 🪜, and a good
            listener 👂, I hope to help everyone improve efficiency and lead
            delightful life through the rational use of IT.
          </div>
          <div class="intro">
            Previously - product designer experiences at
            <el-popover placement="top-start" trigger="hover">
              <div class="company-popover">
                <img
                  class="company-popover-img"
                  src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/about-me/meituan.png"
                />
                <div class="company-popover-right">
                  <div class="company-popover-position">
                    Product design intern
                  </div>
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
                  <div class="company-popover-position">
                    Product design intern
                  </div>
                  <div class="company-popover-time">10/2018 - 02/2019</div>
                </div>
              </div>
              <a
                slot="reference"
                href="https://www.gotokeep.com/"
                target="_blank"
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
              <a
                slot="reference"
                href="https://www.huawei.com/us/"
                target="_blank"
                >Huawei</a
              >
            </el-popover>
          </div>
          <div @click="goAbout" class="intro know-more">Know more about me</div>
        </div>
        <div class="right">
          <div class="intro animate__animated animate__fadeInUp">
            <div v-if="false">
              With strong curiosity 🧐 and experience in technology, business,
              design, media, and sociology, I am a person who stays open and
              transfers from engineer to designer🎨, hoping to help everyone
              lead happier life through the rational use of IT.
            </div>
            <div class="flip about-right">
              <div class="flip-front">
                <img
                  class="about-img"
                  src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/homepage-poster.png"
                />
              </div>
              <div class="flip-back">
                <div class="passion-crest">
                  <div>
                    <div class="title">My design passion 🔥</div>
                    <div class="intro">
                      With a background in software engineering and a passion
                      for design, I strive to combine the following knowledge to
                      create exciting and efficient experiences.
                    </div>
                  </div>
                  <div>
                    <div class="passion">
                      <div class="passion-item">
                        <img
                          class="circle"
                          src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/technology.png"
                        />
                        <div>Technology</div>
                      </div>
                      <div class="passion-item">
                        <img
                          class="circle"
                          src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/psychology.png"
                        />
                        <div>Empathy</div>
                      </div>
                      <div class="passion-item">
                        <img
                          class="circle"
                          src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/business1.png"
                        />
                        <div>Business</div>
                      </div>
                      <div class="passion-item">
                        <img
                          class="circle"
                          src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/global.png"
                        />
                        <div>Culture</div>
                      </div>
                      <div class="passion-item">
                        <img
                          class="circle"
                          src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/emotion.png"
                        />
                        <div>Emotion</div>
                      </div>
                      <div class="passion-item">
                        <img
                          class="circle"
                          src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/art.png"
                        />
                        <div>Art</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="small-screen">
        <div class="row" style="margin-top: 3vw; position: relative">
          <div class="right animate__animated animate__fadeInUp">
            <div class="title">My design passion 🔥</div>
            <div class="bar"></div>
            <div class="intro">
              With a background in software engineering 👨‍💻 and a passion for
              design 🎨 , I strive to combine technology, empathy, emotion,
              culture, art, and business to create exciting and efficient
              experiences.
            </div>
          </div>
          <div class="left animate__animated animate__fadeInLeftBig">
            <div class="passion">
              <div class="passion-item">
                <img
                  class="circle"
                  src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/technology.png"
                />
                <div>Technology</div>
              </div>
              <div class="passion-item">
                <img
                  class="circle"
                  src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/psychology.png"
                />
                <div>Empathy</div>
              </div>
              <div class="passion-item">
                <img
                  class="circle"
                  src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/business1.png"
                />
                <div>Business</div>
              </div>
              <div class="passion-item">
                <img
                  class="circle"
                  src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/global.png"
                />
                <div>Culture</div>
              </div>
              <div class="passion-item">
                <img
                  class="circle"
                  src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/emotion.png"
                />
                <div>Emotion</div>
              </div>
              <div class="passion-item">
                <img
                  class="circle"
                  src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/art.png"
                />
                <div>Art</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="works">
      <div class="top-bar work-length">
        <div class="title">Works</div>
        <div class="bar-divide"></div>
      </div>
      <div class="works-zone">
        <div class="work-stick">
          <div class="work-profile">
            <div class="work-sign">
              <div>01</div>
              <!-- <div class="bar-black"></div> -->
            </div>
            <div class="work-middle">
              <div class="work-title">Keep Guard</div>

              <div class="work-intro">
                Designed a community management system that supports the content
                health of Keep community service, which includes the main
                operating web system and mobile app’s portals like complaints
                and official messages.
              </div>
              <div @click="openKeep" class="work-view">View case study</div>
            </div>
            <div class="work-features">
              Web&Mobile Design, Enterprise product, Community management
            </div>
          </div>
          <div class="work-profile">
            <div class="work-sign">
              <div>02</div>
              <!-- <div class="bar-black"></div> -->
            </div>
            <div class="work-middle">
              <div class="work-title">Meituan Free Trial</div>

              <div class="work-intro">
                Designed the new version of Meituan Free Trial activity to
                provide more value to customers and merchants, we aimed to
                appeal to more customers to have a try and bring merchants more
                high-quality new customers, which included Meituan App and
                Merchant platform.
              </div>
              <div @click="openFreetrial" class="work-view">
                View case study
              </div>
            </div>
            <div class="work-features">
              Web/Mobile Design, E-Commerce, Life Services
            </div>
          </div>
          <div class="work-profile">
            <div class="work-sign">
              <div>03</div>
              <!-- <div class="bar-black"></div> -->
            </div>
            <div class="work-middle">
              <div class="work-title">Heimdall</div>

              <div class="work-intro">
                Designed and developed a digital monitoring big screen of
                Huawei's manufacturing test, this system was deployed on the big
                screen of meeting rooms and TVs of factories, which was designed
                for managers and team leaders to get instant information about
                manufacturing tests and make efficient decisions.
              </div>
              <div @click="openHeimdall" class="work-view">View case study</div>
            </div>
            <div class="work-features">
              Web/Big screen Design, Enterprise product, Manufacturing IT system
            </div>
          </div>
        </div>
        <div class="work-list">
          <div class="work-blank"></div>

          <div class="work">
            <div id="work1" class="work-right">
              <img
                @click="openKeep"
                class="work-img"
                src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/projects/Keep-Shield.png"
              />
            </div>
            <div class="small-screen">
              <div class="work-profile">
                <div class="work-sign">
                  <div>01</div>
                  <!-- <div class="bar-black"></div> -->
                </div>
                <div class="work-middle">
                  <div class="work-title">Keep Guard</div>

                  <div class="work-intro">
                    Designed a community management system that supports the
                    content health of Keep community service, which includes the
                    main operating web system and mobile app’s portals like
                    complaint and official messages.
                  </div>
                  <div @click="openKeep" class="work-view">View case study</div>
                </div>
                <div class="work-features">
                  Web&Mobile Design, Enterprise product, Community management
                </div>
              </div>
            </div>
          </div>
          <div class="work">
            <div class="work-right">
              <img
                @click="openFreetrial"
                class="work-img"
                src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/freetrial/poster.png"
              />
            </div>
            <div class="small-screen">
              <div class="work-profile">
                <div class="work-sign">
                  <div>02</div>
                  <!-- <div class="bar-black"></div> -->
                </div>
                <div class="work-middle">
                  <div class="work-title">Heimdall</div>

                  <div class="work-intro">
                    Designed the new version of Meituan Free Trial activity to
                    provide more value to customers and merchants, we aimed to
                    appeal to more customers to have a try and bring merchants
                    more high-quality new customers, which included Meituan App
                    and Merchant platform.
                  </div>
                  <div @click="openFreetrial" class="work-view">
                    View case study
                  </div>
                </div>
                <div class="work-features">
                  Web/Mobile Design, E-Commerce, Life Services
                </div>
              </div>
            </div>
          </div>
          <div class="work">
            <div class="work-right">
              <img
                @click="openHeimdall"
                class="work-img"
                src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/heimdall/cover-img.png"
              />
            </div>
            <div class="small-screen">
              <div class="work-profile">
                <div class="work-sign">
                  <div>03</div>
                  <!-- <div class="bar-black"></div> -->
                </div>
                <div class="work-middle">
                  <div class="work-title">Heimdall</div>

                  <div class="work-intro">
                    Designed and developed a digital monitoring big screen of
                    Huawei's manufacturing test, this system was deployed on big
                    screen of meeting room and TVs of factories, which was
                    designed for managers and team leaders to get instant
                    information about manufacturing test and make efficient
                    decision
                  </div>
                  <div @click="openHeimdall" class="work-view">
                    View case study
                  </div>
                </div>
                <div class="work-features">
                  Web/Big screen Design, Enterprise product, Manufacturing IT
                  system
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="intro" style="margin-top: 2vw; margin-bottom: 3vw">
        With strong curiosity and experience about technology, bussiness, media,
        game, and sociology, I am a person who walks between technology
      </div> -->
    </div>
    <div class="contact">
      <div class="contact-inner">
        <!-- <div class="top-bar">
          <div class="title">Contact me</div>
          <div class="bar-divide"></div>
        </div> -->
        <div class="contact-left">
          <div class="contact-content">
            Let's work together <span style="color: #d90404">!</span>
          </div>

          <div class="contact-intro" style="flex: 1">
            I am available for internship about UX/Product designer! And I am
            always open to share my own experience and takeaways, please feel
            free to contact me.
          </div>
        </div>
        <div class="contact-list">
          <a href="https://www.linkedin.com/in/rayvec/" target="_blank">
            <div class="contact-item">
              <img
                class="contact-img"
                src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/linkedin.png"
              />
            </div>
          </a>
          <a href="mailto:rayvec@utexas.edu" target="_blank">
            <div class="contact-item">
              <img
                class="contact-img"
                src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/mail.png"
              />
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1Bd8oVek-_P_AOzfBusNin-V7OL1m90eU/view?usp=share_link"
            target="_blank"
          >
            <div class="contact-item">
              <img
                class="contact-img"
                src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/resume.png"
              />
            </div>
          </a>
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
    this.setScrollEvent();
    setTimeout(() => {
      this.show = true;
    }, 200);
  },
  beforeDestroy() {
    let main = document.getElementsByClassName("main")[0];
    main.removeEventListener("scroll", this.setWorksScroll);
  },
  methods: {
    openFreetrial() {
      this.$router.push("/free-trial");
      let main = document.getElementsByClassName("main")[0];
      main.scrollTop = 0;
    },
    openHeimdall() {
      this.$router.push("/heimdall");
      let main = document.getElementsByClassName("main")[0];
      main.scrollTop = 0;
    },
    openKeep() {
      this.$router.push("/keep-guard");
      let main = document.getElementsByClassName("main")[0];
      main.scrollTop = 0;
    },
    goAbout() {
      this.$router.push("/about");
      let main = document.getElementsByClassName("main")[0];
      main.scrollTop = 0;
    },
    setWorksScroll() {
      this.setWorkScroll(0);
      this.setWorkScroll(1);
      this.setWorkScroll(2);
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
/* flip */
.flip-back {
  backface-visibility: hidden;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
  transform: rotateY(180deg);
}
.flip-front {
  backface-visibility: hidden;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  transition: transform 0.5s ease-in-out;
  overflow: hidden;
  transform: rotateY(0deg);
}
.flip {
  position: relative;
  perspective: 1000px;
}

.flip:hover .flip-back {
  transform: rotateY(0deg);
}

.flip:hover .flip-front {
  transform: rotateY(180deg);
}
/* popover */
a,
a:link,
a:visited,
a:hover,
a:active {
  color: inherit;
}
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
/* about */
.about-right {
  width: 100%;
  aspect-ratio: 1/1;
}
.about-img {
  width: 100%;
}
.contact-left {
  width: 60vw;
}
.contact-intro {
  color: #fff;
  font-size: 1.5vw;
}
.work-middle {
  padding-bottom: 5vh;
}
.work-features {
  font-size: max(20px, 1.2vw);
  color: #222;
  font-weight: 600;
}
.work-profile {
  display: none;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
}
.works-zone {
  display: flex;
}
.work-stick {
  z-index: 1;
  position: sticky;
  pointer-events: auto;
  width: 40vw;
  height: 90vh;
  left: 5vw;
  top: 67px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.work-blank {
  height: 30vh;
  width: 100%;
}
.work-length {
  width: 90vw;
  margin: 0 auto;
}
.work-sign {
  width: min-content;
  font-size: max(24px, 2vw);
  font-weight: 900;
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
.work-list {
  flex: 1;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fade-enter-active {
  transition: all 0.5s ease-in-out;
  transform-origin: top bottom;
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(0px, 0px);
}
.work-view::after {
  content: "";
  position: absolute;
  /* width: 100%; */
  transform: scaleX(0);
  height: 2px;
  bottom: -1px;
  left: 0;
  background-color: #d90404;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.work-view:hover::after {
  width: 100%;
  transform: scaleX(1);
  transform-origin: bottom left;
}
.work-view {
  position: relative;
  margin-top: 3vw;
  font-size: max(20px, 1.2vw);
  /* color: #626567; */
  color: black;
  width: fit-content;
  border-bottom: 1px solid #222;
  cursor: pointer;
}

.contact-content {
  text-align: start;
  font-size: 5vw;
  font-weight: 600;
  padding-bottom: 3vw;
  color: #fff;
}

.contact-img {
  width: 2vw;
  height: 2vw;
  transition: all 0.3s ease-in-out;
}
.contact-item:hover {
  border: 3px solid #d90404;
  box-shadow: 0 0 10px rgba(34, 34, 34, 0.298);
}
.contact-item:hover .contact-img {
  transform: scale(1.15);
}
.contact-item {
  width: 2vw;
  height: 2vw;
  display: flex;
  padding: 1vw;
  border-radius: 2.5vw;
  border: 3px solid #fff;
  cursor: pointer;
}
.contact-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 3vw; */
  /* width: 40%; */
}
.contact-inner {
  width: 90vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: stretch;
}
.contact {
  padding: 6vw 0;
  border-bottom: 2px solid #222;
  width: 100vw;
  margin: 0 auto;
  background-color: #121212;
}
.work-intro {
  font-size: max(20px, 1.2vw);
  font-weight: 400;
  /* color: #626567; */
  color: #222;
}
.work-title {
  width: fit-content;
  font-size: max(32px, 3.6vw);
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
.works {
  padding: 0vw 0 1vw 0;
}
/* passion */
.passion-crest {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 0 15%;
  height: 100%;
  border: 1px gray;
  box-shadow: 0 0 16px gray;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.passion-item {
  text-align: center;
  margin: 0.5vw;
  font-size: 1.2vw;
  color: #626567;
}
.passion {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.circle {
  width: 4vw;
  height: 4vw;
  padding: 1vw;
  border: 2px solid #222;
  background-color: #ecf0f1;
  border-radius: 1vw;
}
/* .texture {
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
} */
.intro {
  font-size: max(18px, 1.2vw);
  margin-bottom: 1.2vw;
  color: #626567;
  color: black;
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
  margin-bottom: 1.2vw;
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
  cursor: pointer;
}
.right {
  width: 50%;
}
.highlight {
  color: #d90404;
}
.title {
  font-size: max(32px, 2.8vw);
  color: #222;
  font-weight: bold;
  font-weight: bolder;
}
.row {
  display: flex;
  align-items: center;
}
.small-screen {
  display: none;
}
.large-screen {
  display: unset;
}
@media screen and (max-width: 768px) {
  .row {
    display: flex;
    flex-direction: column;
    padding: 2vw 0 3vw 0;
  }
  /* .title {
    font-size: 7vw;
  } */
  /* .intro {
    font-size: 5vw;
  } */
  .left {
    width: 100%;
  }
  .right {
    width: 100%;
  }
  .large-screen {
    display: none;
  }
  .small-screen {
    display: block;
  }
  /* .intro {
    margin-top: 5vw;
  } */
  .passion {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 5vw;
  }
  .passion-item {
    font-size: 3vw;
  }
  .circle[data-v-3b1fe754] {
    width: 16vw;
    height: 16vw;
    padding: 1vw;
    border: 2px solid #222;
    background-color: #ecf0f1;
    border-radius: 4vw;
  }
  .work-stick {
    display: none;
  }
  .work-blank {
    display: none;
  }
  .work-list {
    flex: unset;
    margin-left: unset;
  }
  .work {
    padding: 0 0 0 0;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2vw;
  }
  .works-zone {
    display: flex;
    flex-direction: column;
  }
  .work-img {
    width: 90vw;
  }
  .work-profile {
    display: flex;
    visibility: visible;
    width: 90vw;
  }
  .work-sign {
    display: none;
  }
  .work-intro {
    font-size: min(4.2vw, 22px);
  }
  .work-features {
    font-size: min(4vw, 22px);
    margin-top: 4vw;
    margin-bottom: 12vw;
  }
  .work-view {
    font-size: min(4.2vw, 22px);
  }
  .work-middle {
    padding-bottom: unset;
    margin-top: 1vw;
  }
  .contact-inner {
    display: flex;
    flex-direction: column;
  }
  .contact-left {
    width: 90vw;
  }
  .contact-list {
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 4vw;
  }
  .contact-item {
    width: max(5vw, 28px);
    height: max(5vw, 28px);
    display: flex;
    padding: 2vw;
    border-radius: 12vw;
    border: 1px solid #fff;
    cursor: pointer;
  }
  .contact-img {
    width: max(5vw, 28px);
    height: max(5vw, 28px);
    transition: all 0.3s ease-in-out;
  }
  .contact-content {
    text-align: center;
    font-size: max(7vw, 30px);
  }
  .contact-intro {
    text-align: center;
    font-size: max(3vw, 16px);
  }
}
.about {
  width: 85vw;
  margin: 0 auto;
  padding: 0 0;
  /* border-bottom: 2px solid #222; */
}
.home {
  width: 100vw;
}
</style>
