import { navigationComponents } from './navigation'
import { formComponents } from './forms'
import { contentComponents } from './content'
import { dataComponents } from './data'
import { layoutComponents } from './layout'
import { feedbackComponents } from './feedback'
import { actionComponents } from './actions'
import type { ComponentConfig } from '@/types'

// Fusionner tous les composants
export const ALL_COMPONENTS: ComponentConfig[] = [
  ...navigationComponents,
  ...formComponents,
  ...contentComponents,
  ...dataComponents,
  ...layoutComponents,
  ...feedbackComponents,
  ...actionComponents
]

// Exporter aussi individuellement pour la rétrocompatibilité
export { navigationComponents }
export { formComponents }
export { contentComponents }
export { dataComponents }
export { layoutComponents }
export { feedbackComponents }
export { actionComponents }