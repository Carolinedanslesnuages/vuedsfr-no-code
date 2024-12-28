import type { ComponentConfig } from '@/types'
import { validators } from '../property-validators'

export const actionComponents: ComponentConfig[] = [
  {
    type: 'DsfrButton',
    label: 'Bouton',
    icon: 'ri-cursor-line',
    defaultProps: {
      label: 'Bouton',
      secondary: false,
      disabled: false
    },
    properties: {
      label: {
        type: 'text',
        label: 'Texte',
        validators: [{ fn: validators.required }]
      },
      secondary: {
        type: 'select',
        label: 'Style',
        options: [
          { value: false, label: 'Principal' },
          { value: true, label: 'Secondaire' }
        ]
      },
      disabled: {
        type: 'select',
        label: 'État',
        options: [
          { value: false, label: 'Actif' },
          { value: true, label: 'Désactivé' }
        ]
      }
    }
  },
  {
    type: 'DsfrButtonGroup',
    label: 'Groupe de boutons',
    icon: 'ri-group-line',
    defaultProps: {
      align: 'left',
      inlineFrom: 'md',
      reverseOrder: false
    },
    properties: {
      align: {
        type: 'select',
        label: 'Alignement',
        options: [
          { value: 'left', label: 'Gauche' },
          { value: 'center', label: 'Centre' },
          { value: 'right', label: 'Droite' }
        ]
      }
    }
  }
]