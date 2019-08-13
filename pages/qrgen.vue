<template>
  <no-ssr>
    <div class="content">
      <h1>QR-生成</h1>
      <div v-if="status ==false">
        <p>AgentNameを入力してください</p>
        <d-input v-model="inputText" placeholder="AgentName" pattern="^[0-9A-Za-z]+$" required />
        <d-button type="button" @click="generate">FASTPASS発行</d-button>
      </div>
      <div v-if="status">
        <div id="print-area">
          <div id="fast-pass">
            <h3>MissionDay Takaoka</h3>
            <h3>》FastPass》</h3>
            <p>9月21日（土） ウイング・ウイング高岡 1F</p>
            <p>受付時間 １０：３０〜１８：００</p>
            <div id="qr-div">
              <QRCanvas :options="options" @updated="onUpdated" id="qr-canvas" />
            </div>
            <div id="qr-img"></div>
            <h4>{{name}}</h4>
            <p>{{kana}}</p>
          </div>
        </div>
        <button @click="print">印刷する</button>
        <input type="button" value="クリア" onclick="window.location.reload();" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </no-ssr>
</template>

<script>
import { QRCanvas } from "qrcanvas-vue";
import Vue from "vue";
import VueHtmlToPaper from "vue-html-to-paper";

const printOptions = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: ['/pass.css']
};

Vue.use(VueHtmlToPaper, printOptions);

const alfaToHira = {
  A: "エー",
  B: "ビー",
  C: "シー",
  D: "ディー",
  E: "イー",
  F: "エフ",
  G: "ジー",
  H: "エイチ",
  I: "アイ",
  J: "ジェー",
  K: "ケー",
  L: "エル",
  M: "エム",
  N: "エヌ",
  O: "オー",
  P: "ピー",
  Q: "キュー",
  R: "アール",
  S: "エス",
  T: "ティー",
  U: "ユー",
  V: "ブイ",
  W: "ダブリュ",
  X: "エックス",
  Y: "ワイ",
  Z: "ゼット",
  0: "ぜろ",
  1: "いち",
  2: "に",
  3: "さん",
  4: "よん",
  5: "ご",
  6: "ろく",
  7: "なな",
  8: "はち",
  9: "きゅ"
};

function putKana(inputText) {
  let result = alfaToHira[inputText[0]];
  for (let i = 1; i < inputText.length; i++) {
    console.log(inputText[i]);
    result += "・" + alfaToHira[inputText[i]];
  }
  return result;
}
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
      name: "",
      kana: "",
      inputText: "",
      status: false
    };
  },
  methods: {
    onUpdated() {
      console.log("updated");
    },
    generate() {
      console.log(this.options.data);
      this.options = Object.assign({}, this.options, {
        data: this.inputText
      });
      let printName = this.inputText.replace(/\s+/g, "").toUpperCase();
      this.name = printName;
      this.kana = putKana(printName);
      this.status = true;
    },
    print() {
      let qrCanvas = document.getElementById("qr-canvas");
      let qrImg = qrCanvas.toDataURL();
      document.getElementById("qr-img").innerHTML = '<img src="' + qrImg + '">';
      document.getElementById("qr-div").remove("qr-canvas");
      this.$htmlToPaper("print-area", () => {
        console.log("Printing done or got cancelled!");
      });
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

<style scoped>
#fast-pass{
  color:black;
  text-align: center;
  border: solid 2px black;
  width: 400px;
  padding: 2em;
}
</style>