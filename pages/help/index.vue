<template>
  <div class="content">
    <div id="top-text">
      <h2>ヘルプ</h2>
      <p>よくある質問と答えを掲載しています。</p>
    </div>
    <div>
      <d-card class="mb-1">
        <d-card-header class="px-3 py-2" role="tab">
          <d-btn
            block-level
            size="small"
            theme="secondary"
            href="#"
            v-d-toggle.accordion1
          >県外から高岡市への移動時間の目安</d-btn>
        </d-card-header>
        <d-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
          <d-card-body>
            <p class="card-text">主要都市からの目安時間は以下のようになります。</p>
            <p>
              東京： 車で約５時間半・新幹線で最速２時間２１分
              <br />大阪： 車で約４時間半・電車で約３時間
              <br />名古屋： 車で約３時間半・電車で約３時間
            </p>
          </d-card-body>
        </d-collapse>
      </d-card>

      <d-card class="mb-1">
        <d-card-header class="px-3 py-2" role="tab">
          <d-btn
            block-level
            size="small"
            theme="secondary"
            href="#"
            v-d-toggle.accordion2
          >参加方法は？</d-btn>
        </d-card-header>
        <d-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
          <d-card-body>
            <p
              class="card-text"
            >近日公開予定</p>
          </d-card-body>
        </d-collapse>
      </d-card>

      <d-card class="mb-1">
        <d-card-header class="px-3 py-2" role="tab">
          <d-btn
            block-level
            size="small"
            theme="secondary"
            href="#"
            v-d-toggle.accordion3
          >質問３</d-btn>
        </d-card-header>
        <d-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
          <d-card-body>
            <p
              class="card-text"
            >回答。。。。</p>
          </d-card-body>
        </d-collapse>
      </d-card>
    </div>
  </div>
</template>

<style>
h2 {
  color: gray;
}
#top-text{
  margin: 5%;
}
</style>
