<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink :to="{name: 'home'}">Home</RouterLink> |
    <RouterLink :to="{name: 'login'}">Login</RouterLink> |
  </nav>
  <RouterView />
</template>

<style scoped>

</style>