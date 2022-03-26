<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import TheMain from './components/TheMain.vue'
import { ref } from 'vue'
</script>

<template>
  <TheHeader />
  <TheMain />
  <TheFooter />
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
