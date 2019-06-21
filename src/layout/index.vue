<template>
  <div>
    <mu-drawer :open.sync="open" :docked="false" class="app-header">
      <div style="text-align:center;padding-top:12px;">
        <mu-avatar size="78">
          <img src="../assets/avatar.png">
        </mu-avatar>
      </div>
      <mu-list @change="open =false;">
        <mu-list-item
          :to="{
              name:'tags',
              params:{
                  name:item
              }
          }"
          button
          :ripple="false"
          :value="item"
          v-for="(item,index) in getCategory()"
          :key="index"
        >
          <mu-list-item-action>
            <mu-icon value="local_offer"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>{{item}}</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
    <mu-appbar class="mu-appbar-header" style="width: 100%;" :class="{'is-open':open}">
      <mu-button icon slot="left" @click="open = true">
        <mu-icon value="menu"></mu-icon>
      </mu-button>Title
      <mu-button slot="right" icon @click="open = true">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
    </mu-appbar>
    <div class="app-content" :class="{'is-open': open}">
      <router-view/>
      <mu-backtop/>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import data from "@/data";
export default Vue.extend({
  data() {
    return {
      open: false
    };
  },
  methods: {
    getCategory() {
      let result = new Set();
      data.forEach(el => {
        result.add(el.category);
      });
      return result;
    }
  }
});
</script>
<style lang="less" scoped>
.app-header {
  background: #feac5e; /* fallback for old browsers */
  background: linear-gradient(
    150deg,
    #4bc0c8,
    #c779d0,
    #feac5e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  & .material-icons {
    color: #3f51b5;
  }
  & .mu-item-title {
    color: #fff;
  }
}
.mu-appbar-header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 101;
  overflow: hidden;
  transition: left 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  color: #fff;
  background: linear-gradient(
    to right,
    #833ab4,
    #fd1d1d,
    #fcb045
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  &.is-open {
    // left: 256px;
  }
  &.is-only-title {
    .mu-appbar-title {
      margin-left: 16px;
    }
  }
}
.app-content {
  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  padding-top: 70px;
  padding-left: 24px;
  padding-right: 24px;
}
.app-content.is-open {
  // padding-left: 256px;
}
</style>