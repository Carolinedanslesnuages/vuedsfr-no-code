import type { ComponentConfig } from '@/types'
import { validators } from '../../property-validators'

export const consentComponents: ComponentConfig[] = [
  {
    type: 'DsfrConsent',
    label: 'Consentement',
    icon: 'ri-shield-check-line',
    defaultProps: {
      title: 'Gestion des cookies',
      description: 'Ce site utilise des cookies pour son fonctionnement',
      acceptText: 'Tout accepter',
      refuseText: 'Tout refuser',
      customizeText: 'Personnaliser'
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
      acceptText: {
        type: 'text',
        label: 'Texte accepter'
      },
      refuseText: {
        type: 'text',
        label: 'Texte refuser'
      },
      customizeText: {
        type: 'text',
        label: 'Texte personnaliser'
      }
    }
  }
]