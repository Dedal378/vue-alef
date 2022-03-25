<script setup>
defineProps({
  title: {
    type: String,
    required: false,
  }
})
</script>

<template>
  <h3 v-if="title" class="card__title">{{ title }}</h3>
</template>

<style lang="scss" scoped>
.card__title {
  display: inline-flex;
  margin-bottom: 15px;
}
</style>
