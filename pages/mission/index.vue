<template>
  <div class="content">
    <div id="top-text">
      <h2>ミッション一覧</h2>
      <p>それぞれのミッションの地図や詳細を掲載しています。</p>
    </div>
    <div class="cards">
      <d-card>
        <d-card-img src="https://tools.arashichang.com/300x200/cccccc/ffffff.png" top />
        <d-card-body title="ミッション1">
          <p>ミッションについて...</p>
          <d-btn>Read more &rarr;</d-btn>
        </d-card-body>
      </d-card>

      <d-card>
        <d-card-img src="https://tools.arashichang.com/300x200/cccccc/ffffff.png" top />
        <d-card-body title="ミッション2">
          <p>ミッションについて...</p>
          <d-btn>Read more &rarr;</d-btn>
        </d-card-body>
      </d-card>

      <d-card>
        <d-card-img src="https://tools.arashichang.com/300x200/cccccc/ffffff.png" top />
        <d-card-body title="ミッション3">
          <p>ミッションについて...</p>
          <d-btn>Read more &rarr;</d-btn>
        </d-card-body>
      </d-card>
    </div>
  </div>
</template>

<style>
.cards{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
