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
  border: 2px solid transparent;
  border-radius: 100px;

  &:hover {
    background: #0f79af;
  }

  &:active {
    background: #59c79f;
  }

  &:disabled {
    background: #ceecfc;
  }

  &:focus {
    border: 2px solid rgba(17, 17, 17, 0.48);
  }
}
</style>
