import type { ComponentConfig } from '@/types'
import { validators } from '../property-validators'

export const dataComponents: ComponentConfig[] = [
  {
    type: 'DsfrDataTable',
    label: 'Tableau de données',
    icon: 'ri-table-line',
    defaultProps: {
      headers: ['Colonne 1', 'Colonne 2'],
      data: [
        ['Donnée 1', 'Donnée 2'],
        ['Donnée 3', 'Donnée 4']
      ]
    },
    properties: {
      headers: {
        type: 'text',
        label: 'En-têtes (JSON)',
        validators: [{ fn: validators.required }]
      },
      data: {
        type: 'text',
        label: 'Données (JSON)',
        validators: [{ fn: validators.required }]
      }
    }
  },
  {
    type: 'DsfrTable',
    label: 'Tableau',
    icon: 'ri-table-2',
    defaultProps: {
      caption: 'Titre du tableau'
    },
    properties: {
      caption: {
        type: 'text',
        label: 'Légende',
        validators: [{ fn: validators.required }]
      }
    }
  },
  {
    type: 'DsfrTableHeader',
    label: 'En-tête de tableau',
    icon: 'ri-table-line',
    defaultProps: {
      content: 'En-tête'
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
    type: 'DsfrTableRow',
    label: 'Ligne de tableau',
    icon: 'ri-table-line',
    defaultProps: {},
    properties: {}
  },
  {
    type: 'DsfrTableCell',
    label: 'Cellule de tableau',
    icon: 'ri-table-line',
    defaultProps: {
      content: 'Contenu'
    },
    properties: {
      content: {
        type: 'text',
        label: 'Contenu',
        validators: [{ fn: validators.required }]
      }
    }
  }
]