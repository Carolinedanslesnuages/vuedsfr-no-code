import type { ComponentConfig } from '@/types'
import { validators } from '../property-validators'

export const formComponents: ComponentConfig[] = [
  // ... autres composants existants ...

  {
    type: 'DsfrFileUpload',
    label: 'Téléversement de fichier',
    icon: 'ri-upload-line',
    defaultProps: {
      label: 'Déposer un fichier',
      hint: 'Format accepté : PDF',
      multiple: false
    },
    properties: {
      label: {
        type: 'text',
        label: 'Label',
        validators: [{ fn: validators.required }]
      },
      hint: {
        type: 'text',
        label: 'Texte d\'aide'
      },
      multiple: {
        type: 'select',
        label: 'Multiple',
        options: [
          { value: false, label: 'Non' },
          { value: true, label: 'Oui' }
        ]
      }
    }
  },
  {
    type: 'DsfrFileDownload',
    label: 'Téléchargement de fichier',
    icon: 'ri-download-line',
    defaultProps: {
      label: 'Télécharger',
      href: '#',
      description: 'Description du fichier'
    },
    properties: {
      label: {
        type: 'text',
        label: 'Label',
        validators: [{ fn: validators.required }]
      },
      href: {
        type: 'text',
        label: 'URL',
        validators: [{ fn: validators.required }]
      },
      description: {
        type: 'text',
        label: 'Description'
      }
    }
  },
  {
    type: 'DsfrConsent',
    label: 'Consentement',
    icon: 'ri-shield-check-line',
    defaultProps: {
      title: 'Gestion des cookies',
      description: 'Description du consentement'
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
    type: 'DsfrSearchBar',
    label: 'Barre de recherche',
    icon: 'ri-search-line',
    defaultProps: {
      label: 'Rechercher',
      placeholder: 'Rechercher'
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
      }
    }
  }
]