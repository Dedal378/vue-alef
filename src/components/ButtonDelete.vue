<script setup>

</script>

<template>
  <button class="button button_flat">Удалить</button>
</template>

<style lang="scss" scoped>
.button_flat {
  padding: 10px 20px;
  color: #01a7fd;
  background: none;
  border: 2px solid transparent;
  border-radius: 4px;

  &:hover {
    background: rgba(110, 65, 226, 0.04);
  }

  &:active {
    background: rgba(110, 65, 226, 0.16);
  }

  &:disabled {
    opacity: 0.56;

  }

  &:focus {
    border: 2px solid rgba(17, 17, 17, 0.48);
  }
}
</style>
