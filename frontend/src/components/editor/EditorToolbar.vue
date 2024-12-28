<script setup lang="ts">
import { useEditorStore } from '@/stores/editor'

const store = useEditorStore()

const addButton = () => {
  store.addElement({
    id: crypto.randomUUID(),
    type: 'DsfrButton',
    props: {
      label: 'Nouveau bouton'
    },
    position: { x: 50, y: 50 } // Position initiale explicite
  })
  store.saveToStorage()
}
</script>

<template>
  <div class="fr-toolbar fr-mb-2w">
    <DsfrButton
      label="Ajouter un bouton"
      icon="ri-add-line"
      @click="addButton"
    />
  </div>
</template>