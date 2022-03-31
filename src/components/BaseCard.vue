<script setup>
import BaseTitle from './BaseTitle.vue'

defineProps({
  title: {
    type: String,
    required: false,
  }
})
</script>

<template>
  <div class="card">
    <BaseTitle :title="title" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 616px;
  min-height: 166px;
  margin-bottom: 33px;
}
</style>
