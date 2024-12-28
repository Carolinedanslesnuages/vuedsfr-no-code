import type { ComponentConfig } from '@/types'
import { validators } from '../../property-validators'

export const headerComponents: ComponentConfig[] = [
  {
    type: 'DsfrHeader',
    label: 'En-tête',
    icon: 'ri-layout-top-line',
    defaultProps: {
      serviceTitle: 'Nom du service',
      serviceDescription: 'Description du service',
      homeLinkTitle: 'Accueil - Nom de l\'entité',
      logoText: ['Ministère', 'de l\'Intérieur'],
      operatorLogo: {
        imgUrl: '#',
        alt: 'Logo opérateur'
      },
      quickLinks: []
    },
    properties: {
      serviceTitle: {
        type: 'text',
        label: 'Titre du service',
        validators: [{ fn: validators.required }]
      },
      serviceDescription: {
        type: 'text',
        label: 'Description du service'
      },
      homeLinkTitle: {
        type: 'text',
        label: 'Titre du lien d\'accueil',
        validators: [{ fn: validators.required }]
      },
      logoText: {
        type: 'text',
        label: 'Texte du logo (JSON)',
        validators: [{ fn: validators.required }]
      },
      operatorLogo: {
        type: 'text',
        label: 'Logo opérateur (JSON)'
      },
      quickLinks: {
        type: 'text',
        label: 'Liens rapides (JSON)'
      }
    }
  },
  {
    type: 'DsfrHeaderMenuLink',
    label: 'Lien menu (header)',
    icon: 'ri-link',
    defaultProps: {
      text: 'Lien',
      href: '#',
      current: false
    },
    properties: {
      text: {
        type: 'text',
        label: 'Texte',
        validators: [{ fn: validators.required }]
      },
      href: {
        type: 'text',
        label: 'URL',
        validators: [{ fn: validators.required }]
      },
      current: {
        type: 'select',
        label: 'Page courante',
        options: [
          { value: false, label: 'Non' },
          { value: true, label: 'Oui' }
        ]
      }
    }
  },
  {
    type: 'DsfrHeaderMenuLinks',
    label: 'Liste liens menu (header)',
    icon: 'ri-list-unordered',
    defaultProps: {
      title: 'Menu',
      links: [
        {
          text: 'Lien 1',
          href: '#'
        },
        {
          text: 'Lien 2',
          href: '#'
        }
      ]
    },
    properties: {
      title: {
        type: 'text',
        label: 'Titre',
        validators: [{ fn: validators.required }]
      },
      links: {
        type: 'text',
        label: 'Liens (JSON)',
        validators: [{ fn: validators.required }]
      }
    }
  }
]