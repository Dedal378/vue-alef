<script setup></script>

<template>
  <main class="main">
    <div class="wrapper">
      <div class="content">
        <router-view />
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
}
</style>
