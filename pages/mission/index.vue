<template>
  <div class="content">
    <div class="top-text">
      <h2 class="subtitle">ミッション</h2>
      <p>ミッションの見どころを紹介しています。</p>
    </div>
    <div class="card-list">
      <EventCards
        v-for="card in posts"
        :key="card.sys.id"
        :cover="card.fields.cover.fields.file.url"
        :title="card.fields.title"
        :body="card.fields.article"
      ></EventCards>
    </div>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import EventCards from "~/components/EventCards.vue";

const client = createClient();
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: ({
      data: {
        target: { fields }
      }
    }) =>
      `<img src="${fields.file.url+'?fm=jpg&q=50'}" alt="${fields.description}" class="post-img"/>`
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
  components: { EventCards }
};
</script>


<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
