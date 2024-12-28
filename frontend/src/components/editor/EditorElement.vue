<script setup lang="ts">
import type { EditorElement } from '@/types'
import { useEditorStore } from '@/stores/editor'
import * as DsfrComponents from '@gouvminint/vue-dsfr'

const props = defineProps<{
  element: EditorElement
  isSelected: boolean
}>()

const store = useEditorStore()
const elementRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const dragOffset = ref({ x: 0, y: 0 })

// Récupérer le composant DSFR dynamiquement
const DsfrComponent = computed(() => {
  return (DsfrComponents as any)[props.element.type]
})

const handleMouseDown = (event: MouseEvent) => {
  if (!elementRef.value) return
  
  isDragging.value = true
  const rect = elementRef.value.getBoundingClientRect()
  dragOffset.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.value || !elementRef.value) return
    
    const x = e.clientX - dragOffset.value.x
    const y = e.clientY - dragOffset.value.y
    
    store.updateElementPosition(props.element.id, { x, y })
    store.saveToStorage()
  }
  
  const handleMouseUp = () => {
    isDragging.value = false
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }
  
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
}
</script>

<template>
  <div
    ref="elementRef"
    :class="[
      'editor-element',
      { 'is-selected': isSelected }
    ]"
    :style="{
      transform: `translate(${element.position.x}px, ${element.position.y}px)`
    }"
    @mousedown="handleMouseDown"
  >
    <component
      :is="DsfrComponent"
      v-if="DsfrComponent"
      v-bind="element.props"
    />
  </div>
</template>

<style scoped>
.editor-element {
  position: absolute;
  cursor: move;
  user-select: none;
  min-width: 100px;
  min-height: 40px;
  padding: 8px;
}

.is-selected {
  outline: 2px solid var(--border-action-high-blue-france);
}
</style>