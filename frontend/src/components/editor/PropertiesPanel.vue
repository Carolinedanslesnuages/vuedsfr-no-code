<script setup lang="ts">
import { useEditorStore } from '@/stores/editor'
import { AVAILABLE_COMPONENTS } from '@/config/editor-components'
import type { PropertyConfig } from '@/types'

const store = useEditorStore()

const selectedElement = computed(() => {
  if (!store.selectedElementId) return null
  return store.elements.find(el => el.id === store.selectedElementId)
})

const component = computed(() => {
  if (!selectedElement.value) return null
  return AVAILABLE_COMPONENTS.find(c => c.type === selectedElement.value?.type)
})

const updateProp = (key: string, value: any) => {
  if (!selectedElement.value) return
  store.updateElement(selectedElement.value.id, { [key]: value })
  store.saveToStorage()
}
</script>

<template>
  <div v-if="selectedElement && component" class="properties-panel">
    <div class="fr-p-2w">
      <h6>{{ component.label }}</h6>
      
      <div class="fr-mt-2w">
        <template v-for="(config, key) in component.properties" :key="key">
          <div class="fr-mb-2w">
            <label class="fr-label">{{ config.label }}</label>
            
            <!-- Text input -->
            <template v-if="config.type === 'text'">
              <input
                type="text"
                class="fr-input"
                :value="selectedElement.props[key]"
                @input="e => updateProp(key, (e.target as HTMLInputElement).value)"
              />
            </template>

            <!-- Select -->
            <template v-else-if="config.type === 'select'">
              <select
                class="fr-select"
                :value="selectedElement.props[key]"
                @change="e => updateProp(key, (e.target as HTMLSelectElement).value)"
              >
                <option 
                  v-for="option in config.options"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.properties-panel {
  height: 100%;
  background: white;
  border-left: 1px solid var(--border-default-grey);
  overflow-y: auto;
}
</style>