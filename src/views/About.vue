<template>
  <div class="about">
    <h1>This is an about page</h1>
    <sm-button text="hello" type="primary"></sm-button>
    <sm-button text="danger" @on-click="click" type="danger"></sm-button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    click() {
      console.log("trigger click");
    }
  }
});
</script>

