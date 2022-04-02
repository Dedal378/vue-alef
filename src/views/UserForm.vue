<script setup>
import { reactive, ref } from 'vue'
import { useStore } from '../store.js'
import BaseInput from '../components/BaseInput.vue'
import ButtonDelete from '../components/ButtonDelete.vue'
import ButtonSave from '../components/ButtonSave.vue'
import ButtonAdd from '../components/ButtonAdd.vue'
import BaseCard from '../components/BaseCard.vue'
import BaseRow from '../components/BaseRow.vue'
import BaseTitle from '../components/BaseTitle.vue'

const store = useStore()
const save = ref(null)
const plusIcon = ref(true)

const userName = ref('')
const userAge = ref('')
const childName = ref([])
const childAge = ref([])
const addChildren = ref(false)
const noUserData = ref(false)

let usersData = reactive({
  userName: userName,
  userAge: userAge,
  children: []
})

let idx = ref(0)
const addItem = () => {
  if (!userName.value || !userAge.value) {
    noUserData.value = true
    setTimeout(() => { noUserData.value = false }, 3000)
  } else {
    addChildren.value = true

    if (addChildren && idx.value <= 5) {
      usersData.children.push({
        id: idx.value + 1,
        childName: childName.value,
        childAge: childAge.value,
      })

      idx.value++
    }

    if (idx.value === 5) {
      plusIcon.value = false
      save.value.firstElementChild.focus()
    }
  }
}
const saveItem = () => {
  store.usersData = usersData
  window.localStorage.setItem('user-info', JSON.stringify(usersData))
}
const deleteItem = el => {
  usersData.children.splice(el, 1)
  childName.value.splice(el, 1)
  childAge.value.splice(el, 1)

  idx.value--

  if (plusIcon.value === false) {
    plusIcon.value = true
  }
}
</script>

<template>
  <BaseCard title="Персональные данные">
    <BaseInput title="Имя" v-model.trim.capitalize="userName" />
    <BaseInput v-model="userAge" title="Возраст" />
    <p v-if="noUserData" class="toast danger">Заполните форму, пожалуйста</p>
  </BaseCard>

  <BaseCard>
    <BaseRow>
      <BaseTitle title="Дети (макс. 5)" />
      <ButtonAdd @click="addItem" :plusIcon="plusIcon" />
    </BaseRow>

    <BaseCard v-if="addChildren">
      <BaseRow v-for="(userItem, i) in idx" :key="userItem.id">
        <BaseInput title="Имя" v-model.trim.lazy.capitalize="childName[i]" />
        <BaseInput title="Возраст" v-model.lazy="childAge[i]" />
        <ButtonDelete @click="deleteItem(i)" />
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
