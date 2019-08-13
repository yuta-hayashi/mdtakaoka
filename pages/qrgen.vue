<template>
  <no-ssr>
    <div>
      <h1>QR-生成</h1>
      <p>AgentNameを入力してください</p>
      <input v-model="inputText" placeholder="AgentName" />
      <input type="button" @click="generate" value="生成" />
      <h4>{{name}}</h4>
      <QRCanvas v-if="status" :options="options" @updated="onUpdated" />
    </div>
  </no-ssr>
</template>

<script>
import { QRCanvas } from "qrcanvas-vue";

export default {
  components: {
    QRCanvas
  },
  data() {
    return {
      options: {
        cellSize: 8,
        correctLevel: "H",
        data: ""
      },
      name:"",
      inputText: "",
      status: false
    };
  },
  methods: {
    onUpdated() {
      console.log("updated");
    },
    generate(){
      console.log(this.options.data)
      this.options = Object.assign({}, this.options, {
        data: this.inputText
      });
      this.name=this.inputText;
      this.status = true;
    }
  },
  mounted() {
    const image = new Image();
    image.src = "/qr-icon.png";
    image.onload = () => {
      this.options = Object.assign({}, this.options, {
        logo: {
          image
        }
      });
    };
  }
};
</script>