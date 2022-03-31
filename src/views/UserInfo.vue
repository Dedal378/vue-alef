<script setup>
import BaseCard from '../components/BaseCard.vue'
import { inject } from 'vue'

defineProps({
  userName: {
    type: String,
    required: false,
  },
  userAge: {
    type: String,
    required: false,
  },
  childName: {
    type: String,
    required: false,
  },
  childAge: {
    type: String,
    required: false,
  },
})

const children = inject('userData')
</script>

<template>
  <BaseCard>
    <h3 class="user__title">Персональные данные</h3>
    <h2 class="user__item">{{ userName }}, {{ userAge }} лет</h2>

    <div class="data">
      <h3 class="data__title">Дети</h3>
      <h2 v-for="child in children" class="data__item">{{ children }}, {{ children }} лет</h2>
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
