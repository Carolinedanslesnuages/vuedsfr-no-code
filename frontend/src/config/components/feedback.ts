import type { ComponentConfig } from '@/types'
import { validators } from '../property-validators'

export const feedbackComponents: ComponentConfig[] = [
  // ... autres composants existants ...

  {
    type: 'DsfrTooltip',
    label: 'Info-bulle',
    icon: 'ri-question-line',
    defaultProps: {
      content: 'Contenu de l\'info-bulle'
    },
    properties: {
      content: {
        type: 'text',
        label: 'Contenu',
        validators: [{ fn: validators.required }]
      }
    }
  },
  {
    type: 'DsfrTranscription',
    label: 'Transcription',
    icon: 'ri-file-text-line',
    defaultProps: {
      title: 'Transcription',
      content: 'Contenu de la transcription'
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
      }
    }
  }
]