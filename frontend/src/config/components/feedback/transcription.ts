import type { ComponentConfig } from '@/types'
import { validators } from '../../property-validators'

export const transcriptionComponents: ComponentConfig[] = [
  {
    type: 'DsfrTranscription',
    label: 'Transcription',
    icon: 'ri-file-text-line',
    defaultProps: {
      title: 'Transcription',
      content: 'Contenu de la transcription',
      expanded: false
    },
    properties: {
      title: {
        type: 'text',
        label: 'Titre',
        validators: [{ fn: validators.required }]
      },
      content: {
        type: 'text',
        label: 'Contenu',
        validators: [{ fn: validators.required }]
      },
      expanded: {
        type: 'select',
        label: 'État initial',
        options: [
          { value: false, label: 'Fermé' },
          { value: true, label: 'Ouvert' }
        ]
      }
    }
  }
]