<template>
  <div style="padding-top:20px;">
    <mu-card class="card" v-for="(item,index) in tags" :key="index">
      <div style="text-align:center;padding-top:12px;">
        <img height="36" width="36" :src="item.icon">
      </div>
      <mu-card-text>
        <a class="link" :href="item.url" target="_blank">{{item.title}}</a>
      </mu-card-text>
    </mu-card>
  </div>
</template>
<script lang="ts">
import data from "@/data";
import { Component, Watch, Prop, Vue } from "vue-property-decorator";
import Tag from "../model/Tag";
import { Route } from "vue-router";
@Component
export default class tasg extends Vue {
  tags: Array<Tag> = [];
  @Watch("$route")
  onChildChanged(val: Route, oldVal: Route) {
    let name = this.$route.params.name;
    this.tags = data.filter(el => el.category === name);
  }
  mounted() {
    let name = this.$route.params.name;
    this.tags = data.filter(el => el.category === name);
  }
}
</script>
<style lang="less" scoped>
.mu-card + .mu-card {
  margin-left: 12px;
}
.card {
  display: inline-block;
  max-width: 275px;
  background: rgb(34, 193, 195);
  color: #fff;
  .link {
    color: rgb(127, 0, 255);
  }
}
</style>
