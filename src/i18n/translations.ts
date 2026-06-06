export type Language = 'en' | 'id';

import contentData from '../data/content.json';

// Sync translations with JSON data
export const mergedTranslations = contentData as Record<Language, any>;
