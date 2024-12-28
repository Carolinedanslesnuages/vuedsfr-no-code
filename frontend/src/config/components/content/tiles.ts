import type { ComponentConfig } from '@/types'
import { validators } from '../../property-validators'

export const tileComponents: ComponentConfig[] = [
  {
    type: 'DsfrTile',
    label: 'Tuile',
    icon: 'ri-layout-grid-line',
    defaultProps: {
      title: 'Titre de la tuile',
      description: 'Description de la tuile',
      linkHref: '#',
      horizontal: false
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
      },
      linkHref: {
        type: 'text',
        label: 'Lien'
      },
      horizontal: {
        type: 'select',
        label: 'Orientation',
        options: [
          { value: false, label: 'Verticale' },
          { value: true, label: 'Horizontale' }
        ]
      }
    }
  },
  {
    type: 'DsfrTiles',
    label: 'Grille de tuiles',
    icon: 'ri-layout-grid-fill',
    defaultProps: {
      title: 'Titre de la section'
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