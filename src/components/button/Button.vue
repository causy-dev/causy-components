<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  emphasis: {
    type: String,
    default: 'medium',
    validator: (value: string) => ['high', 'medium', 'low'].includes(value),
  },
  size: {
    type: String,
    default: 's',
    validator: (value: string) => ['s', 'm', 'l'].includes(value),
  },
})
</script>

<template>
  <button :class="[`button--${emphasis}`, `button--${size}`]">
    <slot></slot>
  </button>
</template>

<style scoped>
@import url('../../assets/generated/variables.css');
button {
  margin-left: 0.5rem;

  color: var(--colorPrimary7);
  font-size: 0.8rem;
  font-weight: normal;
  cursor: pointer;
  user-select: none;
}

.button--high {
  background-color: var(--colorPrimary7);
  color: var(--semanticText);
  border-style: solid;
  border-color: var(--colorPrimary7)
}

.button--high:hover {
  background-color: var(--colorPrimary9);
  color: var(--semanticText);
  border-color: var(--colorPrimary9);
}

.button--medium {
  background-color: transparent;
  border-style: solid;
  border-color: var(--colorPrimary7);
}

.button--medium:hover {
  background-color: var(--colorPrimary9);
  color: var(--semanticText);
  border-color: var(--colorPrimary9);
}

.button--low {
  background-color: transparent;
  color: var(--colorPrimary7);
  border: none;
}

.button--low:hover {
  color: var(--colorPrimary9);
}

.button--s {
  border-width: 1px;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;

}
.button--m {
  border-width: 1.5px;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
}
.button--l {
  border-width: 2px;
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
}
</style>
