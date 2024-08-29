import { SECTION_ID } from './section'

export const HOME_URL = '/#'
export const ACCESS_URL = '/access#'

export const HEADER_NAVIGATION = [
  {
    URL: `${HOME_URL}${SECTION_ID.ABOUT}`,
    NAME: 'ABOUT',
  },
  {
    URL: `${HOME_URL}${SECTION_ID.INFORMATION}`,
    NAME: 'INFORMATION',
  },
  {
    URL: `${HOME_URL}${SECTION_ID.ARIA_MAP}`,
    NAME: 'ARIA MAP',
  },
  // {
  //   URL: `${HOME_URL}${SECTION_ID.CONTENTS}`,
  //   NAME: 'CONTENTS',
  // },
  {
    URL: `${ACCESS_URL}`,
    NAME: 'ACCESS',
  },
  {
    URL: `${ACCESS_URL}${SECTION_ID.ROUTE}`,
    NAME: 'ROUTE',
  },
] as const

export const ACCORDION_NAVIGATION = [
  {
    URL: `${HOME_URL}${SECTION_ID.ABOUT}`,
    NAME: 'イベント概要',
  },
  {
    URL: `${HOME_URL}${SECTION_ID.INFORMATION}`,
    NAME: 'イベント情報',
  },
  {
    URL: `${HOME_URL}${SECTION_ID.ARIA_MAP}`,
    NAME: '会場マップ',
  },
  // {
  //   URL: `${HOME_URL}${SECTION_ID.CONTENTS}`,
  //   NAME: 'CONTENTS',
  // },
  {
    URL: `${ACCESS_URL}`,
    NAME: 'アクセス',
  },
  {
    URL: `${ACCESS_URL}${SECTION_ID.ROUTE}`,
    NAME: '経路',
  },
] as const
