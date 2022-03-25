<script setup></script>

<template>
  <ul class="list">
    <li><router-link to="/vue-alef/">Форма</router-link></li>
    <li><router-link to="/vue-alef/userinfo">Превью</router-link></li>
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
