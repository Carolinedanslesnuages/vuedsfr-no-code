import type { PropValidator } from '@/types'

export const validators: Record<string, PropValidator> = {
  required: (value: any) => {
    if (value === undefined || value === null || value === '') {
      return 'Ce champ est requis'
    }
    return null
  },
  
  url: (value: string) => {
    if (!value) return null
    try {
      new URL(value)
      return null
    } catch {
      return 'URL invalide'
    }
  },

  minLength: (value: string, min: number) => {
    if (!value) return null
    if (value.length < min) {
      return `Minimum ${min} caractères`
    }
    return null
  },

  maxLength: (value: string, max: number) => {
    if (!value) return null
    if (value.length > max) {
      return `Maximum ${max} caractères`
    }
    return null
  }
}