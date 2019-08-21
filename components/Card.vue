<template>
  <d-card>
    <d-card-img :src="cover+'?fit=thumb&f=top&h=230&w=400'" top />
    <d-card-body :title="title">
      <p>{{article.content[0].content[0].value.slice(0,20)}}...</p>
      <n-link :to="postUrl">
        <d-btn theme="primary">続きを読む &rarr;</d-btn>
      </n-link>
    </d-card-body>
    <d-card-footer v-if="category">{{category}}</d-card-footer>
  </d-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    cover: {
      type: String,
      required: false
    },
    category: {
      type: String,
      required: false
    },
    page: {
      type: String,
      required: true
    },
    article: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    postUrl: function() {
      return "/" + this.page + "/" + this.id;
    }
  }
};
</script>

<style scoped>
.card {
  margin: 30px;
  max-width: 450px;
}
</style>
