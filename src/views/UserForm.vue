<script setup>
import BaseInput from '../components/BaseInput.vue'
import ButtonDelete from '../components/ButtonDelete.vue'
import ButtonSave from '../components/ButtonSave.vue'
import ButtonAdd from '../components/ButtonAdd.vue'
import BaseCard from '../components/BaseCard.vue'
import BaseRow from '../components/BaseRow.vue'
import BaseTitle from '../components/BaseTitle.vue'
import { reactive, ref } from 'vue'

const save = ref(null)
const plus = ref(true)
const userName = ref('')
const userAge = ref('')
const childName = ref('')
const childAge = ref('')
const usersData = ref([])

const data = reactive({
  name: userName.value,
  age: userAge.value,
  childName: childName.value,
  childAge: childAge.value,
})

const setToLocalStorage = () => localStorage.setItem('family', JSON.stringify(data.value))
const getFromLocalStorage = () => JSON.parse(localStorage.getItem('family'))

let idx = 1
const addItem = () => {
  // if (usersData.value.length === idx ) {
  //   usersData.value = usersData.value.push({ id: idx++, ...data.value })
  // }

  if (idx <= 5) {
    usersData.value.push(
      { id: idx++, ...data })
  }

  if (idx === 6){
    plus.value = false
    save.value.firstElementChild.focus()
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
    <BaseInput v-model.trim.capitalize="userName" title="Имя" />
    <BaseInput v-model.number="userAge" title="Возраст" />

    {{ userName }} {{ userAge }}
  </BaseCard>

  <BaseCard>
    <BaseRow>
      <BaseTitle title="Дети (макс. 5)" />
      <ButtonAdd @click="addItem" :plus="plus" />
    </BaseRow>

    <BaseCard v-if="usersData.length">
      <BaseRow v-for="(userItem, idx) in usersData" :key="userItem.id">
        <BaseInput v-model.trim="childName" title="Имя" />
        <BaseInput v-model.number="childAge" title="Возраст" />

        {{ childName }} {{ childAge }}

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
