<template>
  <Header />
  <main class="">
    <RouterView />
  </main>
</template>
<style>
@import "@unocss/reset/tailwind.css";
</style>
<script setup>
import Header from "./components/Header.vue";
import { useRouter } from "vue-router";
import NProgress from "nprogress";

const router = useRouter();

router.beforeEach((from, to) => {
  if (from.path !== to.path) {
    NProgress.start();
  }
});
</script>
