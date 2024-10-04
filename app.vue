<script setup lang="ts">
import { inquiry } from './useLogic';

  const {
    toggleConf,
    onSubmit,
    resetInquiry
  } = inquiry();

  provide("onSubmit", onSubmit);
  provide("resetInquiry", resetInquiry);

</script>

<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    
    
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
    

  </div>
</template>

<style>
*{
    box-sizing:border-box;
}
button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        padding: 0;
        appearance: none;
}

</style>
