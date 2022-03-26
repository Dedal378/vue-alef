<script setup>
import BaseInput from '../components/BaseInput.vue'
import ButtonDelete from '../components/ButtonDelete.vue'
import ButtonSave from '../components/ButtonSave.vue'
import ButtonAdd from '../components/ButtonAdd.vue'
import BaseCard from '../components/BaseCard.vue'
import BaseRow from '../components/BaseRow.vue'
import BaseTitle from '../components/BaseTitle.vue'
import { computed, ref } from 'vue'

const save = ref()
const usersData = ref([])
const plus = ref(true)
let idx = 1

const addItem = () => {
  if (idx <= 5) {
    usersData.value.push(
      {
        id: idx++,
        name: '',
        age: '',
      }
    )
  }

  if (idx === 6){
    plus.value = false
    save.value.focus()
  }
}
const deleteItem = (el) => {
  usersData.value.splice(el, 1)
  idx--
  if (plus.value === false) {
    plus.value = true
  }
}
</script>

<template>
  <BaseCard title="Персональные данные">
    <BaseInput title="Имя" />
    <BaseInput title="Возраст" />
  </BaseCard>

  <BaseCard>
    <BaseRow>
      <BaseTitle title="Дети (макс. 5)" />
      <ButtonAdd @click="addItem" :plus="plus" />
    </BaseRow>

    <BaseCard v-if="usersData.length">
      <BaseRow v-for="(userItem, idx) in usersData" :key="userItem.id">
        <BaseInput title="Имя" />
        <BaseInput title="Возраст" />
        <ButtonDelete @click="deleteItem(idx)" />
      </BaseRow>

      <div ref="save" class="button-save">
        <ButtonSave />
      </div>
    </BaseCard>
  </BaseCard>
</template>

<style lang="scss" scoped>
.button-save {
  margin-top: 20px;
}
</style>
