<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Имя'
  },
  modelValue: [String, Number],
  modelModifiers: { default: () => ({})}
})
const emit = defineEmits(['update:modelValue'])

// Add custom modifiers. Собственный модификатор - Увеличение первой буквы текста
const emitValue = (e) => {
  let value = e.target.value

  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="input-block">
    <label>{{ title }}</label>
    <input
      @input="emitValue"
      :value="modelValue"
      class="input"
      type="text"
    >
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
