<script setup>
    // const onSubmit = () => {
    //     isSubmited.value = true;
    // }
</script>
<template>
    <div class="submit-container">
        <h1>お問い合わせいただきありがとうございます。</h1>
        <br>
        <h2>ご返信までしばらくお待ちください。</h2>
        <br>
        <br>
        <nuxt-link
            to="/"
            type="button"
            class="py-4 px-8 mt-8 text-lg text-gray-50 bg-green-500 hover:bg-green-600 focus:ring-green-600 focus:ring-offset-green-600 text-white transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
        >
            TOPへ戻る
        </nuxt-link>
    </div>
</template>

<style scoped>
* {
    margin: 0 auto;
    width: 70%;
    text-align: center;
}
.submit-container {
    margin-top: 150px;
}
</style>
