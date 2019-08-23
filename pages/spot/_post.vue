<template>
  <div class="content">
    <h1 class="title">{{title}}</h1>
    <div v-html="post" class="post"></div>
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
      `<img src="${fields.file.url+'&q=80'}" alt="${fields.description}" class="post-img"/>`
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
          title: entrie.fields.title,
          post: documentToHtmlString(entrie.fields.article, options)
        };
      })
      .catch(console.error);
  },
  head() {
    return { title: this.title + " | " };
  }
};
</script>

<style scoped>
.title {
  padding: 10px;
}
.post {
  margin: 0 5%;
}
.post-img {
  width: 80%;
  max-width: 800px;
}
</style>
