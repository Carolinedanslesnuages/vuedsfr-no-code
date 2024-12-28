import type { ComponentConfig } from '@/types'
import { validators } from '../../property-validators'

export const footerComponents: ComponentConfig[] = [
  {
    type: 'DsfrFooter',
    label: 'Pied de page',
    icon: 'ri-layout-bottom-line',
    defaultProps: {
      brandTop: 'République Française',
      brandBottom: 'Nom de l\'organisation',
      accessibility: 'Accessibilité : non conforme',
      legal: [
        {
          text: 'Mentions légales',
          href: '#'
        },
        {
          text: 'Données personnelles',
          href: '#'
        }
      ],
      contentDescription: 'Description du contenu'
    },
    properties: {
      brandTop: {
        type: 'text',
        label: 'Texte supérieur',
        validators: [{ fn: validators.required }]
      },
      brandBottom: {
        type: 'text',
        label: 'Texte inférieur',
        validators: [{ fn: validators.required }]
      },
      accessibility: {
        type: 'text',
        label: 'Texte d\'accessibilité'
      },
      legal: {
        type: 'text',
        label: 'Liens légaux (JSON)',
        validators: [{ fn: validators.required }]
      },
      contentDescription: {
        type: 'text',
        label: 'Description du contenu'
      }
    }
  },
  {
    type: 'DsfrFooterLinkList',
    label: 'Liste de liens (footer)',
    icon: 'ri-list-unordered',
    defaultProps: {
      title: 'Catégorie',
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
  },
  {
    type: 'DsfrFooterLink',
    label: 'Lien (footer)',
    icon: 'ri-link',
    defaultProps: {
      href: '#',
      text: 'Lien'
    },
    properties: {
      href: {
        type: 'text',
        label: 'URL',
        validators: [{ fn: validators.required }]
      },
      text: {
        type: 'text',
        label: 'Texte',
        validators: [{ fn: validators.required }]
      }
    }
  },
  {
    type: 'DsfrFooterPartners',
    label: 'Partenaires (footer)',
    icon: 'ri-group-line',
    defaultProps: {
      title: 'Nos partenaires',
      logos: [
        {
          imgUrl: '#',
          alt: 'Logo partenaire',
          href: '#'
        }
      ]
    },
    properties: {
      title: {
        type: 'text',
        label: 'Titre'
      },
      logos: {
        type: 'text',
        label: 'Logos (JSON)',
        validators: [{ fn: validators.required }]
      }
    }
  }
]