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
  },
  beforeDestroy() {
    main.removeEventListener("scoll", this.setBarColor);
  },
  methods: {
    setBarColor() {
      let main = document.getElementsByClassName("main")[0];
      const windowHeight = document.documentElement.clientHeight;
      console.log(main.scrollTop);
      let main_scrollTop = main.scrollTop;
      for (let title of this.titles) {
        console.log(title.offsetTop);
        let top = title.offsetTop - windowHeight / 3;
        if (main_scrollTop > top - 1) {
          this.currentTitle = title;
        }
      }
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
  height: 24px;
  justify-content: center;
}
.navigation:hover .bar2-text {
  display: flex;
}
.navigation:hover .bar1-text {
  display: flex;
}
.navigation:hover .bar2 {
  display: none;
}
.navigation:hover .bar1 {
  display: none;
}
.navigation:hover {
  box-shadow: 0 0 8px rgb(236, 236, 236);
}
.bar2 {
  background-color: gray;
  width: 30px;
  height: 2px;
}
.bar1 {
  background-color: gray;
  width: 50px;
  height: 2px;
}
.bar1-text:hover {
  color: #d90404;
}
.bar2-text:hover {
  color: #d90404;
}
.navigation .bar2-text {
  display: none;
  margin-left: 16px;
  cursor: pointer;
}
.navigation .bar1-text {
  display: none;
  cursor: pointer;
}
@media screen and (min-width: 1160px) {
  .navigation {
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
