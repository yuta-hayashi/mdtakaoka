<template>
  <div>
    <header>
      <h1>Ingressをダウンロード</h1>
      <img src="~/assets/img/ingress.png" class="prime" />
    </header>
    <div class="center">
      <a href="https://apps.apple.com/jp/app/ingress-prime/id576505181?mt=8">
        <img src="~/assets/img/app-store.png" />
      </a>
    </div>
    <div class="center">
      <a href="https://play.google.com/store/apps/details?id=com.nianticproject.ingress">
        <img src="~/assets/img/google-play-badge.png" />
      </a>
    </div>
    <div class="center">
      <a href="https://mdtakaoka.info" class="btn-gradient-radius">MD高岡特設サイトへ</a>
    </div>

    <!-- Start footer -->
    <footer id="footer">
      <div class="container">
        <div class="mu-footer-area">
          <div class="mu-footer-bottom">
            <p class="mu-copy-right">
              &copy;mdtakaoka.info
              All right reserved.
              <a
                href="https://mdtakaoka.info/policy.html"
                target="_blank"
                style="font-weight: 0;"
              >
                privacy
                policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  background-color: #0a0203;
  color: aliceblue;
}

h1 {
  font-family: sans-serif;
  color: white;
  padding: 1em;
}

header {
  text-align: center;
}

footer {
  text-align: center;
  bottom: 0;
  font-size: 0.8em;
}

.prime {
  width: 50%;
}

a {
  color: aliceblue;
}

.center {
  text-align: center;
}
img {
  width: 80%;
}

.btn-gradient-radius {
  display: inline-block;
  padding: 8px 20px;
  border-radius: 25px;
  text-decoration: none;
  color: #fff;
  background-image: linear-gradient(45deg, #4facfe 0%, #3fc35f 100%);
  transition: 0.4s;
  margin: 10px;
}

.btn-gradient-radius:hover {
  background-image: linear-gradient(45deg, #3fc35f 0%, #4facfe 100%);
}
</style>

<script>
export default {
  layout: "noNavigation"
};
</script>
