<script setup></script>

<template>
  <ul class="list">
    <li class="link"><router-link :to="{name: 'form'}">Форма</router-link></li>
    <li class="link"><router-link :to="{name: 'preview'}">Превью</router-link></li>
  </ul>
</template>

<style lang="scss" scoped>
.list {
  display: flex;

  a {
    margin-right: 24px;
  }
}
</style>
