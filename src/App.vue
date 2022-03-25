<script setup>

</script>

<template>
  <header class="header">
    <div class="wrapper">
      <div class="content">
        <img alt="logo" class="logo" src="./assets/image/logo.svg">

        <div class="right">
          <ul class="list">
            <li><a href="#">Форма</a></li>
            <li><a href="#">Превью</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <main class="main">
    <div class="wrapper">
      <div class="content">
        <div class="card info">
          <h3 class="user__title">
            Персональные данные
          </h3>
          <h2 class="user__item">
            Василий, 30 лет
          </h2>

          <div class="data">
            <h3 class="data__title">
              Дети
            </h3>

            <h2 class="data__item">
              Петр, 10 лет
            </h2>

            <h2 class="data__item">
              Василий, 14 лет
            </h2>
          </div>

        </div>

        <!--<div class="card personal-data">
          <h3 class="card__title">Персональные данные</h3>
          <div class="input-block">
            <label>Имя</label>
            <input class="input" name="name" type="text">
          </div>

          <div class="input-block">
            <label>Возраст</label>
            <input class="input" name="age" type="text">
          </div>
        </div>

        <div class="card children">
          <div class="row">
            <h3 class="card__title">Дети (макс. 5)</h3>

              <button class="button button_secondary">
                <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z" fill=""/>
                </svg>
                Добавить ребенка
              </button>
          </div>

          <div class="row">
            <div class="children input-block">
              <label>Имя</label>
              <input class="input" name="name" type="text">
            </div>

            <div class="children input-block">
              <label>Возраст</label>
              <input class="input" name="age" type="text">
            </div>

            <button class="button button_flat">Удалить</button>
          </div>

          <div class="row">
            <div class="children input-block">
              <label>Имя</label>
              <input class="input" name="age" type="text">
            </div>

            <div class="children input-block">
              <label>Возраст</label>
              <input class="input" name="age" type="text">
            </div>

            <button class="button button_flat">Удалить</button>
          </div>

            <div class="button-save">
              <button class="button button_primary">Сохранить</button>
            </div>
        </div>-->
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

    .logo {
      position: absolute;
    }

    .right {
      flex: 0 1 calc(50% + 24px);
      margin-left: auto;

      .list {
        display: flex;

        a {
          margin-right: 24px;
        }
      }
    }
  }
}

.main {
  .content {
    flex-direction: column;
    justify-content: flex-start;
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

    .input-block {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 56px;
      padding: 8px 16px 6px;
      background: #fff;
      border: 1px solid #f1f1f1;
      border-radius: 4px;

      label {
        color: rgba(17, 17, 17, 0.48);
        font-size: 13px;
        line-height: 16px;
      }

      .input {
        color: #111;
        border: none;
        outline: none;
      }
    }

    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      column-gap: 18px;
      margin-bottom: 10px;


      .input-block {
        flex: 1 1 auto;
      }
    }
  }

  .button-save {
    margin: 30px 0 136px;
  }

  .info {
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
