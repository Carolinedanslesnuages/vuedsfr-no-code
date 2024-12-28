import type { ComponentConfig } from '@/types'
import { validators } from '../property-validators'

export const navigationComponents: ComponentConfig[] = [
  {
    type: 'DsfrBreadcrumb',
    label: 'Fil d\'ariane',
    icon: 'ri-arrow-right-line',
    defaultProps: {
      links: [
        { text: 'Accueil', to: '/' },
        { text: 'Section', to: '/section' }
      ]
    },
    properties: {
      links: {
        type: 'text',
        label: 'Liens (JSON)',
        validators: [{ fn: validators.required }]
      }
    }
  },
  {
    type: 'DsfrPagination',
    label: 'Pagination',
    icon: 'ri-pages-line',
    defaultProps: {
      pages: 5,
      currentPage: 1,
      hideFirstLast: false
    },
    properties: {
      pages: {
        type: 'number',
        label: 'Nombre de pages',
        validators: [{ fn: validators.required }]
      },
      currentPage: {
        type: 'number',
        label: 'Page actuelle'
      },
      hideFirstLast: {
        type: 'select',
        label: 'Masquer premier/dernier',
        options: [
          { value: false, label: 'Non' },
          { value: true, label: 'Oui' }
        ]
      }
    }
  },
  {
    type: 'DsfrLanguageSelector',
    label: 'Sélecteur de langue',
    icon: 'ri-global-line',
    defaultProps: {
      languages: [
        { label: 'Français', value: 'fr' },
        { label: 'English', value: 'en' }
      ],
      current: 'fr'
    },
    properties: {
      languages: {
        type: 'text',
        label: 'Langues (JSON)',
        validators: [{ fn: validators.required }]
      },
      current: {
        type: 'text',
        label: 'Langue actuelle'
      }
    }
  }
]