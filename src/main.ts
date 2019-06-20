import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import i18n from "./i18n";
import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";
import components from "./components";
Vue.config.productionTip = false;
Vue.use(components);
Vue.use(MuseUI);
new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
