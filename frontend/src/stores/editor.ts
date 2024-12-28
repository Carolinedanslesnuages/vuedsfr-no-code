import { defineStore } from 'pinia'
import type { EditorElement, Position } from '@/types'

interface EditorState {
  elements: EditorElement[]
  selectedElementId: string | null
}

export const useEditorStore = defineStore('editor', {
  state: (): EditorState => ({
    elements: [],
    selectedElementId: null
  }),

  actions: {
    addElement(element: EditorElement) {
      // Vérifier que la position est définie
      if (!element.position) {
        element.position = { x: 0, y: 0 }
      }
      this.elements.push(element)
    },
    
    removeElement(id: string) {
      this.elements = this.elements.filter(el => el.id !== id)
    },
    
    updateElement(id: string, props: Record<string, any>) {
      const element = this.elements.find(el => el.id === id)
      if (element) {
        element.props = { ...element.props, ...props }
      }
    },

    updateElementPosition(id: string, position: Position) {
      const element = this.elements.find(el => el.id === id)
      if (element) {
        element.position = { ...position }
      }
    },

    setSelectedElement(id: string | null) {
      this.selectedElementId = id
    },

    loadFromStorage() {
      try {
        const saved = localStorage.getItem('editor-state')
        if (saved) {
          const state = JSON.parse(saved)
          // Vérifier que chaque élément a une position
          state.elements = state.elements.map((el: EditorElement) => ({
            ...el,
            position: el.position || { x: 0, y: 0 }
          }))
          this.elements = state.elements
        }
      } catch (error) {
        console.error('Erreur lors du chargement de l\'état:', error)
        this.elements = []
      }
    },

    saveToStorage() {
      localStorage.setItem('editor-state', JSON.stringify({
        elements: this.elements
      }))
    }
  }
})