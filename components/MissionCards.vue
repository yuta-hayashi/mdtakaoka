<template>
  <d-card>
    <img :src="cover+'?fit=thumb&f=top&h=270&w=500&q=80'" class="card-img-top" />
    <d-card-body>
      <img
        v-if="medalImage!=''"
        :src="medalImage+'?r=180&h=100&w=100&q=80'"
        class="card-medal"
      />
      <h4 class="card-title">{{title}}</h4>
      <div v-html="body" class="post"></div>
    </d-card-body>
  </d-card>
</template>

<script>
export default {
  props: {
    cover: {
      type: String,
      required: false
    },
    medalImage: {
      type: Array,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  margin: 30px;
  width: 60%;
  max-width: 550px;
}
.card-title {
  font-weight: bold;
}
.card-img-top {
  border-radius: 10px 10px 0 0;
}
.card-medal {
  width: 5em;
  height: 5em;
  display: block;
  margin-left: auto;
  margin-top: -5em;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));
}
@media (max-width: 875px) {
  .card {
    width: 90%;
  }
}
</style>