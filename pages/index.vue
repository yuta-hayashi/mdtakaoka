<template>
  <div class="content">
    <h1 hidden>MissionDay 高岡 特設サイト</h1>
    <div id="top" class="bg-back">
      <img src="~/assets/img/logo2.svg" id="logo2" />
      <h2>北陸初となるMissonDayが富山県高岡市で開催決定！</h2>
    </div>
    <div id="about">
      <img src="~/assets/img/map.jpg" id="map" />
      <div class="textbox">
        <h3>高岡市について</h3>
        <p>富山県高岡市は富山県北西部に位置する400年以上の歴史がある街です。</p>
        <p>
          1609年に加賀藩二代藩主前田利長が高岡城を築き開き、現在は銅器や漆器など「ものづくりのまち」として発展してきました。
          <br />またイケメンと名高い高岡大仏、国宝瑞龍寺など歴史と文化が交差する工芸都市です。
        </p>
        <p>さらに、万葉集と深い関わりがあり「万葉のふるさと」とも呼ばれています。新元号である『令和』は万葉集から出典されています。 令和元年に高岡市へどうぞお越しください。</p>
      </div>
    </div>
  </div>
</template>

<style>
#top {
  text-align: center;
  padding: 2em;
  margin: 0!important;
}
#logo2 {
  width: 90%;
  max-width: 800px;
  margin-bottom: 2em;
}
h2 {
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
.textbox{
  padding: 10px;
  text-align: left;
}

</style>
