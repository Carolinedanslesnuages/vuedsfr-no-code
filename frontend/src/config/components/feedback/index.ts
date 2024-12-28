import { errorComponents } from './error'
import { tooltipComponents } from './tooltip'
import { transcriptionComponents } from './transcription'

export const feedbackComponents = [
  ...errorComponents,
  ...tooltipComponents,
  ...transcriptionComponents
]