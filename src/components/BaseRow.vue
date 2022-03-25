<script setup>
import BaseTitle from './BaseTitle.vue'

defineProps({
  title: {
    type: String,
    required:false,
  }
})
</script>

<template>
  <div class="row">
    <BaseTitle :title="title" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  column-gap: 18px;
  margin-bottom: 10px;

  @media (max-width: 520px) {
    row-gap: 10px;
    margin-bottom: 30px;
  }

  .input-block {
    flex: 1 1 auto;
  }
}
</style>
