<template>
  <div class="content">
    <div class="top-text">
      <h2 class="subtitle">イベント情報</h2>
      <p>MissionDay高岡で開催されるイベント情報です。</p>
    </div>
    <div class="card-list">
      <d-card v-for="item in posts" :key="item.sys.id" class="event-card">
        <img
          :src="item.fields.cover.fields.file.url + '?fit=thumb&f=top&h=270&w=500&q=80'"
          class="card-img-top"
        />
        <div class="title-badge">
          <d-badge v-if="item.fields.badge" pill :theme="item.fields.badge[0]">{{item.fields.badge[1]}}</d-badge>
        </div>
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
    return { title: "イベント｜" };
  },
  async asyncData({ env }) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: "event",
        order: "fields.ordernumber"
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
.card-img-top {
  border-radius: 10px 10px 0 0;
}
.title-badge{
  padding: 10px 0px 0px 30px;
  margin-bottom: -25px;
}
@media (max-width: 875px) {
  .event-card {
    width: 90%;
  }
}
</style>
