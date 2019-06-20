import Button from "./Button.vue";
import Backtop from "./Backtop";
import Vue, { PluginObject } from "vue";

const Plugin: PluginObject<any> = {
  install: Vue => {
    Vue.component("sm-button", Button);
    Vue.component("mu-backtop", Backtop);
  }
};
export default Plugin;
