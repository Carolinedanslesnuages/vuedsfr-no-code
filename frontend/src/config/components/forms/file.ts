import type { ComponentConfig } from '@/types'
import { validators } from '../../property-validators'

export const fileComponents: ComponentConfig[] = [
  {
    type: 'DsfrFileUpload',
    label: 'Téléversement de fichier',
    icon: 'ri-upload-line',
    defaultProps: {
      label: 'Déposer des fichiers',
      hint: 'Formats acceptés : jpg, png, pdf',
      multiple: false,
      accept: '.jpg,.png,.pdf'
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
      },
      accept: {
        type: 'text',
        label: 'Extensions acceptées'
      }
    }
  },
  {
    type: 'DsfrFileDownload',
    label: 'Téléchargement de fichier',
    icon: 'ri-download-line',
    defaultProps: {
      label: 'Télécharger le fichier',
      href: '#',
      description: 'Description du fichier',
      detail: 'PDF - 2.1 Mo'
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
      },
      detail: {
        type: 'text',
        label: 'Détails (format, taille)'
      }
    }
  }
]