<template>
  <div id="app">
    <Layout/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Layout from "@/layout/index.vue";

@Component({
  components: {
    Layout
  }
})
export default class App extends Vue {}
</script>
<style lang="less">
html,
body,
#app {
  height: 100vh;
  background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);
}
</style>
