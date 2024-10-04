<template>
    <div class="card-wrap">
        <h3 class="card-header" id="introduce">メンバー紹介</h3>

        <div class="card-group">
            <NuxtLink to="/profile1" class="card-link">
                <div class="card">
                    <img src="/public/images/profileIcon_men1.jpg" alt="Profile Picture. 1" class="card__imgframe">
                    <div class="card__textbox">
                        <div class="card__titletext">三枝 大貴（代表）</div>
                        <div class="card__overviewtext">概要がはいります。概要がはいります。概要がはいります。概要がはいります。</div>
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/profile2" class="card-link">
                <div class="card">
                    <img src="/public/images/profileIcon_men2.jpg" alt="Profile Picture. 2" class="card__imgframe">
                    <div class="card__textbox">
                        <div class="card__titletext">長谷正大</div>
                        <div class="card__overviewtext">概要がはいります。概要がはいります。概要がはいります。概要がはいります。</div>
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/profile3" class="card-link">
                <div class="card">
                    <img src="/public/images/profileIcon_woman1.jpg" alt="Profile Picture. 3" class="card__imgframe">
                    <div class="card__textbox">
                        <div class="card__titletext">古橋有紀</div>
                        <div class="card__overviewtext">概要がはいります。概要がはいります。概要がはいります。概要がはいります。</div>
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/profile4" class="card-link">
                <div class="card">
                    <img src="/public/images/profileIcon_woman2.jpg" alt="Profile Picture. 4" class="card__imgframe">
                    <div class="card__textbox">
                        <div class="card__titletext">北野絢</div>
                        <div class="card__overviewtext">概要がはいります。概要がはいります。概要がはいります。概要がはいります。</div>
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink to="/profile5" class="card-link">
                <div class="card">
                    <img src="/public/images/profileIcon_men3.jpg" alt="Profile Picture. 5" class="card__imgframe">
                    <div class="card__textbox">
                        <div class="card__titletext">飯野 義之（アドバイザー）</div>
                        <div class="card__overviewtext">概要がはいります。概要がはいります。概要がはいります。概要がはいります。</div>
                    </div>
                </div>
            </NuxtLink>

        </div>
    </div>
</template>

<style scoped>
/* ABOUTボタンを押下された時に遷移するページがヘッダーに隠れるのを防ぐ */
#introduce {
    padding-top: 140px;
    margin-top: -50px;
}
.card-wrap {
    width: 65%;
    margin: 0 auto;   
}
.card-header {
    text-align: center;
    margin: 2rem 0;
}

/* カードのグループを等間隔に並べる */
.card-group {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px; /* カード同士の間隔 */
    display: grid;
    grid-template-columns: repeat(auto-fill, 48%);
}

/* カード自体のサイズ設定 */
.card-link {
    flex: 1 1 calc(50% - 20px); /* 2列に並べる設定 */
    margin-bottom: 20px;
}

/* カード全体のデザイン */
.card {
    /* width: calc((100% - 4% * 1) / 2); */
    width: 70%;
    transform: translateX(20%);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* 画像枠 */
.card__imgframe {
    width: 100%;
}

/* テキストボックス */
.card__textbox {
    padding: 20px;
    background: #fff;
}

.card__titletext {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.card__overviewtext {
    font-size: 12px;
    line-height: 1.5;
}
</style>
