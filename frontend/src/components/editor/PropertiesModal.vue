<script setup lang="ts">
import { useEditorStore } from '@/stores/editor'
import { AVAILABLE_COMPONENTS } from '@/config/editor-components'
import type { PropertyConfig } from '@/types'

const store = useEditorStore()
const isOpen = ref(false)

const selectedElement = computed(() => {
  if (!store.selectedElementId) return null
  return store.elements.find(el => el.id === store.selectedElementId)
})

const component = computed(() => {
  if (!selectedElement.value) return null
  return AVAILABLE_COMPONENTS.find(c => c.type === selectedElement.value?.type)
})

const formData = ref<Record<string, any>>({})

watch(selectedElement, (newElement) => {
  if (newElement) {
    formData.value = { ...newElement.props }
    isOpen.value = true
  } else {
    isOpen.value = false
  }
}, { immediate: true })

const handleSubmit = () => {
  if (!selectedElement.value) return
  
  // Convertir les valeurs numériques
  const processedData = Object.entries(formData.value).reduce((acc, [key, value]) => {
    const propertyConfig = component.value?.properties[key]
    if (propertyConfig?.type === 'number') {
      acc[key] = Number(value)
    } else {
      acc[key] = value
    }
    return acc
  }, {} as Record<string, any>)
  
  store.updateElement(selectedElement.value.id, processedData)
  store.saveToStorage()
  isOpen.value = false
  store.setSelectedElement(null)
}

const handleClose = () => {
  isOpen.value = false
  store.setSelectedElement(null)
}

const handleDelete = () => {
  if (!selectedElement.value) return
  store.removeElement(selectedElement.value.id)
  store.saveToStorage()
  isOpen.value = false
  store.setSelectedElement(null)
}
</script>

<template>
  <div v-if="isOpen && selectedElement && component" class="fr-modal fr-modal--opened">
    <div class="fr-container fr-container--fluid fr-container-md">
      <div class="fr-grid-row fr-grid-row--center">
        <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
          <div class="fr-modal__body">
            <div class="fr-modal__header">
              <button class="fr-btn--close fr-btn" title="Fermer" @click="handleClose">
                Fermer
              </button>
            </div>
            <div class="fr-modal__content">
              <h1 class="fr-modal__title">
                <VIcon :name="component.icon" class="fr-mr-1w" />
                Propriétés du {{ component.label }}
              </h1>
              
              <form @submit.prevent="handleSubmit">
                <div class="fr-form-group" v-for="(config, key) in component.properties" :key="key">
                  <label class="fr-label" :for="key">{{ config.label }}</label>
                  
                  <!-- Text input -->
                  <template v-if="config.type === 'text'">
                    <input
                      type="text"
                      class="fr-input"
                      :id="key"
                      v-model="formData[key]"
                    />
                  </template>

                  <!-- Number input -->
                  <template v-else-if="config.type === 'number'">
                    <input
                      type="number"
                      class="fr-input"
                      :id="key"
                      v-model="formData[key]"
                    />
                  </template>

                  <!-- Select -->
                  <template v-else-if="config.type === 'select'">
                    <select
                      class="fr-select"
                      :id="key"
                      v-model="formData[key]"
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

                <div class="fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--icon-left fr-mt-4w">
                  <button type="submit" class="fr-btn">
                    Valider
                  </button>
                  <button type="button" class="fr-btn fr-btn--secondary" @click="handleClose">
                    Annuler
                  </button>
                  <button 
                    type="button" 
                    class="fr-btn fr-btn--danger"
                    @click="handleDelete"
                  >
                    <VIcon name="ri-delete-bin-line" class="fr-mr-1v" />
                    Supprimer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>