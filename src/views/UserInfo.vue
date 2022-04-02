<script setup>
import { useStore } from '../store.js'
import BaseCard from '../components/BaseCard.vue'

const store = useStore()
const userName = store.getUserName
const userAge = store.getUserAge
const children = store.getChildren
</script>

<template>
  <BaseCard v-if="!store.usersData.userName">
    <h3>Нет данных</h3>
    <router-link class="link inline" :to="{name: 'form'}">
      Вернуться к заполнению формы
    </router-link>
  </BaseCard>

  <BaseCard v-else>
    <h3 class="user__title">Персональные данные</h3>
    <h2 class="user__item">{{ userName }}, {{ userAge }} лет</h2>

    <div class="data">
      <h3 class="data__title">Дети</h3>
      <h2 v-for="(child, i) in children" :key="child" class="data__item">
        {{ child.childName[i] }}, {{ child.childAge[i] }} лет
      </h2>
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

.inline {
  width: fit-content;
}
</style>
