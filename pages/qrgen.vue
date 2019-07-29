<template>
  <div class="content">
    <h1>QR-生成</h1>
    <p>AgentNameを入力してください</p>
    <input v-model="inputText" placeholder="AgentName" />
    <input type="button" @click="generate" value="生成" />
    <qrcode-vue :value="name" :size="size" level="H" class="qrimg"></qrcode-vue>
  </div>
</template>
<script>
import QrcodeVue from "qrcode.vue";

export default {
  data() {
    return {
      name: "",
      size: 300
    };
  },
  methods:{
      generate:function(){
          this.name=this.inputText;
      }
  },
  components: {
    QrcodeVue
  }
};
</script>

<style>
.content {
  text-align: center;
}
.qrimg {
  padding: 2em;
}
</style>
