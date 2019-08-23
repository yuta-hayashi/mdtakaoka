<template>
  <div class="content">
    <div class="top-text">
      <h2 class="subtitle">イベント情報</h2>
      <p>MissionDay高岡で開催されるイベント情報です。</p>
    </div>
    <div class="card-list">
      <d-card v-for="item in posts" :key="item.sys.id" class="event-card">
        <d-card-img :src="item.fields.cover.fields.file.url + '?fit=thumb&f=top&h=270&w=500'" top />
        <d-card-body :title="item.fields.title">
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
      `<img src="${fields.file.url}" alt="${fields.description}" class="post-img"/>`
  }
};

export default {
  head() {
    return { title: "イベント｜" };
  },
  async asyncData({ env }) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: "event",
        order: "sys.updatedAt"
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
  flex-wrap: wrap;
  justify-content: center;
}
.event-card {
  margin: 30px;
  width: 70%;
  max-width: 500px;
}
.card-title {
  font-weight: bold;
}
.post-img {
  width: 100%;
}
@media (max-width: 875px) {
  .event-card {
    width: 90%;
  }
}
</style>
