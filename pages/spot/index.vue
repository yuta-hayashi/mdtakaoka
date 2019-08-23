<template>
  <div class="content">
    <div class="top-text">
      <h2 class="subtitle">おすすめスポット</h2>
      <p>地元のお店や見所などを紹介していきます。</p>
    </div>
    <card-list :posts="posts" :page="page"></card-list>
  </div>
</template>

<script>
import CardList from "~/components/CardList.vue";

import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
  head() {
    return { title: "おすすめ｜" };
  },
  components: {
    CardList
  },
  async asyncData({ env }) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: "post",
        order: "-sys.updatedAt"
      })
    ])
      .then(([posts]) => {
        // return data that should be available
        // in the template
        //console.log(posts.items);
        return {
          posts: posts.items,
          page: "spot"
        };
      })
      .catch(console.error);
  }
};
</script>