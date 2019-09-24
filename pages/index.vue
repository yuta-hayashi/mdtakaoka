<template>
  <div class="content">
    <h1 hidden>MissionDay 高岡 特設サイト</h1>
    <div id="top" class="bg-back">
      <img src="~/assets/img/logo2.svg" id="logo2" />
      <h2 class="subtitle">北陸初となるMissionDayが富山県高岡市で開催！</h2>
      <h3 id="counter">
        終了しました。
        <br />
        <u>684名</u>のエージェントの皆さんにご参加いただきました。
        <br />ありがとうございました。
      </h3><br/>
       <a style="color:white;font-weight:500;"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfIAJy9jtnAZSwYf8IJ6sBq0TA-mNgTFAo9lvE_3rIaisJJNA/viewform"
              target="_blank"
              rel="noreferrer noopener"
            >参加してくださった方は<u>アンケート</u>にご協力お願いします。</a>
    </div>
    <div class="f-area">
      <ul class="horizon-list">

        <li class="h-item">
          <d-card>
            <n-link to="/volunteers">
              <d-card-body class="floating">
                <p>
                  MissionDay TAKAOKA は多くのエージェントの
                  <br />協力によって実現しました🎉
                  <br />こちらよりエージェント名の一覧を閲覧できます。
                </p>
              </d-card-body>
            </n-link>
          </d-card>
        </li>

         <li class="h-item">
          <d-card>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfIAJy9jtnAZSwYf8IJ6sBq0TA-mNgTFAo9lvE_3rIaisJJNA/viewform"
              target="_blank"
              rel="noreferrer noopener"
            >
              <d-card-body class="floating">
                <img src="~/assets/img/forms.png" style="width:40px;" />
                <b>MDに関するアンケート</b>
                <p>参加してくださったAGの方はご協力お願いします。</p>
              </d-card-body>
            </a>
          </d-card>
        </li>

        <li class="h-item">
          <d-card>
            <a
              href="https://photos.app.goo.gl/QXryWp6oUE1yT4Ro9"
              target="_blank"
              rel="noreferrer noopener"
            >
              <d-card-body class="floating">
                <img src="~/assets/img/g-photos.png" style="width:40px;" />
                <b>GooglePhotos共有アルバム</b>
                <p>誰でも写真の閲覧・追加ができます。</p>
              </d-card-body>
            </a>
          </d-card>
        </li>
        <li class="h-item">
          <d-card>
            <a
              href="https://twitter.com/search?q=%23mdtakaoka%20OR%20%23MD%E9%AB%98%E5%B2%A1&src=typed_query&f=live"
              target="_blank"
              rel="noreferrer noopener"
            >
              <d-card-body class="floating">
                <img src="~/assets/img/twitter-icon.png" style="width:40px;" />
                <b>最新情報はTwitterで</b>
                <p>ハッシュタグは #mdtakaoka #MD高岡</p>
              </d-card-body>
            </a>
          </d-card>
        </li>
        <li class="h-item">
          <d-card>
            <n-link to="/qrpass">
              <d-card-body class="floating">
                <img src="~/assets/img/ticket-icon.png" style="width:40px;" />
                <b>QR-PASSの発行はこちら</b>
                <p>
                  MD高岡限定の
                  <u>特典</u>が貰えます。
                </p>
              </d-card-body>
            </n-link>
          </d-card>
        </li>
      </ul>
    </div>

    <div v-for="item in posts" :key="item.sys.id" class="f-area">
      <div class="f-content center">
        <img :src="item.fields.cover.fields.file.url+'?fm=jpg&q=80'" class="f-img" />
      </div>
      <div class="f-content">
        <h2 class="center title">{{item.fields.title}}</h2>
        <div v-html="item.fields.content" class="post"></div>
      </div>
    </div>
    <div id="daibutsu">
      <img src="~/assets/img/daibutsu.jpg" />
    </div>
    <div class="info">
      <h4>最新情報を更新中⚡</h4>
      <p>
        このサイトではミッション情報や観光スポットなどを掲載しています。
        <br />また、TwitterやTelegramを通じて最新情報をお届けしています！ぜひご活用ください。
      </p>
      <div class="info-btn">
        <a
          href="https://twitter.com/mdtakaoka"
          class="navBotton active"
          target="_blank"
          rel="noreferrer noopener"
        >Twitterアカウント</a>
        <a
          href="https://t.me/joinchat/AAAAAFQj7GWHVx469bwPLA"
          class="navBotton active"
          target="_blank"
          rel="noreferrer noopener"
        >Telegramチャネル</a>
      </div>
      <br />
      <p>SNSではハッシュタグをご利用ください！</p>
      <div class="hasharea">
        <a
          href="https://twitter.com/search?q=%23mdtakaoka+%23MD%E9%AB%98%E5%B2%A1"
          target="_blank"
          rel="noreferrer noopener"
        >
          <h2 class="hashtag bg-back">
            #MD高岡&nbsp;
            #mdtakaoka
          </h2>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
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
    return {
      __dangerouslyDisableSanitizers: ["script"],
      title: "",
      script: [
        {
          innerHTML: `{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "MissionDay 高岡",
  "startDate": "2019-09-21T10:00",
  "endDate": "2019-09-21T18:00",
  "location": {
    "@type": "Place",
    "name": "ウイングウ・イング高岡 広場",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "１",
      "addressLocality": "高岡市末広町",
      "postalCode": "9330023",
      "addressRegion": "富山県",
      "addressCountry": "JP"
    }
  },
  "image": [
    "https://mdtakaoka.info/image1x1.jpg",
    "https://mdtakaoka.info/image4x3.jpg",
    "https://mdtakaoka.info/image16x9.jpg"
   ],
  "description": "北陸初！INGRESS MissionDay高岡を2019年9月21日(土) 富山県高岡市にて開催致します！"
}`,
          type: "application/ld+json"
        }
      ]
    };
  },
  computed: {
    days: function() {
      const eventDate = moment("2019-09-21 24:00");
      const today = moment();
      //console.log(moment().date(), eventDate.diff(today, "days"));
      return eventDate.diff(today, "days");
    }
  },
  async asyncData({ env }) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: "top",
        order: "sys.createdAt"
      })
    ])
      .then(([posts]) => {
        // return data that should be available
        // in the template
        //console.log(posts.items[0].fields.content);
        posts.items.map(function(value) {
          value.fields.content = documentToHtmlString(
            value.fields.content,
            options
          );
        });
        //console.log(posts.items);
        return {
          posts: posts.items
        };
      })
      .catch(console.error);
  }
};
</script>

<style scoped>
#top {
  text-align: center;
  padding: 2em;
  margin: 0 !important;
}
#logo2 {
  width: 90%;
  max-width: 800px;
  margin-bottom: 2em;
}
.hasharea {
  display: flex;
  justify-content: center;
}
.hashtag {
  padding: 0.2em;
  font-weight: 700;
  font-size: 2em;
  border-radius: 0.2em;
}
.hashtag {
  color: white;
}
.subtitle {
  color: white;
  font-size: 1.5em;
  margin-bottom: 1.5em;
}
#about {
  padding: 1em;
  text-align: center;
  display: block;
}
#map {
  width: 100%;
  max-width: 600px;
}
.textbox {
  padding: 10px;
  text-align: left;
}
.f-area h2 {
  font-weight: bold;
  font-size: 2em;
  color: rgb(65, 65, 65);
}
.f-area {
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
  justify-content: center;
  border-bottom: solid 1px #e9ecef;
}
.f-content {
  width: 550px;
  padding: 1em;
}
.f-img {
  width: 100%;
  max-width: 700px;
  height: auto;
}
.info h4 {
  font-weight: bold;
  padding: 1em;
}
.info {
  text-align: center;
  margin: 2em;
}
.info-btn {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.info-btn a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 0.8em;
  margin: 1em;
  width: 10em;
}

#daibutsu img {
  width: 100%;
  background-size: cover;
  background: linear-gradient(-45deg, #3fc35f, #64b3f4);
}
#counter {
  display: inline;
  padding: 5px;
  color: white;
  font-size: 1em;
}
#counter {
  /*border: solid white;
  animation: flash 2s ease infinite;
  font-size: 1.5em;*/
}
.navBotton {
  padding: 10px;
  color: gray;
  fill: gray;
}
.active {
  background-image: linear-gradient(45deg, #4facfe 0%, #3fc35f 100%);
  border-radius: 25px;
  fill: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
}
.title {
  background-image: linear-gradient(to right, #4facfe, #3fc35f);
  background-repeat: no-repeat;
  background-size: 100% 10%;
  background-position: bottom;
}
.floating {
  color: rgb(65, 65, 65);
}
.VueCarousel-slide {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #fff;
  box-sizing: border-box;
  padding-bottom: 10px;
}
.VueCarousel {
  margin: 1em 2em 1em 2em;
}
@keyframes flash {
  50% {
    opacity: 0.6;
  }
}
.horizon-list {
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  padding: 0;
}
.h-item {
  /* 横スクロール用 */
  display: inline-block;
  width: auto;
}
.bottom-card {
  max-width: 400px;
}
.card-text {
  padding: 0 !important;
  margin: 0;
  text-align: initial;
}
@media (max-width: 1170px) {
  .VueCarousel {
    margin: 0;
  }
  .f-area {
    justify-content: center;
    padding: 0;
  }
  .f-content {
    width: 100%;
    height: 70%;
    padding: 0.5em;
    max-width: 90%;
  }
  .center {
    text-align: center;
  }
  .horizon-list {
    margin-left: -10px;
  }
}
</style>
