<script setup>
import { ref } from 'vue'
import BaseInput from '../components/BaseInput.vue'
import ButtonDelete from '../components/ButtonDelete.vue'
import ButtonSave from '../components/ButtonSave.vue'
import ButtonAdd from '../components/ButtonAdd.vue'
import BaseCard from '../components/BaseCard.vue'
import BaseRow from '../components/BaseRow.vue'
import BaseTitle from '../components/BaseTitle.vue'

const save = ref(null)
const plusIcon = ref(true)

const userName = ref('')
const userAge = ref('')
const childName = ref('')
const childAge = ref('')

const usersData = ref([])
const number = ref([])

let idx = 1
const addItem = () => {
  if (idx <= 5) {
    number.value.push(idx)
    usersData.value.push({ idx, childName, childAge })
    // childName.value = ''
    // childAge.value = ''
  }
  idx++
  if (idx === 6) {
    plusIcon.value = false
    save.value.firstElementChild.focus()
  }
}
const deleteItem = el => {
  usersData.value.splice(el, 1)
  idx--
  if (plusIcon.value === false) {
    plusIcon.value = true
  }
}

/*const setToLocalStorage = () => localStorage.setItem('family', JSON.stringify(data))
 const getFromLocalStorage = () => JSON.parse(localStorage.getItem('family'))*/
</script>

<template>
  <BaseCard title="Персональные данные">
    <BaseInput title="Имя" v-model.lazy.trim.capitalize="userName" />
    <BaseInput title="Возраст" v-model.lazy.number="userAge" />
  </BaseCard>

  <BaseCard>
    <BaseRow>
      <BaseTitle title="Дети (макс. 5)" />
      <ButtonAdd @click="addItem" :plusIcon="plusIcon" />
    </BaseRow>

    <BaseCard v-if="number.length">
      <BaseRow v-for="(userItem, idx) in usersData" :key="userItem.id">
        <BaseInput
          v-model.lazy.trim.capitalize="childName"
          title="Имя"
          :model-value="usersData.childName"
        />
        <BaseInput
          v-model.lazy.number="childAge"
          title="Возраст"
          :model-value="usersData.childAge"
        />
        <ButtonDelete @click="deleteItem(idx)" />
      </BaseRow>

      <div ref="save" class="button-save">
        <ButtonSave />
      </div>
    </BaseCard>
    {{ number }}
    {{ usersData }}
  </BaseCard>
</template>

<style lang="scss" scoped>
.button-save {
  margin-top: 20px;
}
</style>
