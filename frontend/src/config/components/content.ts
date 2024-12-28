import type { ComponentConfig } from '@/types'
import { validators } from '../property-validators'

export const contentComponents: ComponentConfig[] = [
  // ... autres composants existants ...

  {
    type: 'DsfrTile',
    label: 'Tuile',
    icon: 'ri-layout-grid-line',
    defaultProps: {
      title: 'Titre de la tuile',
      description: 'Description de la tuile'
    },
    properties: {
      title: {
        type: 'text',
        label: 'Titre',
        validators: [{ fn: validators.required }]
      },
      description: {
        type: 'text',
        label: 'Description',
        validators: [{ fn: validators.required }]
      }
    }
  },
  {
    type: 'DsfrTiles',
    label: 'Grille de tuiles',
    icon: 'ri-layout-grid-fill',
    defaultProps: {
      title: 'Titre de la grille'
    },
    properties: {
      title: {
        type: 'text',
        label: 'Titre',
        validators: [{ fn: validators.required }]
      }
    }
  }
]