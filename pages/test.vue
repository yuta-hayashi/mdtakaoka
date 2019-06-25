<template>
  <div>
    <d-button @click="handleClick">Click Me!</d-button>
    <d-card>
      <d-card-body>Nunc quis nisl ac justo elementum sagittis in quis justo.</d-card-body>
    </d-card>
  </div>
</template>

<script>
import dButton from "shards-vue/src/components/button/Button";

export default {
  components: {
    dButton
  },
  methods: {
    handleClick() {
      alert("You just clicked me!");
    }
  }
};
</script>

<style>
body{margin: 100px;}
</style>
