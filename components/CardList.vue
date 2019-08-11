<template>
  <div class="card-list">
    <card
      v-for="post in posts"
      :title="post.fields.title"
      :cover="post.fields.cover.fields.file.url"
      :category="post.fields.category"
      :page="page"
      :id="post.sys.id"
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
    },
    page:{
      type:String,
      required: true
    }
  }
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
