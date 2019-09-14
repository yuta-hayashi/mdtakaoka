<template>
  <div class="content">
    <div class="top-text">
      <h2 class="subtitle">ミッション</h2>
      <p>ミッションの見どころを紹介しています。</p>
    </div>
    <div class="card-list">
      <MissionCards
        v-for="card in posts"
        :key="card.sys.id"
        :cover="card.fields.cover.fields.file.url"
        :medalImage="[card.fields.medalImage?card.fields.medalImage.fields.file.url:'']"
        :title="card.fields.title"
        :body="card.fields.article"
      ></MissionCards>
    </div>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { INLINES, BLOCKS } from "@contentful/rich-text-types";
import MissionCards from "~/components/MissionCards.vue";

const client = createClient();
const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, next) =>
      `<a href=${
        node.data.uri
      } target="_blank" rel="noreferrer noopener">${next(node.content)}</a>`,
       [BLOCKS.EMBEDDED_ASSET]: (node) =>
      `<img src="${node.data.target.fields.file.url+'?fm=jpg&q=50'}" class="post-img"/>`
  }
};

export default {
  head() {
    return { title: "ミッション｜" };
  },
  async asyncData({ env }) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: "mission",
        order: "fields.ordernumber"
      })
    ])
      .then(([posts]) => {
        // return data that should be available
        // in the template
        //console.log(posts.items[0].fields.content);
        posts.items.map(function(value) {
          value.fields.article = documentToHtmlString(
            value.fields.article,
            options
          );
        });
        //console.log(posts.items);
        return {
          posts: posts.items
        };
      })
      .catch(console.error);
  },
  components: { MissionCards }
};
</script>


<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
