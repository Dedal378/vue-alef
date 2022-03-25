<script setup>

</script>

<template>
  <button class="button button_flat">Удалить</button>
</template>

<style lang="scss" scoped>
.button_flat {
  color: #01a7fd;
  background: none;
  border: 2px solid transparent;
  padding: 10px 20px;

  &:hover {
    background: rgba(110, 65, 226, 0.04);
    border-radius: 4px;
  }

  &:focus {
    border: 2px solid rgba(17, 17, 17, 0.48);
    border-radius: 4px;
  }

  &:active {
    background: rgba(110, 65, 226, 0.16);
    border-radius: 4px;
  }
}
</style>
