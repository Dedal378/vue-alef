<script setup>

</script>

<template>
  <button class="button button_primary">Сохранить</button>
</template>

<style lang="scss" scoped>
.button_primary {
  padding: 10px 20px;
  color: #fff;
  background: #01a7fd;
  border-radius: 100px;

  &:hover {
    background: #0f79af;
  }

  &:focus {
    background: #ceecfc;
  }

  &:active {
    background: #59c79f;
  }
}
</style>
