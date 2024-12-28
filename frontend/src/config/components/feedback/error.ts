import type { ComponentConfig } from '@/types'
import { validators } from '../../property-validators'

export const errorComponents: ComponentConfig[] = [
  {
    type: 'DsfrErrorPage',
    label: 'Page d\'erreur',
    icon: 'ri-error-warning-line',
    defaultProps: {
      title: 'Page non trouvée',
      description: 'La page que vous recherchez est introuvable.',
      buttonText: 'Retour à l\'accueil',
      buttonLink: '/'
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
      buttonText: {
        type: 'text',
        label: 'Texte du bouton'
      },
      buttonLink: {
        type: 'text',
        label: 'Lien du bouton'
      }
    }
  }
]