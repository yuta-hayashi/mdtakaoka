<template>
    <d-card>
      <img :src="cover+'?fit=thumb&f=top&h=270&w=500'" class="card-img-top"/>
      <d-card-body :title="title">
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
.card-img-top{
  border-radius: 10px 10px 0 0;
}
@media (max-width: 875px) {
  .card {
    width: 90%;
  }
}
</style>