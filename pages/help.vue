<template>
  <div class="content">
    <div class="top-text">
      <h2 class="subtitle">ヘルプ</h2>
      <p>よくある質問と答えを掲載しています。</p>
    </div>
    <div class="card-list">
      <d-card v-for="item in posts" :key="item.sys.id" class="card">
        <d-card-header class="card-title">{{item.fields.title}}</d-card-header>
        <d-card-body>
          <div v-html="item.fields.content" class="post"></div>
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
      `<img src="${fields.file.url+'?fm=jpg&q=50'}" alt="${fields.description}" class="post-img"/>`
  }
};

export default {
  head() {
    return { title: "ヘルプ｜" };
  },
  async asyncData({ env }) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: "help",
        order: "-sys.updatedAt"
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
.card-list {
  display: flex;
  flex-wrap:wrap;
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
  .card{
    width: 90%;
  }
}
</style>
