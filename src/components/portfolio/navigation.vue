<template>
  <div class="navigation">
    <div v-for="(title, n) in titles" :key="n">
      <template v-if="title.className === 'title'">
        <div class="bar-crest">
          <template v-if="title === currentTitle">
            <div class="bar1 red-bar"></div>
            <div @click="clickTitle(title)" class="bar1-text red-text">
              {{ title.innerText }}
            </div>
          </template>
          <template v-else>
            <div class="bar1"></div>
            <div @click="clickTitle(title)" class="bar1-text">
              {{ title.innerText }}
            </div>
          </template>
        </div>
      </template>
      <template v-if="title.className === 'heading2'">
        <div class="bar-crest">
          <template v-if="title === currentTitle">
            <div class="bar2 red-bar"></div>
            <div @click="clickTitle(title)" class="bar2-text red-text">
              {{ title.innerText }}
            </div>
          </template>
          <template v-else>
            <div class="bar2"></div>
            <div @click="clickTitle(title)" class="bar2-text">
              {{ title.innerText }}
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [],
      currentTitle: null,
    };
  },
  mounted() {
    this.getAllTitles();
    let main = document.getElementsByClassName("main")[0];
    main.addEventListener("scroll", this.setBarColor);
    // setAudoHiddenBar
    // this.setAutoHiddenBar();
  },
  beforeDestroy() {
    main.removeEventListener("scoll", this.setBarColor);
  },
  methods: {
    // setAutoHiddenBar() {
    //   var container = document.querySelector(".navigation");

    //   container.addEventListener("mouseenter", function () {
    //     container.classList.add("show-scrollbar");
    //   });

    //   container.addEventListener("mouseleave", function () {
    //     container.classList.remove("show-scrollbar");
    //   });
    // },
    setBarColor() {
      let main = document.getElementsByClassName("main")[0];
      const windowHeight = document.documentElement.clientHeight;
      console.log(main.scrollTop);
      let main_scrollTop = main.scrollTop;
      for (let title of this.titles) {
        // console.log(title.offsetTop);
        let top = title.offsetTop - windowHeight / 3;
        if (main_scrollTop > top - 1) {
          this.currentTitle = title;
          this.setRedBarPosition();
        }
      }
    },
    setRedBarPosition() {
      setTimeout(() => {
        let red_text = document.getElementsByClassName("red-text")[0];
        let offsetTop = red_text.offsetTop;
        let navigation = document.getElementsByClassName("navigation")[0];
        let navigation_height = navigation.clientHeight;
        console.log("navigation height", navigation_height);
        if (offsetTop > navigation_height) {
          navigation.scrollTop = offsetTop = navigation_height;
        } else if (offsetTop < navigation.scrollTop) {
          navigation.scrollTop = 0;
        }
        console.log("red text offsetTop", offsetTop);
      }, 200);
    },
    clickTitle(title) {
      //   let titles = document.getElementsByClassName(title.className);
      //   console.log(titles);
      const windowHeight = document.documentElement.clientHeight;

      let top = title.offsetTop;
      console.log(top);
      let main = document.getElementsByClassName("main")[0];
      main.scrollTop = top - windowHeight / 3;
      //   main.scrollTop = 500;
    },
    getAllTitles() {
      let divs = document.getElementsByTagName("div");
      for (let div of divs) {
        if (div.className === "title" || div.className === "heading2") {
          this.titles.push(div);
        }
      }
      this.currentTitle = this.titles[0];
      console.log(this.titles);
    },
  },
};
</script>

<style scoped>
.bar-crest {
  display: flex;
  flex-direction: column;
  padding: 6px 0;
  justify-content: center;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
}
.bar1-text {
  /* display: inline-block;
  margin: 0; */
  overflow: hidden;
  font-size: 18px;
  font-weight: bold;
}
.bar2-text {
  font-size: 14px;
  /* font-weight: bold; */
}
.navigation:hover .bar2-text {
  display: flex;
}
.navigation:hover .bar1-text {
  display: flex;
}
/* .navigation:hover .bar2 {
  display: none;
}
.navigation:hover .bar1 {
  display: none;
} */
/* .navigation:hover {
  box-shadow: 0 0 8px rgb(236, 236, 236);
} */
.bar2 {
  background-color: gray;
  width: 30px;
  height: 2px;
  display: none;
}
.bar1 {
  background-color: gray;
  width: 50px;
  height: 2px;
  display: none;
}
.bar1-text:hover {
  color: #d90404;
}
.bar2-text:hover {
  color: #d90404;
}
.navigation .bar2-text {
  /* display: none; */
  margin-left: 16px;
  cursor: pointer;
}
.navigation .bar1-text {
  /* display: none; */
  cursor: pointer;
}
@media screen and (min-width: 1160px) {
  /* .navigation {
    position: fixed;
    top: 50%;
    left: 5%;
    padding: 20px 16px 20px 0;
    transform: translate(0, -50%);
    display: flex;
    flex-direction: column;
    font-size: 14px;
    background-color: white;
    color: gray;
    transition: all 1s ease-in-out;
  } */
  .navigation {
    position: sticky;
    top: 100px;
    max-height: calc(100vh - 130px);
    align-self: flex-start;
    width: max(300px, 25%);
    box-sizing: border-box;
    padding: 20px 20px 20px 10px;
    margin-right: 60px;
    /* transform: translate(0, -50%); */
    display: flex;
    flex-direction: column;
    font-size: 14px;
    background-color: white;
    color: gray;
    transition: all 1s ease-in-out;
    overflow-y: hidden;
    background-color: rgb(247, 247, 247);
    border-radius: 16px;
    /* border-left: 1px solid gray; */
    z-index: 999;
  }
  .navigation:hover {
    overflow-y: overlay;
  }
}
@media screen and (max-width: 1159px) {
  .navigation {
    display: none;
  }
}
.red-bar {
  background-color: #d90404;
}
.red-text {
  color: #d90404;
}
</style>
