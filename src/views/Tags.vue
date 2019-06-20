<template>
  <div style="padding-top:20px;">
    <mu-card class="card" v-for="(item,index) in tags" :key="index">
      <mu-card-header :title="item.title" sub-title="sub title">
        <mu-avatar slot="avatar">
          <img :src="item.icon">
        </mu-avatar>
      </mu-card-header>
      <mu-card-text>{{item.url}}</mu-card-text>
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
  max-width: 375px;
  background: linear-gradient(to right, rgb(116, 235, 213), rgb(172, 182, 229));
  color: #fff;
}
</style>
