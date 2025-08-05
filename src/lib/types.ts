export interface ResearchItem {
  slug: string
  title: string
  abstract: string
  authors: string[]
  type: 'paper' | 'blog' | 'project'
  tags: string[]
  language: 'hu' | 'en'
  publishedAt: string
  doi?: string
  pdf?: string
  cover?: string
  content?: string
}

export interface SearchFilters {
  types: string[]
  tags: string[]
  authors: string[]
  yearRange: [number, number]
  language: 'all' | 'hu' | 'en'
}

export interface SearchResult {
  item: ResearchItem
  score?: number
  matches?: any[]
}

export interface ContactFormData {
  name: string
  email: string
  organization?: string
  topic: string
  message: string
  consent: boolean
}