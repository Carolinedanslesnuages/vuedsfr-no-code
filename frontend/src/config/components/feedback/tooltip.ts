import type { ComponentConfig } from '@/types'
import { validators } from '../../property-validators'

export const tooltipComponents: ComponentConfig[] = [
  {
    type: 'DsfrTooltip',
    label: 'Info-bulle',
    icon: 'ri-question-line',
    defaultProps: {
      content: 'Information complémentaire',
      placement: 'top'
    },
    properties: {
      content: {
        type: 'text',
        label: 'Contenu',
        validators: [{ fn: validators.required }]
      },
      placement: {
        type: 'select',
        label: 'Position',
        options: [
          { value: 'top', label: 'Haut' },
          { value: 'right', label: 'Droite' },
          { value: 'bottom', label: 'Bas' },
          { value: 'left', label: 'Gauche' }
        ]
      }
    }
  }
]