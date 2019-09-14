<template>
  <div class="content">
    <div class="top-text">
      <h2 class="subtitle">マップ印刷</h2>
      <p>ミッションを一覧にまとめたマップを印刷することが出来ます。</p>
      <p>PDFでの配布とコンビニプリントが可能です。</p>
    </div>
    <div class="contents">
      <div id="map-imgs">
        <img src="~/assets/img/mdtakaoka-map1.jpg" class="map-img" />
        <img src="~/assets/img/mdtakaoka-map2.jpg" class="map-img" />
      </div>
      <h3>■PDFをダウンロードする</h3>
      <p>ダウンロードはこちら↓<br>
        <a href="/files/mdtakaoka-map.pdf" target="_blank" rel="noopener noreferrer">
          <b>MissionDayTakaoka マップPDF</b>
        </a>
      </p>
      <p>※<n-link to="/qrpass">QR-PASS</n-link>を印刷された方はマップへのエージェント名の記入は不要です。</p>
    </div>
    <div class="contents">
      <h3>■コンビニプリントを利用する</h3>
      <p>ローソン、セイコーマート、ファミリーマートでネットワークプリントが利用できます。</p>
      <p>
        ユーザー番号 &emsp;：
        <b>B78Y77YMLA</b>
        <br />プリントタイプ：
        <b>文書プリント</b>
        <br />ファイル名 &emsp; &emsp;：
        <b>ミッションマップ_両面.pdf</b>
      </p>
      <p>※両面カラー印刷で120円です。</p>
      <p>
        印刷方法はこちら
        <a
          href="https://networkprint.ne.jp/sharp_netprint/ja/howto_doc_convini.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >ネットワークプリントサービス-ご利用方法</a>
      </p>
    </div>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { INLINES, BLOCKS } from "@contentful/rich-text-types";

const client = createClient();
const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, next) =>
      `<a href=${
        node.data.uri
      } target="_blank" rel="noreferrer noopener">${next(node.content)}</a>`,
    [BLOCKS.EMBEDDED_ASSET]: node =>
      `<img src="${node.data.target.fields.file.url +
        "?fm=jpg&q=50"}" class="post-img"/>`
  }
};

export default {
  head() {
    return { title: "マップ｜" };
  }
};
</script>


<style scoped>
.map-img {
  box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
    0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
    0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
    0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
  max-width: 300px;
  width: 100%;
  margin: 1em 1em 5em 1em;
}
#map-imgs {
  text-align: center;
}
.contents {
  padding: 1em 3em;
}
b {
  font-weight: 700;
}
@media (max-width: 875px) {
  .contents {
    padding: 1em;
  }
}
</style>
