export interface Position {
  x: number
  y: number
}

export interface EditorElement {
  id: string
  type: string
  props: Record<string, any>
  position: Position
}

export type PropValidator = (value: any, ...args: any[]) => string | null

export interface PropertyConfig {
  type: 'text' | 'textarea' | 'select' | 'url' | 'number'
  label: string
  validators?: Array<{
    fn: PropValidator
    args?: any[]
  }>
  options?: Array<{
    value: any
    label: string
  }>
}

export interface ComponentConfig {
  type: string
  label: string
  icon: string
  defaultProps: Record<string, any>
  properties: Record<string, PropertyConfig>
}