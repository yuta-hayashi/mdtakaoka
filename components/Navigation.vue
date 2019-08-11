<template>
  <div id="navigation">
    <nuxt-link to="/">
      <h1 id="title">MissionDay 高岡</h1>
    </nuxt-link>
    <div id="navigations">
      <nuxt-link
        to="/"
        class="navBotton home"
        :class="{'active': isRouteActive }"
        exact-active-class="active"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path
            d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
          />
        </svg>
        <span>ホーム</span>
      </nuxt-link>
      <nuxt-link to="/mission" class="navBotton mission" active-class="active">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path
            d="M14.65 4.98l-5-1.75c-.42-.15-.88-.15-1.3-.01L4.36 4.56C3.55 4.84 3 5.6 3 6.46v11.85c0 1.41 1.41 2.37 2.72 1.86l2.93-1.14c.22-.09.47-.09.69-.01l5 1.75c.42.15.88.15 1.3.01l3.99-1.34c.81-.27 1.36-1.04 1.36-1.9V5.69c0-1.41-1.41-2.37-2.72-1.86l-2.93 1.14c-.22.08-.46.09-.69.01zM15 18.89l-6-2.11V5.11l6 2.11v11.67z"
          />
        </svg>
        <span>ミッション</span>
      </nuxt-link>
      <nuxt-link to="/spot" class="navBotton spot" active-class="active">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path
            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.23 15.39L12 15.45l-3.22 1.94c-.38.23-.85-.11-.75-.54l.85-3.66-2.83-2.45c-.33-.29-.15-.84.29-.88l3.74-.32 1.46-3.45c.17-.41.75-.41.92 0l1.46 3.44 3.74.32c.44.04.62.59.28.88l-2.83 2.45.85 3.67c.1.43-.36.77-.74.54z"
          />
        </svg>
        <span>おすすめ</span>
      </nuxt-link>
      <nuxt-link to="event" class="navBotton" active-class="active">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M22.42 11.34l-1.86-2.12.26-2.81c.05-.5-.29-.96-.77-1.07l-2.76-.63-1.44-2.43c-.26-.43-.79-.61-1.25-.41L12 3 9.41 1.89c-.46-.2-1-.02-1.25.41L6.71 4.72l-2.75.62c-.49.11-.83.56-.78 1.07l.26 2.8-1.86 2.13c-.33.38-.33.94 0 1.32l1.86 2.12-.26 2.82c-.05.5.29.96.77 1.07l2.76.63 1.44 2.42c.26.43.79.61 1.26.41L12 21l2.59 1.11c.46.2 1 .02 1.25-.41l1.44-2.43 2.76-.63c.49-.11.82-.57.77-1.07l-.26-2.81 1.86-2.12c.34-.36.34-.92.01-1.3zM13 17h-2v-2h2v2zm-1-4c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1z"
          />
        </svg>
        <span>イベント</span>
      </nuxt-link>

      <nuxt-link to="/help" class="navBotton help" active-class="active">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5c0-.46.08-.9.22-1.31.2-.58.53-1.1.95-1.52l1.24-1.26c.46-.44.68-1.1.55-1.8-.13-.72-.69-1.33-1.39-1.53-1.11-.31-2.14.32-2.47 1.27-.12.37-.43.65-.82.65h-.3C8.4 9 8 8.44 8.16 7.88c.43-1.47 1.68-2.59 3.23-2.83 1.52-.24 2.97.55 3.87 1.8 1.18 1.63.83 3.38-.19 4.4z"
          />
        </svg>
        <span>ヘルプ</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isRouteActive: function() {
      console.log("PATH ==> ", this.$nuxt.$route.path);
      if (this.$nuxt.$route.path == "/") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

​
<style scoped>
#title {
  font-size: 180%;
  margin: 0;
  font-weight: bold;
  color: #616161;
}
#navigation {
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: solid 2px #e9ecef;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 1em;
  position: fixed;
  margin: 0 0 0 auto;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#navigations {
  padding-top: 1em;
}
.navBotton {
  padding: 10px;
  color: gray;
  fill: gray;
}
.active {
  background-image: linear-gradient(45deg, #4facfe 0%, #3fc35f 100%);
  border-radius: 25px;
  fill: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
}
.active span {
  color: white;
}
span {
  padding: 5px;
}

@media (max-width: 875px) {
  #title {
    display: none;
  }
  #navigation {
    border-bottom: 0;
    border-top: solid 1px #e9ecef;
    display: block;
    position: fixed;
    bottom: 0;
    padding: 0;
    flex: none;
  }
  .navBotton {
    width: 25%;
  }
  #navigations {
    display: flex;
    text-align: center;
    padding: 0;
    margin-bottom: 3px;
  }
  .navBotton {
    padding: 6px;
  }
  .active {
    border-radius: 20px;
  }
  span {
    padding: 0;
    font-size: 0.8em;
    display: block;
    color: black;
  }
}
</style>