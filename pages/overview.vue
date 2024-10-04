<template>

    <div class="overview">
        <div class="overview-title">
            <h2>企業概要</h2>
            <h4>Company Profile</h4>
        </div>

        <dl>
            <dt>会社名</dt>
            <dd>キャリアバース株式会社</dd>

            <dt>設立</dt>
            <dd>2024年9月</dd>

            <dt>代表取締役</dt>
            <dd>三枝 大貴</dd>

            <dt>事業内容</dt>
            <dd>
                <ol>
                    <li>経営コンサルティング業務</li>
                    <li>各種マーケティングリサーチ業務</li>
                    <li>企業の営業に関するコンサルティング業務</li>
                    <li>人材育成に関するコンサルティング業務</li>
                    <li>アウトソーシング事業の受託及び請負</li>
                    <li>Webサイトの企画、制作、販売、運営及び管理</li>
                    <li>前各号に附帯又は関連する一切の事業</li>
                </ol>
            </dd>

            <dt>本社</dt>
            <dd>東京都中野区</dd>

            <dt>メールアドレス</dt>
            <dd>xxxxyyyy@gmail.com</dd>
        </dl>

    </div>
    
</template>

<style scoped>
* {
    margin: 0 auto;
    width: 70%;
}
.overview {
    margin-top: 100px;
}
.overview-title {
    margin-bottom: 3rem;
    padding-bottom: 1rem;
    text-align: center;
    border-bottom: 1px solid rgba(128, 128, 128, 0.7);
}
dt{
  float: left;
  text-align: center;
  font-weight: bold;
  width: 35%;
}
dd {
    width: 65%;
    margin-bottom: 2rem;
    display: inline-block; /* ddをインラインブロックにしてdtと並べる */
    vertical-align: top; /* 垂直方向にdtと揃える */
}

/* olのリセット */
ol {
    padding-left: 0; /* 左のインデントをリセット */
    margin-left: 0; /* 左のマージンをリセット */
    list-style-position: inside; /* 番号をリスト内に収める */
}

/* liのスタイル調整 */
li {
    margin-left: 0;
    padding-left: 0.5rem;
}
</style>