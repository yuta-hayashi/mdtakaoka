<template>
  <div class="content">
    <div class="top-text">
      <h2>ミッション一覧</h2>
      <p>それぞれのミッションの地図や詳細を掲載しています。</p>
    </div>
    <card-list :posts="posts" :page="page"></card-list>
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
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: "mission",
        order: "-sys.updatedAt"
      })
    ])
      .then(([posts]) => {
        // return data that should be available
        // in the template
        //console.log(posts.items);
        return {
          posts: posts.items,
          page: "mission"
        };
      })
      .catch(console.error);
  }
};
</script>