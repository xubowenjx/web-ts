<template>
  <button :class="{[type]:type}" @click="onClick">{{text}}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Button extends Vue {
  @Prop()
  text: string | undefined;
  @Prop()
  private type!: string;
  onClick() {
    console.log("click");
    this.$emit("on-click");
  }
}
</script>
<style lang="less" scoped>
button {
  padding: 12px 24px;
  outline: none;
  border-radius: 5px;
  border: none;
  font-size: 12px;
}
.primary {
  background-color: #42b983;
  color: #fff;
}
.danger {
  background-color: #c44c15;
  color: #fff;
}
</style>
