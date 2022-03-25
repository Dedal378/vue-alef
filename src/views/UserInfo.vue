<script setup>
import BaseCard from '../components/BaseCard.vue'

defineProps({
  name: {
    type: String,
    required: false,
  },
  children: {
    type: [String, Array],
    required: false,
  },
})
</script>

<template>
  <BaseCard>
    <h3 class="user__title">Персональные данные</h3>
    <h2 class="user__item">Василий, 30 лет</h2>

    <div class="data">
      <h3 class="data__title">Дети</h3>
      <h2 class="data__item">Петр, 10 лет</h2>
      <h2 class="data__item">Василий, 14 лет</h2>
    </div>
  </BaseCard>
</template>

<style lang="scss" scoped>
.user {
  &__title {
    margin-bottom: 20px;
  }
}

.data {
  margin-top: 60px;

  &__title {
    margin-bottom: 20px;
  }

  &__item {
    max-width: fit-content;
    margin-bottom: 20px;
    padding: 10px 20px;
    color: #000;
    background: #f1f1f1;
    border-radius: 5px;
  }
}
</style>
