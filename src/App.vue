<script setup>
import { RouterView } from 'vue-router'
import AppNav from './components/common/AppNav.vue';
</script>

<template>
  <AppNav v-if="!$route.meta.hideNavbar" />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
