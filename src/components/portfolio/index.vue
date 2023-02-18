<template>
  <div class="main">
    <div class="head">
      <div class="head-inner">
        <img
          @click="goHome"
          class="logo"
          src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/logo.png"
        />
        <div class="menu">
          <div
            @mouseenter="menuMouseEnter"
            @mouseleave="menuMouseLeave"
            class="menu-item"
          >
            <span @click="goHome">Works</span>
            <transition name="el-zoom-in-top">
              <div class="submenu" v-show="submenu_show">
                <div @click="openKeep" class="submenu-item">Keep Guard</div>
                <div @click="openHeimdall" class="submenu-item">Heimdall</div>
                <div @click="openFreetrial" class="submenu-item">
                  Meituan Free Trial
                </div>
              </div>
            </transition>
          </div>
          <div @click="goAbout" class="menu-item">About</div>
          <div @click="goFun" class="menu-item">Fun</div>

          <div @click="openResume" class="menu-item">Resume</div>
          <div class="divide"></div>
          <div class="media">
            <a href="https://www.linkedin.com/in/rayvec/" target="_blank">
              <img
                style="height: 25px"
                src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/linkedin-black.png"
              />
            </a>
            <a href="mailto:rayvec@utexas.edu" target="_blank">
              <img
                style="height: 29px"
                src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/mail-black.png"
              />
            </a>
          </div>
        </div>
        <div @click="clickMenu" class="mobile-menu">
          <img
            v-if="menuClick === false"
            class="menu-img"
            src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/menu.svg"
          />
          <i v-if="menuClick === true" class="el-icon-close"></i>
        </div>
      </div>
    </div>
    <router-view v-if="menuClick === false"></router-view>
    <div v-if="menuClick === true" class="mobile-menu-list">
      <div class="mobile-menu-list-crest">
        <div @click="goHome" class="mobile-menu-item">Works</div>
        <div @click="goAbout" class="mobile-menu-item">About</div>
        <div @click="goFun" class="mobile-menu-item">Fun</div>
        <div @click="openResume" class="mobile-menu-item">Resume</div>
        <div class="media">
          <a href="https://www.linkedin.com/in/rayvec/" target="_blank">
            <img
              style="width: 9vw"
              src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/linkedin-black.png"
            />
          </a>
          <a href="mailto:rayvec@utexas.edu" target="_blank">
            <img
              style="width: 11vw"
              src="https://raw.githubusercontent.com/RayVec/images/main/portfolio/mail-black.png"
            />
          </a>
        </div>
      </div>
    </div>
    <div v-if="menuClick === false" class="bottom">
      Designed and developed by Rui Wei © {{ this.getThisYear() }} All rights
      Reserved.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submenu_show: false,
      menuClick: false,
    };
  },
  methods: {
    getThisYear() {
      let date = new Date();
      let year = date.getFullYear();
      return year;
    },
    clickMenu() {
      this.menuClick = !this.menuClick;
    },
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
    openResume() {
      window.open(
        "https://drive.google.com/file/d/1Bd8oVek-_P_AOzfBusNin-V7OL1m90eU/view?usp=share_link"
      );
    },
    goAbout() {
      this.menuClick = false;
      this.$router.push("/about");
      let main = document.getElementsByClassName("main")[0];
      main.scrollTop = 0;
    },
    goFun() {
      this.menuClick = false;
      this.$router.push("/fun");
      let main = document.getElementsByClassName("main")[0];
      main.scrollTop = 0;
    },
    goHome() {
      this.menuClick = false;

      this.$router.push("/");
      let main = document.getElementsByClassName("main")[0];
      main.scrollTop = 0;
    },
    menuMouseLeave() {
      this.submenu_show = false;
    },
    menuMouseEnter() {
      this.submenu_show = true;
    },
  },
};
</script>

<style scoped>
.media >>> img {
  cursor: pointer;
}
.media {
  display: flex;
  width: 80px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}
.divide {
  height: 25px;
  width: 2px;
  background-color: black;
  margin: 0 25px;
  margin-bottom: 5px;
}
.bottom {
  width: 90vw;
  margin: 0 auto;
  margin-top: 20px;
  border-top: 2px solid black;
  padding: 10px 0;
  color: #222;
  font-size: 18px;
}
.logo {
  cursor: pointer;
  height: 40px;
}
.submenu-item::after {
  content: "";
  position: absolute;
  /* width: 100%; */
  transform: scaleX(0);
  height: 2px;
  bottom: 5px;
  left: 0;
  background-color: #d90404;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.submenu-item:hover::after {
  width: 100%;
  transform: scaleX(1);
  transform-origin: bottom left;
}
.submenu-item {
  position: relative;
  padding: 10px 0;
  cursor: pointer;
}
.submenu {
  position: absolute;
  top: 30px;
  width: max-content;
  z-index: 5;
  padding: 6px 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  background-color: white;
}
.menu-item::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 4px;
  left: 0;
  background-color: #d90404;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.menu-item:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.menu-item {
  display: inline-block;
  position: relative;

  margin-left: 30px;
  font-size: 18px;
  padding-bottom: 5px;
  cursor: pointer;
  border-bottom: 1px solid white;
}
.menu {
  display: flex;
  align-items: center;
  z-index: 1;
}
img {
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /*Webkit (non-standard naming) */
  image-rendering: crisp-edges;
}
.head-inner {
  width: 90vw;
  margin: 0 auto;
  border-bottom: 2px solid #222;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px 0 10px 0;
}
.head {
  width: 100vw;
  margin: 0 auto;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
}

.main {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.mobile-menu {
  display: none;
}
@media screen and (max-width: 600px) {
  .menu {
    display: none;
  }
  .mobile-menu {
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
  }
  .menu-img {
    width: 30px;
  }
  .head-inner {
    align-items: center;
  }
  .head-inner >>> .el-icon-close {
    font-size: 30px;
  }
  .mobile-menu-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 67px);
  }
  .mobile-menu-list-crest {
    margin-top: -30vh;
  }
  .mobile-menu-item {
    font-size: 8vw;
    font-weight: 600;
    margin-bottom: 5vh;
    cursor: pointer;
  }
  .media >>> img {
    margin-right: 6vw;
  }
}
</style>
