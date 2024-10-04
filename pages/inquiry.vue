<script setup lang="ts">

import { inject } from "vue";

    const onSubmit = inject("onSubmit") as Function;
    
    // 問い合わせの入力内容を保持
    const inquiry = useInquiry();

    // 「確認画面」「送信画面」の制御
    const isConfirmed = useConfirmation();
    const isSubmited = useSubmit();

    // useLogic.ts から onSubmit をインポート
    // const { onSubmit } = inquiry(); 

    // Nuxt ルーターを使用してページ遷移を実装
    const router = useRouter(); // useRouterを追加

    // フォーム送信時の処理
    const handleFormSubmission = () => {
        // onSubmit 関数を実行してフォームを送信
        onSubmit();
        // 送信完了画面にリダイレクト
        router.push('/submit'); // useRouterでsubmitページに遷移
    };

    // 確認画面表示の処理
    const onConfirm = () => {
        isConfirmed.value = true;
    };

    // 戻るボタンの処理
    const goBack = (event) => {
        event.preventDefault();
        isConfirmed.value = false;
    };

    // 入力内容のバリデーション
    const validattion = () => {
        const val1 = inquiry.value.name;
        const val2 = inquiry.value.tell;
        const val3 = inquiry.value.email;
        const val4 = inquiry.value.inquiryContents;

        // 空欄の値を格納する配列
        const emptyFields = [];

        // 各値が空欄かどうかをチェック
        if (val1 === '') {
            emptyFields.push('お名前');
        }
        if (val2 === '') {
            emptyFields.push('電話番号');
        }
        if (val3 === '') {
            emptyFields.push('メールアドレス');
        }
        if (val4 === '') {
            emptyFields.push('お問い合わせ内容');
        }

        // 空欄の項目があればアラート
        if (emptyFields.length > 0) {
            alert('以下の項目が空欄です:\n' + '  ' + emptyFields.join(', '));
        } else {
            // 全て入力されていれば次の処理
            onConfirm();
        }
    }
</script>

<template>
    <div class="main-inquiry">
        <div v-if="!isConfirmed">
            <form>
                <h2 class="inquiry-title">お問い合わせ</h2>

                <label for="name">お名前 <span>必須</span></label>
                <input type="text" id="name" name="name" v-model="inquiry.name"/>

                <label for="tell">電話番号（半角） <span>必須</span></label>
                <input type="text" name="tell" id="tell" v-model="inquiry.tell"/>

                <label for="email">メールアドレス <span>必須</span></label>
                <input type="email" id="email" name="email" v-model="inquiry.email"/>

                <label for="inquiryContents">お問い合わせ内容 <span>必須</span></label>
                <textarea id="inquiryContents" name="inquiryContents" class="inquiry-contents" v-model="inquiry.inquiryContents"></textarea>

                <button type="button" class="btn btn-confirmation" @click="validattion">確認</button>
            </form>
        </div>

        <!-- 確認ボタンが押下されたらConfirm画面を表示 -->
        <div v-else>
            <form>
                <h2 class="inquiry-title">Confirm</h2>

                <table>
                    <tr>
                        <th>お名前</th>
                        <td>{{ inquiry.name }}</td>
                    </tr>
                    <tr>
                        <th>電話番号</th>
                        <td>{{ inquiry.tell }}</td>
                    </tr>
                    <tr>
                        <th>メールアドレス</th>
                        <td>{{ inquiry.email }}</td>
                    </tr>
                    <tr>
                        <th>お問い合わせ内容</th>
                        <td>{{ inquiry.inquiryContents }}</td>
                    </tr>
                </table>

                <div class="wrap-btn">
                    <button class="btn btn-submit" type="button" @click="handleFormSubmission">送信</button>

                    <button class="btn btn-back" type="button" @click="goBack">戻る</button>
                </div>
                
            </form>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: 0 auto;
    width: 70%;
}
.main-inquiry {
    margin-top: 100px;
    /* background-color: aqua; */
}

/* 入力画面 */
.inquiry-title {
    margin-bottom: 3rem;
    padding-bottom: 1rem;
    text-align: center;
    border-bottom: 1px solid rgba(128, 128, 128, 0.7);
    /* background-color: bisque; */
}
label {
    /* display: inline-block; */
    /* background-color: yellow; */
    display: block;
    margin-bottom: 0.5rem;
}
form span {
    color: #fff;
    background-color: #dc143c;
    padding: 0.1rem 0.3rem;
    border-radius: 4px;
    font-size: small;
}
form > input, form > textarea {
    min-height: 2rem;
    border-radius: 5px;
    /* width: 100%; */
    margin-bottom: 2rem;
    display: block;
}
.inquiry-contents {
    min-height: 10rem;
    resize: vertical;
}




/* 確認画面 */
table{
  width: 80%;
  /* background-color: antiquewhite; */
}

table th,
table td {
    border: 1px solid #ccc;
    padding: 20px;
}
table th{
  /* position: relative;
  text-align: left; */
    width: 30%;
    font-size: small;
    font-weight: bold;
    background-color: #dedede;
}
@media screen and (max-width: 767px) {
table,
table tr,
table td,
table th {display:block;}
table th {width:auto;}
}


/* ボタン */
.btn {
    width: 20%;
    padding: 0.5rem 0;
    border-radius: 4px;
    display: inline-block;
}
.btn:hover {
    transition: 0.3s;
}

/* 入力画面のボタン */
.btn-confirmation {
    border: 1px solid #334466;
    display: block;
    text-align: center;
}
.btn-confirmation:hover {
    background-color: #334466;
    color: #fff;
}

/* 確認画面のボタン */
.wrap-btn {
    /* text-align:center; */
    /* margin: auto; */
    display: flex;
    /* justify-content: center; */
    justify-content: flex-start;
    gap: 10px;
    margin-top: 1.5rem;
}
.btn-submit {
    /* border: 1px solid salmon; */
    background-color: #334466;
    color: #fff;
    text-align: center;
}
.btn-back {
    border: 1px solid #334466;
    /* background-color: #334466;
    color: #fff; */
}

.btn-submit:hover {
    opacity: 0.7;
}
.btn-back:hover {
    background-color: gray;
    color: #fff;
    border: 1px solid gray;
}
</style>