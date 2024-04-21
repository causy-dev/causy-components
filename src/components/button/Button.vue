<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  emphasis: {
    type: String,
    default: 'medium',
    validator: (value: string) => ['high', 'medium', 'ghost'].includes(value),
  },
  size: {
    type: String,
    default: 'sm',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
  },
})
</script>

<template>
  <button :class="`${props.emphasis} ${props.size}`">
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

.high {
  background-color: var(--colorPrimary7);
  color: var(--semanticText);
  border-style: solid;
  border-color: var(--colorPrimary7)
}

.high:hover {
  background-color: var(--colorPrimary9);
  color: var(--semanticText);
  border-color: var(--colorPrimary9);
}

.medium {
  background-color: transparent;
  border-style: solid;
  border-color: var(--colorPrimary7);
}

.medium:hover {
  background-color: var(--colorPrimary9);
  color: var(--semanticText);
  border-color: var(--colorPrimary9);
}

.ghost {
  background-color: transparent;
  color: var(--colorPrimary7);
  border: none;
}

.ghost:hover {
  color: var(--colorPrimary9);
}

.sm {
  border-width: 1px;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;

}
.md {
  border-width: 1.5px;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;


}
.lg {
  border-width: 2px;
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
}
</style>
