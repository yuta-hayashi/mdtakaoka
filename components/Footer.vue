<template>
  <div class="footer">
    <p>&copy; 2019 MissionDay高岡 実行委員会, <n-link to="/policy" class="link">サイト規約</n-link></p>
  </div>
</template>

<style scoped>
.link {
  color: gray;
}
.footer p {
  margin: 0;
}
.footer {
  margin-top: 3em;
  padding: 10px;
  text-align: center;
  background-color: #f3f3f3;
}
@media (max-width: 875px) {
  .footer {
    padding-bottom: 4em;
  }
}
</style>
