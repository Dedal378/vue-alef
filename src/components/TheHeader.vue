<script setup>
import BaseLogo from './BaseLogo.vue'
import BaseList from './BaseList.vue'
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
</template>

<style lang="scss" scoped>
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
</style>
