export const SEARCH_MODE = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ? 'algolia' : 'local';
export const DEFAULT_INDEX = 'nokka_content';

export const searchConfig = {
  algolia: {
    appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
    searchKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || '',
    indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || DEFAULT_INDEX,
  },
  fuse: {
    keys: [
      { name: 'title', weight: 0.8 },
      { name: 'abstract', weight: 0.6 },
      { name: 'tags', weight: 0.4 },
      { name: 'authors', weight: 0.3 },
    ],
    threshold: 0.3,
    includeScore: true,
    includeMatches: true,
  },
}

export type SearchMode = typeof SEARCH_MODE
export type SearchConfig = typeof searchConfig