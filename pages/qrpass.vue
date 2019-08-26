<template>
  <no-ssr>
    <div class="content">
      <h2 class="title">QR-PASS 発行</h2>
      <div v-if="inputStatus">
        <p>AgentNameを入力してください</p>
        <d-form-input v-model="inputText" placeholder="AgentName" required />
        <p>※ゲーム内の名前を間違えなく入力お願いします。大文字・小文字は区別しません。</p>
        <d-checkbox
          v-model="rsvpCheck"
          name="rsvp-check"
          value="true"
        >IngressのMissionDayの<a href="https://events.ingress.com/MissionDay/Takaoka" target="_blank" rel="noreferrer noopener">サイト</a>で参加登録をしました。</d-checkbox>
        <d-button type="button" @click="generate" size="lg button" :disabled="!rsvpCheck">FASTPASS発行</d-button>
      </div>
      <div id="qr-div">
        <QRCanvas :options="options" id="qr-canvas" />
      </div>
      <div v-if="check">
        <h4>Agent名は正しいですか？</h4>
        <p>※すべて大文字で表示されています。</p>
        <h3 class="exo">{{name}}</h3>
        <d-button @click="createPass">はい</d-button>
        <d-button onclick="window.location.reload();" theme="secondary">いいえ</d-button>
      </div>
      <div v-if="status">
        <div id="print-area">
          <QrPass :agentName="name" :kana="kana" :qrcode="qrbase"></QrPass>
          <br />
          <p>※ 印刷して切り取ってご利用ください。</p>
          <p>※ 名前はすべて大文字アルファベットで表示されています。</p>
          <p>※ □はスタッフ用なので、記入しないでください。</p>
        </div>

        <d-button @click="print">印刷する</d-button>
        <d-button onclick="window.location.reload();" theme="secondary">クリア</d-button>
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
import QrPass from "~/components/QrPass";

const printOptions = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: ["/pass.css"]
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
  head() {
    return { title: "QR-PASS発行｜" };
  },
  components: {
    QRCanvas,
    QrPass
  },
  data() {
    return {
      options: {
        cellSize: 6,
        correctLevel: "H",
        data: ""
      },
      name: "",
      kana: "",
      inputText: "",
      rsvpCheck: false,
      inputStatus: true,
      check: false,
      status: false
    };
  },
  methods: {
    generate() {
      console.log(this.options.data);
      this.options = Object.assign({}, this.options, {
        data: this.inputText
      });
      let printName = this.inputText.replace(/\s+/g, "").toUpperCase();
      this.name = printName;
      this.kana = putKana(printName);
      this.check = true;
      this.inputStatus = false;
    },
    createPass() {
      let qrCanvas = document.getElementById("qr-canvas");
      this.qrbase = qrCanvas.toDataURL("image/png");
      this.name = this.name;
      this.check = false;
      this.status = true;
    },
    print() {
      this.$htmlToPaper("print-area");
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
.content {
  padding: 6em 3em;
}
#qr-canvas {
  display: none;
}
#fast-pass {
  color: black;
  text-align: center;
  border: solid 2px black;
  width: 90%;
  max-width: 400px;
  padding: 2em;
}
.exo {
  font-family: "Exo", sans-serif !important;
  font-style: inherit;
  font-weight: normal;
}
.italic {
  font-style: italic;
}
@media print {
  #__layout > *:not(#print-area) {
    display: none;
  }
  .content {
    padding: 6em 3em;
  }
  .exo {
    color: red;
  }
  #fast-pass {
    color: black;
    text-align: center;
    border: solid 2px black;
    width: 1000mm !important;
    padding: 2em;
  }
  @import url("https://fonts.googleapis.com/css?family=Exo&display=swap");
  .exo {
    font-family: "Exo", sans-serif !important;
    font-style: inherit;
    font-weight: normal;
  }
  p {
    font-size: 0.8em;
  }

  .italic {
    font-style: italic;
  }
}
</style>