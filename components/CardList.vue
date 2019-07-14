<template>
  <div class="card-list">
    <card
      class="card"
      v-for="post in posts"
      :title="post.fields.title"
      :cover="post.fields.cover.fields.file.url"
      :category="post.fields.category"
      :date="post.sys.updatedAt"
      :key="post.sys.id"
    ></card>
  </div>
</template>

<script>
import Card from "~/components/Card.vue";

export default {
  components: { Card },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>
