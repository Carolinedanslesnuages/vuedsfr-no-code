import type { ComponentConfig } from '@/types'
import { validators } from '../../property-validators'

export const searchComponents: ComponentConfig[] = [
  {
    type: 'DsfrSearchBar',
    label: 'Barre de recherche',
    icon: 'ri-search-line',
    defaultProps: {
      label: 'Rechercher',
      placeholder: 'Rechercher',
      buttonText: 'Rechercher'
    },
    properties: {
      label: {
        type: 'text',
        label: 'Label',
        validators: [{ fn: validators.required }]
      },
      placeholder: {
        type: 'text',
        label: 'Placeholder'
      },
      buttonText: {
        type: 'text',
        label: 'Texte du bouton'
      }
    }
  }
]