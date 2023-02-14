import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import jquery from "jquery";
// import animated from "animate.css"; // npm install animate.css --save安装，在引入
// import Viewer from 'v-viewer' // 引入图片查看控件
// import 'viewerjs/dist/viewer.css'

// Vue.use(animated);

Vue.prototype.$ = jquery;

Vue.use(ElementUI);

Vue.config.productionTip = false;

// 设置图片查看控件
// Vue.use(Viewer);
// Viewer.setDefaults({
//   Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
// });

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
