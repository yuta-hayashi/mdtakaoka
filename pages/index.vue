<template>
  <div class="content">
    <h1 hidden>MissionDay 高岡 特設サイト</h1>
    <div id="top" class="bg-back">
      <img src="~/assets/img/logo2.svg" id="logo2" />
      <h2 class="subtitle">北陸初となるMissonDayが富山県高岡市で開催決定！</h2>
    </div>
    <div class="f-area">
      <img src="~/assets/img/map.jpg" class="f-content" />
      <div class="f-content">
        <h2>高岡市について</h2>
        <p>富山県高岡市は富山県北西部に位置する400年以上の歴史がある街です。</p>
        <p>
          1609年に加賀藩二代藩主前田利長が高岡城を築き開き、現在は銅器や漆器など「ものづくりのまち」として発展してきました。
          <br />またイケメンと名高い高岡大仏、国宝瑞龍寺など歴史と文化が交差する工芸都市です。
        </p>
        <p>さらに、万葉集と深い関わりがあり「万葉のふるさと」とも呼ばれています。新元号である『令和』は万葉集から出典されています。 令和元年に高岡市へどうぞお越しください。</p>
      </div>
    </div>
    <div id="daibutsu">
      <img src="~/assets/img/daibutsu.jpg" />
    </div>
    <div class="info">
      <h2>最新情報を更新中⚡</h2>
      <p>
        このサイトではミッション情報や観光スポットなどを掲載していきます。
        <br />また、TwitterやTelegramを通じて最新情報をお届けしています！ぜひご活用ください。
      </p>
      <div class="info-btn">
        <a href="https://twitter.com/mdtakaoka" class="navBotton active">Twitterアカウント</a>
        <a href="https://t.me/joinchat/AAAAAFQj7GWHVx469bwPLA" class="navBotton active">Telegramチャネル</a>
      </div>
    </div>
  </div>
</template>

<style>
#top {
  text-align: center;
  padding: 2em;
  margin: 0 !important;
}
#logo2 {
  width: 90%;
  max-width: 800px;
  margin-bottom: 2em;
}
.subtitle {
  color: white;
  font-size: 1.5em;
}
#about {
  padding: 1em;
  text-align: center;
  display: block;
}
#map {
  width: 100%;
  max-width: 600px;
}
.textbox {
  padding: 10px;
  text-align: left;
}
.f-area h2 {
  font-weight: bold;
  color: rgb(65, 65, 65);
}
.f-area {
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
  justify-content: center;
}
.f-content {
  max-width: 550px;
  padding: 1em;
}
.info h2 {
  font-weight: bold;
  padding: 1em;
}
.info {
  text-align: center;
}
.info-btn {
  display: flex;
  justify-content: center;
}
.info-btn a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 0.8em;
  margin: 1em;
}

#daibutsu img {
  width: 100%;
  background-size: cover;
  background: linear-gradient(-45deg, #3fc35f, #64b3f4);
}
@media (max-width: 1200px) {
  .f-area {
    justify-content: center;
  }
  .f-content {
    max-width: 80%;
  }
}
</style>
