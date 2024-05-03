<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'm',
    validator: (value: string) => ['s', 'm', 'l'].includes(value),
  },
})
</script>

<template>
  <div class="header" aria-label="header" :class="[`header--${size}`]">
    <slot></slot>
  </div>
</template>

<style scoped>
@import url('../../assets/generated/variables.css');
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--semanticBrand);
  color: var(--semanticText);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  min-height: 40px;
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.header--s {
  height: 3rem;
}
.header--m{
  height: 4rem;
}
.header--l {
  height: 5rem;
}



</style>
