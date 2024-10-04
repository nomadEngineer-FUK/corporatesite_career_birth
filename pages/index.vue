<script setup lang="ts">
import Container from '~/components/Container.vue';
import HeaderView from '../components/HeaderView.vue';

</script>
<template>

    <div class="main">

        <HeaderView></HeaderView>

        <div class="container">

            <Container></Container>
            
        </div>
            

        <!-- <NuxtLink to="/Outline.vue"></NuxtLink> -->
    </div>

</template>

<style scoped>
.container {
    margin: 0 auto;
    width: 80%;
}
</style>