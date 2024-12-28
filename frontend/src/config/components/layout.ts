import type { ComponentConfig } from '@/types'
import { validators } from '../property-validators'

export const layoutComponents: ComponentConfig[] = [
  // ... autres composants existants ...

  {
    type: 'DsfrFooter',
    label: 'Pied de page',
    icon: 'ri-layout-bottom-line',
    defaultProps: {
      brandTop: 'République Française',
      brandBottom: 'Nom de l\'organisation'
    },
    properties: {
      brandTop: {
        type: 'text',
        label: 'Texte supérieur'
      },
      brandBottom: {
        type: 'text',
        label: 'Texte inférieur'
      }
    }
  },
  {
    type: 'DsfrFooterLinkList',
    label: 'Liste de liens (footer)',
    icon: 'ri-list-unordered',
    defaultProps: {
      title: 'Catégorie'
    },
    properties: {
      title: {
        type: 'text',
        label: 'Titre',
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
      logos: []
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
  },
  {
    type: 'DsfrHeader',
    label: 'En-tête',
    icon: 'ri-layout-top-line',
    defaultProps: {
      serviceTitle: 'Nom du service',
      serviceDescription: 'Description du service'
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
      }
    }
  },
  {
    type: 'DsfrHeaderMenuLink',
    label: 'Lien menu (header)',
    icon: 'ri-link',
    defaultProps: {
      text: 'Lien',
      href: '#'
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
      }
    }
  },
  {
    type: 'DsfrHeaderMenuLinks',
    label: 'Liste liens menu (header)',
    icon: 'ri-list-unordered',
    defaultProps: {
      title: 'Menu'
    },
    properties: {
      title: {
        type: 'text',
        label: 'Titre',
        validators: [{ fn: validators.required }]
      }
    }
  },
  {
    type: 'DsfrErrorPage',
    label: 'Page d\'erreur',
    icon: 'ri-error-warning-line',
    defaultProps: {
      title: 'Erreur',
      description: 'Une erreur est survenue'
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
  }
]