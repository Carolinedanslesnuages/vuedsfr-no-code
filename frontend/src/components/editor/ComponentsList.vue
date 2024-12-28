<script setup lang="ts">
import { AVAILABLE_COMPONENTS } from '@/config/editor-components'

const startDrag = (type: string, event: DragEvent) => {
  if (event.dataTransfer) {
    event.dataTransfer.setData('component-type', type)
    event.dataTransfer.effectAllowed = 'copy'
  }
}
</script>

<template>
  <div class="components-list">
    <h6 class="fr-mb-2w">Composants disponibles</h6>
    <ul class="fr-list">
      <li 
        v-for="component in AVAILABLE_COMPONENTS" 
        :key="component.type"
        class="component-item"
        draggable="true"
        @dragstart="startDrag(component.type, $event)"
      >
        <VIcon :name="component.icon" class="fr-mr-1w" />
        {{ component.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.components-list {
  height: 100%;
  padding: 1rem;
  border-right: 1px solid var(--border-default-grey);
  background: white;
  overflow-y: auto;
}

.component-item {
  cursor: grab;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
}

.component-item:hover {
  background-color: var(--background-contrast-grey);
}

.component-item:active {
  cursor: grabbing;
}
</style>