<template>
  <div id="navigation">
    <div id="navigations">
      <nuxt-link to="/">
        <img src="~/assets/icon/home.svg" /><span>ホーム</span>
      </nuxt-link>
      <nuxt-link to="/mission">
        <img src="~/assets/icon/map.svg" /><span>ミッション</span>
      </nuxt-link>
      <nuxt-link to="/spot">
        <img src="~/assets/icon/star.svg" /><span>おすすめ</span>
      </nuxt-link>
      <nuxt-link to="/help">
        <img src="~/assets/icon/help.svg" /><span>ヘルプ</span>
      </nuxt-link>
    </div>
  </div>
</template>
​
<style>
#navigation {
  background-color: gray;
  padding: 1em;
  position: fixed;
  margin: 0 0 0 auto;
  z-index: 1;
  width: 100%;
}
#navigations{
  background-color: red;
  text-align: right;
}

@media (max-width: 400px) {
  #navigation {
    position: fixed;
    bottom: 0;
  }
  #navigations{
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  span{
    display: block;
  }
}
</style>