<template>
  <div class="content">
    <h1 hidden>MissionDay 高岡 特設サイト</h1>
    <div id="top" class="bg-back">
      <img src="~/assets/img/logo2.svg" id="logo2" />
      <h2 class="subtitle">北陸初となるMissonDayが富山県高岡市で開催決定！</h2>
      <h3 id="counter">開催まで、あと{{ days }}日</h3>
    </div>

    <div v-for="item in posts" :key="item.sys.id" class="f-area">
      <div class="f-content">
        <img :src="item.fields.cover.fields.file.url+'?fm=jpg&q=80'" class="f-img" />
      </div>
      <div class="f-content">
        <h2>{{item.fields.title}}</h2>
        <div v-html="item.fields.content" class="post"></div>
      </div>
    </div>
    <div id="daibutsu">
      <img src="~/assets/img/daibutsu.jpg" />
    </div>
    <div class="info">
      <h4>最新情報を更新中⚡</h4>
      <p>
        このサイトではミッション情報や観光スポットなどを掲載していきます。
        <br />また、TwitterやTelegramを通じて最新情報をお届けしています！ぜひご活用ください。
      </p>
      <div class="info-btn">
        <a href="https://twitter.com/mdtakaoka" class="navBotton active">Twitterアカウント</a>
        <a href="https://t.me/joinchat/AAAAAFQj7GWHVx469bwPLA" class="navBotton active">Telegramチャネル</a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { createClient } from "~/plugins/contentful.js";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const client = createClient();
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: ({
      data: {
        target: { fields }
      }
    }) =>
      `<img src="${fields.file.url+'?fm=jpg&q=80'}" alt="${fields.description}" class="post-img"/>`
  }
};

export default {
  head() {
    return {
      __dangerouslyDisableSanitizers: ["script"],
      title:"",
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
      "streetAddress": "１−８",
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
}
#counter {
  border: solid white;
  animation: flash 2s ease infinite;
  font-size: 1.5em;
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
@keyframes flash {
  50% {
    opacity: 0.3;
  }
}
@media (max-width: 1170px) {
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
}
</style>
