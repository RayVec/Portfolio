// 引入路由模块并使用它
import Vue from "vue";
import VueRouter from "vue-router";
import mypage from "../components/MyPage.vue";
import site from "../components/site/site.vue";
import sports from "../components/site/sports.vue";
import index from "../components/site/index.vue";
import outdoor from "../components/site/outdoor.vue";
import read from "../components/site/read.vue";
import portfolio_index from "../components/portfolio/index.vue";
import portfolio_home from "../components/portfolio/home.vue";
import portfolio_about from "../components/portfolio/about.vue";
import portfolio_keep_guard from "../components/portfolio/keep-guard.vue";
import portfolio_heimdalll from "../components/portfolio/heimdall.vue";
import portfolio_free_trial from "../components/portfolio/free-trial.vue";
import portfolio_fun from "../components/portfolio/fun.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  history: false,
  // mode: "history",
  // base: "/",
  routes: [
    {
      path: "/test",
      name: "test",
      component: () => import("../components/test.vue"),
    },
    {
      path: "/site",
      name: "site",
      component: site,
      children: [
        {
          path: "index",
          component: index,
        },
        {
          path: "sports",
          component: sports,
        },
        {
          path: "outdoor",
          component: outdoor,
        },
        {
          path: "read",
          component: read,
        },
      ],
    },
    {
      path: "/",
      name: "portfolio_index",
      component: portfolio_index,
      children: [
        {
          path: "",
          component: portfolio_home,
        },
        {
          path: "about",
          component: portfolio_about,
        },
        {
          path: "fun",
          component: portfolio_fun,
        },
        {
          path: "keep-guard",
          component: portfolio_keep_guard,
        },
        {
          path: "heimdall",
          component: portfolio_heimdalll,
        },
        {
          path: "free-trial",
          component: portfolio_free_trial,
        },
      ],
    },
  ],
});

// 输出router
export default router;
