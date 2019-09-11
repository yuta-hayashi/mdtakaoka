<template>
  <no-ssr>
    <div class="content">
      <div class="none">
        <h2 class="title">QR-PASS 発行</h2>
        <div v-if="inputStatus">
          <p>
            エージェント名(Ingress内の名前)を
            <b>半角英数字</b>で間違えなく入力お願いします。大文字・小文字は区別しません。
          </p>
          <d-form-input :state="valid" v-model="inputText" placeholder="AgentName" required />
          <small v-if="valid==false" style="color:red;">最大15文字で半角英数字のみ入力してください。</small>
          <br />
          <d-checkbox v-model="rsvpCheck" name="rsvp-check" value="true">
            IngressのMissionDayの
            <a
              href="https://events.ingress.com/MissionDay/Takaoka"
              target="_blank"
              rel="noreferrer noopener"
            >サイト</a>で参加登録をしました。
          </d-checkbox>
          <d-button
            type="button"
            @click="generate"
            size="lg button"
            :disabled="!rsvpCheck||!valid"
          >QR-PASS 発行</d-button>
        </div>
        <div id="qr-div">
          <QRCanvas :options="options" id="qr-canvas" />
        </div>
        <div v-if="check">
          <h4>Agent名は正しいですか？</h4>
          <p>※すべて大文字で表示されています。</p>
          <div class="nameBox">
            <h3 class="exo solid">{{name}}</h3>
          </div>
          <d-button @click="createPass">はい</d-button>
          <d-button onclick="window.location.reload();" theme="secondary">いいえ</d-button>
        </div>
      </div>
      <div v-if="status">
        <div id="print-area">
          <div id="qr-pass">
            <QrPass :agentName="name" :kana="kana" :qrcode="qrbase"></QrPass>
          </div>
          <div id="space"></div>
          <br />
          <p>※ 印刷して切り取ってご利用ください。</p>
          <p>※ 名前はすべて大文字アルファベットで表示されています。</p>
          <p>※ □はスタッフ用なので、記入しないでください。</p>
        </div>
        <div class="none">
          <d-button @click="print">印刷する</d-button>
          <d-button onclick="window.location.reload();" theme="secondary">クリア</d-button>
          <p>※ 印刷するボタンが機能しない場合はページ全体を印刷してください。</p>
        </div>
      </div>
      <br />
      <div class="none">
        <h3>QR-PASSとは?🤔</h3>
        <p>
          今回のMissionDay高岡ではQRコードを使ったチェックアウトができます。
          事前にエージェント名の入ったQRコード印刷しておくことによって、素早く正確にチェックアウトができるようになりますので、ご協力いただけると幸いです。
          <br />詳しくはヘルプをご覧ください。
        </p>
        <p>iPhoneでエージェント名がうまく入力できない現象を確認しております。<br>メモ帳などに一度入力し、コピーして入力欄に貼り付けていただくか、🌐(地球マーク)をタップし英語モードに切り替えていただくようお願いします。</p>
      </div>
    </div>
  </no-ssr>
</template>

<script>
import { QRCanvas } from "qrcanvas-vue";
import QrPass from "~/components/QrPass";

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
    if (alfaToHira[inputText[i]] == undefined) {
      result += "・？";
    } else {
      result += "・" + alfaToHira[inputText[i]];
    }
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
  computed: {
    valid: function() {
      if (this.inputText == "") {
        return null;
      } else if (this.inputText.length > 15) {
        return false;
      } else if (this.inputText.match(/^[A-Za-z0-9]*$/)) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    generate() {
      //console.log(this.options.data);
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
      this.check = false;
      this.status = true;
      this.$ga.event("Button", "qr-pass", this.name);
    },
    print() {
      window.print();
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
.nameBox {
  display: flex;
  margin: 1em;
}
.nameBox h3 {
  border: solid 1px gray;
  padding: 5px;
}
@media (max-width: 500px) {
  #qr-pass {
    margin: 2em;
    transform: rotate(90deg);
  }
  #space {
    height: 350px;
  }
}
@media print {
  #__layout > *:not(#print-area) {
    display: none;
  }
  .content {
    padding: 6em 3em;
  }
  p {
    font-size: 1em;
  }
  #qr-pass {
    width: 150mm;
  }
  .none {
    display: none;
  }
}
</style>