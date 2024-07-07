<script lang="ts">
import { defineComponent } from 'vue';
import {Handle, Position, VueFlow} from "@vue-flow/core";
import GraphNode from "@/components/graph/GraphNode.vue";
import { MiniMap } from '@vue-flow/minimap'

export default defineComponent({
  name: "Graph",
  components: {
    VueFlow,
    Handle,
    GraphNode,
    MiniMap
  },
  props: {
    elements: {
      type: Array as () => any[],
      required: true
    },
  },
  emits: [
    'edge-click',
    'edge-double-click',
    'edge-contextmenu',
    'node-click',
    'node-double-click',
    'node-contextmenu'
  ],
  data() {
    return {
      localElements: this.elements
    }
  },
  watch: {
    elements: {
      handler(newValue) {
        this.localElements = newValue;
      },
      immediate: true,
    },
  },
});
</script>

<template>
  <div style="height: 100%;">
    <VueFlow v-model="localElements" fit-view-on-init
      @edge-click="$emit('edge-click', $event)"
      @edge-double-click="$emit('edge-double-click', $event)"
      @edge-contextmenu="$emit('edge-contextmenu', $event)"
      @node-click="$emit('node-click', $event)"
      @node-double-click="$emit('node-double-click', $event)"
      @node-contextmenu="$emit('node-contextmenu', $event)"
    >
      <template #node-custom="{ label }">
        <GraphNode :label="label as string" />
      </template>
      <MiniMap  />
    </VueFlow>
  </div>
</template>

<style scoped>
@import "vueflow.css";
@import "@vue-flow/core/dist/style.css";
</style>
