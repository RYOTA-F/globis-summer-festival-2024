const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''

export const ENV = {
  GOOGLE_MAP_API_KEY,
} as const
