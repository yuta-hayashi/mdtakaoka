<template>
  <div id="policy">
    <h1>サイト規約</h1>
    <h2>アクセス解析ツールについて</h2>
    <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。</p>
    <p>
      このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
      このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
      この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
      この規約に関して、詳しくは以下のリンク先ページよりご確認ください。
    </p>
    <a
      href="https://marketingplatform.google.com/about/analytics/terms/jp/"
      target="_blank"
      rel="noreferrer noopener"
    >Google アナリティクス利用規約</a>
    <h2>免責事項</h2>
    <p>
      当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。
      権利を侵害する目的ではございません。
      記事の内容や掲載画像等に問題がございましたら、各権利所有者様本人がご連絡下さい。
      確認後、対応させて頂きます。
    </p>
    <p>当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。</p>
    <p>当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。</p>
    <p>当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>
    <h2>当サイトについて</h2>
    <p>当サイトはMissionDay高岡の実行を支援する有志によって運営されています。</p>
    <p>Naiantic Inc.のブランド/ファンサイトガイドラインに基づいて作成されています。</p>
    <a
      href="https://niantic.helpshift.com/a/ingress/?s=events-and-shop-support&f=brand-and-fan-site-guidelines&p=web"
      target="_blank"
      rel="noreferrer noopener"
    >ブランド/ファン サイト ガイドライン</a>
    <hr />
    <button type="button" onClick="history.back()">mdtakaoka.infoへ戻る</button>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [{ hid: "robots", name: "robots", content: "noindex" }]
    };
  }
};
</script>

<style scoped>
#policy {
  margin: 1em;
}
h2 {
  padding-top: 1em;
}
</style>


<script>
export default {
  layout: "noNavigation"
};
</script>
