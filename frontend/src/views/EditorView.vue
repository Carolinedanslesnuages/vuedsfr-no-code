<script setup lang="ts">
import ComponentsList from '@/components/editor/ComponentsList.vue'
import EditorCanvas from '@/components/editor/EditorCanvas.vue'
import PropertiesModal from '@/components/editor/PropertiesModal.vue'
import { useEditorStore } from '@/stores/editor'

const store = useEditorStore()

onMounted(() => {
  store.loadFromStorage()
})
</script>

<template>
  <div class="editor-layout">
    <div class="components-sidebar">
      <ComponentsList />
    </div>
    <div class="editor-main">
      <EditorCanvas />
    </div>
    <PropertiesModal />
  </div>
</template>

<style scoped>
.editor-layout {
  display: flex;
  height: calc(100vh - 96px);
  overflow: hidden;
}

.components-sidebar {
  width: 250px;
  flex-shrink: 0;
}

.editor-main {
  flex-grow: 1;
}
</style>