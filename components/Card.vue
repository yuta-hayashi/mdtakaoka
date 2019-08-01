<template>
  <d-card>
    <d-card-img :src="cover+'?fit=thumb&f=top&h=230&w=400'" top />
    <d-card-body :title="title">
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
    page:{
      type: String,
      required:true
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    postUrl: function() {
      return "/"+this.page+"/" + this.id;
    }
  }
};
</script>

<style>
.card {
  margin: 30px;
  max-width: 450px;
}
</style>
