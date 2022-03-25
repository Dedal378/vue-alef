<script setup>
import BaseInput from './components/BaseInput.vue'
import ButtonDelete from './components/ButtonDelete.vue'
import ButtonSave from './components/ButtonSave.vue'
import ButtonAdd from './components/ButtonAdd.vue'
import BaseCard from './components/BaseCard.vue'
import BaseRow from './components/BaseRow.vue'
import BaseTitle from './components/BaseTitle.vue'
</script>

<template>
  <main class="main">
    <div class="wrapper">
      <div class="content">
        <BaseCard title="Персональные данные">
          <BaseInput title="Имя" />
          <BaseInput title="Возраст" />
        </BaseCard>

        <BaseCard>
          <BaseRow>
            <BaseTitle title="Дети (макс. 5)" />
            <ButtonAdd />
          </BaseRow>

          <BaseRow>
            <BaseInput title="Имя" />
            <BaseInput title="Возраст" />
            <ButtonDelete />
          </BaseRow>

          <BaseRow>
            <BaseInput title="Имя" />
            <BaseInput title="Возраст" />
            <ButtonDelete />
          </BaseRow>

          <div class="button-save">
            <ButtonSave />
          </div>
        </BaseCard>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  .content {
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 660px) {
      padding: 0 20px;
    }
  }

  .button-save {
    margin: 30px 0 136px;
  }
}
</style>
