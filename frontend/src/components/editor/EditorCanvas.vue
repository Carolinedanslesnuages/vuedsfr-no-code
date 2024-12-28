<script setup lang="ts">
import { useEditorStore } from '@/stores/editor'
import { AVAILABLE_COMPONENTS } from '@/config/editor-components'
import EditorElement from './EditorElement.vue'

const store = useEditorStore()
const canvasRef = ref<HTMLElement | null>(null)
const isDragOver = ref(false)

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  isDragOver.value = false
  
  if (!event.dataTransfer || !canvasRef.value) return
  
  const componentType = event.dataTransfer.getData('component-type')
  const component = AVAILABLE_COMPONENTS.find(c => c.type === componentType)
  
  if (component) {
    const rect = canvasRef.value.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    
    const elementId = crypto.randomUUID()
    store.addElement({
      id: elementId,
      type: componentType,
      props: { ...component.defaultProps },
      position: { x, y }
    })
    store.saveToStorage()
    
    // Sélectionner automatiquement le nouvel élément pour ouvrir la modal
    store.setSelectedElement(elementId)
  }
}

const handleDragOver = (event: DragEvent) => {
  event.preventDefault()
  isDragOver.value = true
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'copy'
  }
}

const handleDragLeave = (event: DragEvent) => {
  const rect = canvasRef.value?.getBoundingClientRect()
  if (rect) {
    const { clientX, clientY } = event
    if (
      clientX <= rect.left ||
      clientX >= rect.right ||
      clientY <= rect.top ||
      clientY >= rect.bottom
    ) {
      isDragOver.value = false
    }
  }
}
</script>

<template>
  <div 
    ref="canvasRef"
    :class="[
      'editor-canvas',
      { 'is-drag-over': isDragOver }
    ]"
    @drop="handleDrop"
    @dragover="handleDragOver"
    @dragleave="handleDragLeave"
  >
    <template v-for="element in store.elements" :key="element.id">
      <EditorElement
        :element="element"
        :is-selected="element.id === store.selectedElementId"
        @click="store.setSelectedElement(element.id)"
      />
    </template>
  </div>
</template>

<style scoped>
.editor-canvas {
  height: 100%;
  background: white;
  border: 2px dashed var(--border-default-grey);
  overflow: auto;
  position: relative;
  padding: 1rem;
  transition: all 0.2s;
}

.is-drag-over {
  background-color: var(--background-contrast-grey);
  border-color: var(--border-action-high-blue-france);
}
</style>