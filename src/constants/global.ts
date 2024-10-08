const GLOBIS = 'GLOBIS' as const
const SUMMER_FESTIVAL = '夏祭り' as const
const YEAR_2024 = '2024' as const
const TITLE = `${GLOBIS}${SUMMER_FESTIVAL}${YEAR_2024}` as const
const DESCRIPTION = `G会が主催する夏祭りイベントです` as const
const COPY = `${TITLE} 実行委員` as const

export const SITE = {
  TITLE,
  DESCRIPTION,
  GLOBIS,
  SUMMER_FESTIVAL,
  YEAR_2024,
  COPY,
} as const
