<script setup>
import { ref, provide, reactive } from 'vue'
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
const childName = ref([''])
const childAge = ref([''])
const addChildren = ref(false)
const usersData = ref([])
const noUserData = ref(false)

const temporaryUsersData = reactive([])

const emits = defineEmits('usersData', usersData)

let idx = 1
const addItem = () => {
  if (!userName.value || !userAge.value) {
    noUserData.value = true

    setTimeout(() => {
      noUserData.value = false
    }, 3000)
  }

  if (userName.value && userAge.value) {
    addChildren.value = true

    if (addChildren && idx <= 5) {
      temporaryUsersData.push({
        id: idx,
        user: {
          userName: userName.value,
          userAge: userAge.value,
        },
        children: {
          childName: childName.value,
          childAge: childAge.value,
        }
      })

      idx++
    }

    if (idx === 6) {
      plusIcon.value = false
      save.value.firstElementChild.focus()
    }
  }
}
const saveItem = () => {
  usersData.value = [...temporaryUsersData]
  emits('usersData', usersData.value)
}
const deleteItem = el => {
  temporaryUsersData.splice(el, 1)
  childName.value.splice(el, 1)
  childAge.value.splice(el, 1)
  idx--
  if (plusIcon.value === false) {
    plusIcon.value = true
  }
}
</script>

<template>
  <BaseCard title="Персональные данные">
    <BaseInput title="Имя" v-model.trim.capitalize="userName" />
    <BaseInput title="Возраст" v-model="userAge" />
    <p class="toast danger" v-if="noUserData">Заполните форму, пожалуйста</p>
  </BaseCard>

  <BaseCard>
    <BaseRow>
      <BaseTitle title="Дети (макс. 5)" />
      <ButtonAdd @click="addItem" :plusIcon="plusIcon" />
    </BaseRow>

    <BaseCard v-if="addChildren">
      <BaseRow v-for="(userItem, idx) in temporaryUsersData" :key="userItem.id">
        <BaseInput v-model.trim.lazy.capitalize="childName[idx]" title="Имя" />
        <BaseInput v-model.lazy="childAge[idx]" title="Возраст" />
        <ButtonDelete @click="deleteItem(idx)" />
      </BaseRow>

      <div ref="save" class="button-save">
        <ButtonSave @click="saveItem" />
      </div>
    </BaseCard>
  </BaseCard>
</template>

<style lang="scss" scoped>
.button-save {
  margin-top: 20px;
}

.toast {
  position: absolute;
  bottom: -27px;

  &.danger {
    color: red;
  }
}
</style>
