<script setup>

</script>

<template>
  <div class="card info">
    <h3 class="user__title">Персональные данные</h3>
    <h2 class="user__item">Василий, 30 лет</h2>

    <div class="data">
      <h3 class="data__title">Дети</h3>
      <h2 class="data__item">Петр, 10 лет</h2>
      <h2 class="data__item">Василий, 14 лет</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
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
}
</style>
