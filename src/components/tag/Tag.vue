<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  appearance: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'success', 'danger', 'warning', 'info', 'neutralLight', 'neutralDark'].includes(value),
  },
  clickable: {
    type: Boolean,
    default: false,
  },
  emphasis: {
    type: String,
    default: 'medium',
    validator: (value: string) => ['low', 'medium', 'high'].includes(value),
  },
  size: {
    type: String,
    default: 'm',
    validator: (value: string) => ['s', 'm', 'l'].includes(value),
  },
})
</script>

<template>
  <div  :class="['tag', `tag--${appearance}`, `tag--${emphasis}`, `tag--${size}`, clickable ? 'tag--clickable' : '']" :role="clickable ? 'button' : ''"  aria-label="tag">
    <slot name="start"></slot>
    <slot></slot>
    <slot name="end"></slot>
  </div>
</template>

<style scoped>
@import url('../../assets/generated/variables.css');
@import url('../../assets/fonts.css');

.tag {
  display: inline-flex;
  align-items: center;
  padding: 0.15em 0.3rem;
  border-radius: 0.25em;
  box-sizing: border-box;
  border: 0.2em solid;
  font-family: "nunito", sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.tag:focus-visible  {
  outline: none;
  border-color: var(--colorAccessibilityActive)!important;
}


.tag--s {
  font-size: 0.75em;
  padding: 0.05em 0.1em;
}

.tag--m {
  font-size: 1em;
  padding: 0.15em 0.3rem;
}

.tag--l {
  font-size: 1.25em;
  padding: 0.25em 0.5em;
}


.tag--medium {
  /* No changes for medium emphasis */
}

.tag--high {
  font-weight: 800;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
}

.tag--primary {
  background-color: var(--colorPrimary5);
  border-color: var(--colorPrimary5);
  color: var(--colorNeutralLight5);
}

.tag--primary.tag--clickable:hover {
  background-color: var(--colorPrimary8);
  border-color: var(--colorPrimary8);
}

.tag--success {
  background-color: var(--colorSuccess8);
  border-color: var(--colorSuccess8);
  color: var(--colorNeutralLight5);
}

.tag--success.tag--clickable:hover {
  background-color: var(--colorSuccess5);
  border-color: var(--colorSuccess5);
  color: var(--colorNeutralDark5);

}


.tag--danger {
  background-color: var(--colorError5);
  border-color: var(--colorError5);
  color: var(--colorNeutralLight5);

}

.tag--danger.tag--clickable:hover {
  background-color: var(--colorError8);
  border-color: var(--colorError8);
}

.tag--warning {
  background-color: var(--colorWarning5);
  border-color: var(--colorWarning5);
  color: var(--colorNeutralDark5);
}

.tag--warning.tag--clickable:hover {
  background-color: var(--colorWarning8);
  border-color: var(--colorWarning8);
  color: var(--colorNeutralLight5);

}

.tag--info {
  background-color: var(--colorInformative5);
  border-color: var(--colorInformative5);
  color: var(--colorNeutralLight5);
}

.tag--info.tag--clickable:hover {
  background-color: var(--colorInformative8);
  border-color: var(--colorInformative8);
}

.tag--neutralLight {
  background-color: var(--colorNeutralLight5);
  border-color: var(--colorNeutralLight5);
  color: var(--colorNeutralDark5);
}

.tag--neutralLight.tag--clickable:hover {
  background-color: var(--colorNeutralLight8);
  border-color: var(--colorNeutralLight8);
  color: var(--colorNeutralLight5);

}

.tag--neutralDark {
  background-color: var(--colorNeutralDark5);
  border-color: var(--colorNeutralDark5);
  color: var(--colorNeutralLight5);
}

.tag--neutralDark.tag--clickable:hover {
  background-color: var(--colorNeutralDark3);
  border-color: var(--colorNeutralDark3);
}

.tag--low {
  background-color: transparent;
}

.tag--low.tag--primary {
  color: var(--colorPrimary5);
}

.tag--low.tag--primary.tag--clickable:hover {
  background-color: var(--colorPrimary5);
  border-color: var(--colorPrimary5);
  color: var(--colorNeutralLight5);
}

.tag--low.tag--success {
  color: var(--colorSuccess8);
}

.tag--low.tag--success.tag--clickable:hover {
  background-color: var(--colorSuccess5);
  border-color: var(--colorSuccess5);
  color: var(--colorNeutralDark5);

}

.tag--low.tag--danger {
  color: var(--colorError5);
}

.tag--low.tag--danger.tag--clickable:hover {
  background-color: var(--colorError5);
  border-color: var(--colorError5);
  color: var(--colorNeutralLight5);
}


.tag--low.tag--warning {
  color: var(--colorWarning5);
}

.tag--low.tag--warning.tag--clickable:hover {
  background-color: var(--colorWarning5);
  border-color: var(--colorWarning5);
  color: var(--colorNeutralDark5);
}

.tag--low.tag--info {
  color: var(--colorInformative5);
}

.tag--low.tag--info.tag--clickable:hover {
  background-color: var(--colorInformative5);
  border-color: var(--colorInformative5);
  color: var(--colorNeutralLight5);
}

.tag--low.tag--neutralLight {
  color: var(--colorNeutralLight5);
}

.tag--low.tag--neutralLight.tag--clickable:hover {
  background-color: var(--colorNeutralLight5);
  border-color: var(--colorNeutralLight5);
  color: var(--colorNeutralDark5);
}

.tag--low.tag--neutralDark {
  color: var(--colorNeutralDark5);
  border-color: var(--colorNeutralDark5);
}

.tag--clickable {
  cursor: pointer;
}

</style>
