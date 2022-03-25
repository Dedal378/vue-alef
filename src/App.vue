<script setup>
import Userinfo from './components/Userinfo.vue'
import BaseInput from './components/BaseInput.vue'
import ButtonDelete from './components/ButtonDelete.vue'
import ButtonSave from './components/ButtonSave.vue'
import ButtonAdd from './components/ButtonAdd.vue'
import BaseLogo from './components/BaseLogo.vue'
import BaseList from './components/BaseList.vue'
</script>

<template>
  <header class="header">
    <div class="wrapper">
      <div class="content">
        <BaseLogo />

        <div class="right">
          <BaseList />
        </div>
      </div>
    </div>
  </header>

  <main class="main">
    <div class="wrapper">
      <div class="content">
        <div class="card personal-data">
          <h3 class="card__title">Персональные данные</h3>
          <BaseInput title="Имя" />
          <BaseInput title="Возраст" />
        </div>

        <div class="card children">
          <div class="row">
            <h3 class="card__title">Дети (макс. 5)</h3>

            <ButtonAdd />
          </div>

          <div class="row">
            <BaseInput title="Имя" />
            <BaseInput title="Возраст" />

            <ButtonDelete />
          </div>

          <div class="row">
            <BaseInput title="Имя" />
            <BaseInput title="Возраст" />

            <ButtonDelete />
          </div>

          <div class="button-save">
            <ButtonSave />
          </div>
        </div>

        <Userinfo />
      </div>
    </div>
  </main>

  <footer class="footer">
    <a href="#">all rights reserved</a>
  </footer>
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.header {
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  min-height: 76px;
  margin-bottom: 30px;
  padding: 12px 0;
  background: #fff;
  transition: all ease-in 0.5s;
  box-shadow: 0 1px 0 rgba(17, 17, 17, 0.1);
  z-index: 20;

  .content {
    padding: 0 92px;

    @media (max-width: 810px) {
      padding: 0 20px;
    }

    .right {
      flex: 0 1 calc(50% + 24px);
    }
  }
}

.main {
  .content {
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 660px) {
      padding: 0 20px;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 616px;
    min-height: 166px;
    //row-gap: 10px;
    margin-bottom: 33px;

    &__title {
      margin-bottom: 15px;
    }

    .row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      column-gap: 18px;
      margin-bottom: 10px;

      @media (max-width: 520px) {
        row-gap: 10px;
        margin-bottom: 30px;
      }

      .input-block {
        flex: 1 1 auto;
      }
    }
  }

  .button-save {
    margin: 30px 0 136px;
  }

}

.footer {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: 100%;
  height: 76px;
  margin-top: auto;
  background: #fafafa;
  box-shadow: 0 1px 0 rgba(17, 17, 17, 0.1);

  a {
    color: #000;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
