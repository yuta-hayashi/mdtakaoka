<template>
  <d-card>
    <d-card-img :src="cover" top />
    <d-card-body :title="title">
      <p>{{category}}</p>
      <n-link :to="postUrl">
        <d-btn theme="primary">Read more &rarr;</d-btn>
      </n-link>
    </d-card-body>
    <d-card-footer>{{date}}</d-card-footer>
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
      required: true
    },
    date: {
      type: String,
      required: true
    },
  },
  computed:{
    postUrl:function(){
      return "/spot/"+this.title
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
