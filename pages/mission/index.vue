<template>
  <div class="content">
    <div class="top-text">
      <h2 class="subtitle">ミッション</h2>
      <p>ミッションの見どころを紹介しています。</p>
    </div>
    <div class="card-list">
      <d-card v-for="item in posts" :key="item.sys.id" class="card">
        <d-card-img :src="item.fields.cover.fields.file.url+'?fit=thumb&f=top&h=270&w=500'" top />
        <d-card-body :title="item.fields.title">
          <div v-html="item.fields.article" class="post"></div>
        </d-card-body>
      </d-card>
    </div>
  </div>
</template>

<script>
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
      `<img src="${fields.file.url}" alt="${fields.description}" class="post-img"/>`
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
        console.log(posts.items);
        return {
          posts: posts.items
        };
      })
      .catch(console.error);
  }
};
</script>


<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  margin: 30px;
  width: 60%;
  max-width: 550px;
}
.card-title {
  font-weight: bold;
}
@media (max-width: 875px) {
  .card {
    width: 90%;
  }
}
</style>
