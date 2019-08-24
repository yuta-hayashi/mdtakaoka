<template>
  <div class="post-content">
    <div class="content">
      <img :src="cover+'?fm=jpg&q=50'" class="post-img cover-img" />
      <h2 class="title">{{title}}</h2>
      <div v-html="post" class="post"></div>
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
        "?fm=jpg&q=80"}" class="post-img shadow"/>`
  }
};

export default {
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  transition: "slide-right",
  async asyncData({ env, params }) {
    return await client
      .getEntry(params.post)
      .then(entrie => {
        //console.log(entrie.fields.article);
        return {
          cover: entrie.fields.cover.fields.file.url,
          title: entrie.fields.title,
          post: documentToHtmlString(entrie.fields.article, options)
        };
      })
      .catch(console.error);
  },
  head() {
    return { title: this.title + " | " };
  },
  transitions: {
    name: "page",
    mode: "out-in"
  }
};
</script>

<style scoped>
.content {
  width: 60%;
}
.post-content {
  display: flex;
  justify-content: center;
}
.title {
  padding: 10px;
  font-weight: bold;
}
.post {
  margin: 0 5%;
}
.shadow {
  box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
    0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
    0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
    0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
}
.cover-img {
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
@media (max-width: 875px) {
  .content {
    width: 100%;
  }
}
</style>
