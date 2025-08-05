export const translations = {
  hu: {
    // Navigation
    'nav.research': 'Kutatás',
    'nav.consulting': 'Tanácsadás', 
    'nav.education': 'Oktatás',
    'nav.about': 'Rólunk',
    'nav.contact': 'Kapcsolat',
    
    // Common
    'common.search': 'Keresés',
    'common.loading': 'Betöltés...',
    'common.readMore': 'Tovább olvasás',
    'common.download': 'Letöltés',
    'common.back': 'Vissza',
    'common.close': 'Bezárás',
    'common.submit': 'Küldés',
    'common.cancel': 'Mégse',
    
    // Hero
    'hero.title': 'Közgazdasági kutatás. Tanácsadás. Oktatás.',
    'hero.subtitle': 'NOKKA – magyar kutatói közösség és innovációs műhely.',
    'hero.cta.research': 'Fedezd fel a kutatásokat',
    'hero.cta.contact': 'Kapcsolatfelvétel',
    
    // Search
    'search.placeholder': 'Keresés a kutatásokban...',
    'search.results': 'találat',
    'search.noResults': 'Nincs találat',
    'search.clearFilters': 'Szűrők törlése',
    'search.filters': 'Szűrők',
    'search.sortBy': 'Rendezés',
    'search.sortBy.recent': 'Legfrissebb',
    'search.sortBy.alphabetical': 'Ábécé szerint',
    
    // Contact
    'contact.title': 'Kapcsolatfelvétel',
    'contact.name': 'Név',
    'contact.email': 'E-mail cím',
    'contact.organization': 'Szervezet',
    'contact.message': 'Üzenet',
    'contact.topic': 'Téma',
    'contact.consent': 'Hozzájárulok az adataim kezeléséhez',
    'contact.success': 'Üzenetét sikeresen elküldtük!',
    'contact.error': 'Hiba történt az üzenet küldése során.',
  },
  en: {
    // Navigation
    'nav.research': 'Research',
    'nav.consulting': 'Consulting',
    'nav.education': 'Education', 
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Common
    'common.search': 'Search',
    'common.loading': 'Loading...',
    'common.readMore': 'Read more',
    'common.download': 'Download',
    'common.back': 'Back',
    'common.close': 'Close',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    
    // Hero
    'hero.title': 'Economic research. Consulting. Education.',
    'hero.subtitle': 'NOKKA – Hungarian research community and innovation workshop.',
    'hero.cta.research': 'Explore research',
    'hero.cta.contact': 'Get in touch',
    
    // Search
    'search.placeholder': 'Search research...',
    'search.results': 'results',
    'search.noResults': 'No results found',
    'search.clearFilters': 'Clear filters',
    'search.filters': 'Filters',
    'search.sortBy': 'Sort by',
    'search.sortBy.recent': 'Most recent',
    'search.sortBy.alphabetical': 'Alphabetical',
    
    // Contact
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.email': 'Email address',
    'contact.organization': 'Organization',
    'contact.message': 'Message',
    'contact.topic': 'Topic',
    'contact.consent': 'I consent to the processing of my data',
    'contact.success': 'Your message was sent successfully!',
    'contact.error': 'An error occurred while sending your message.',
  },
} as const

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.hu

export function useI18n(lang: Language = 'hu') {
  const t = (key: TranslationKey): string => {
    return translations[lang][key] || translations.hu[key] || key
  }
  
  return { t, lang }
}