<script setup>
import AppHeader from "./components/AppHeader";
</script>

<template>
  <AppHeader />
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-4">
    <router-view />
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
