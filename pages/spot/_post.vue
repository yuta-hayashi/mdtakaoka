<template>
  <div class="content">
    <h1>{{title}}</h1>
    <div v-html="post"></div>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const client = createClient();


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
        console.log(params.post);
        console.log(entrie.fields.article);
        return {
          title: entrie.fields.title,
          post: documentToHtmlString(entrie.fields.article)
        };
      })
      .catch(console.error);
  }
};
</script>
