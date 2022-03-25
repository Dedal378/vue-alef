<script setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: 'Имя'
  },
})
</script>

<template>
  <div class="input-block">
    <label>{{ title }}</label>
    <input class="input" type="text">
  </div>
</template>

<style lang="scss">
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
</style>
