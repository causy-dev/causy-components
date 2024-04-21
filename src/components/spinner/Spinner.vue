<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({

})
</script>

<template>
  <div class="loading-wrapper">
    <div class="loading">
      <div class="loading-spinner"></div>
      <div class="loading-text" role="alert" aria-busy="true"><slot></slot></div>
    </div>
  </div>
</template>

<style scoped>
@import url('../../assets/generated/variables.css');

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loading-spinner {
  border: 16px solid var(--semanticText);
  border-top: 16px solid var(--semanticBrand);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}


.loading-wrapper {
  width: 100%;
  align-items: center;
  margin: 0 auto;
}

.loading-text {
  font-family: "Open-Sans-Regular", sans-serif;
  font-size: 1.5rem;
  margin-top: 1rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
