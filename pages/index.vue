<template>
  <div id="content">
    <h1>This is Home</h1>
    <card-list :posts="posts"></card-list>
  </div>
</template>

<script>
import CardList from "~/components/CardList.vue";

import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
  components: {
    CardList
  },
  async asyncData({ env }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        "sys.id": env.CTF_PERSON_ID
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-sys.createdAt"
      })
    ])
      .then(([posts]) => {
        // return data that should be available
        // in the template
        console.log(posts.items);
        return {
          posts: posts.items
        };
      })
      .catch(console.error);
  }
};
</script>

<style>
#content {
  padding: 5%;
}
</style>