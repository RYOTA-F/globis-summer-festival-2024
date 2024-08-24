import { SECTION_ID } from './section'

export const HOME_URL = '/#'
export const ACCESS_URL = '/access#'

export const NAVIGATION = [
  {
    URL: `${HOME_URL}${SECTION_ID.ABOUT}`,
    NAME: 'ABOUT',
  },
  {
    URL: `${HOME_URL}${SECTION_ID.INFORMATION}`,
    NAME: 'INFORMATION',
  },
  // {
  //   URL: `${HOME_URL}${SECTION_ID.ARIA_MAP}`,
  //   NAME: 'ARIA MAP',
  // },
  // {
  //   URL: `${HOME_URL}${SECTION_ID.CONTENTS}`,
  //   NAME: 'CONTENTS',
  // },
  {
    URL: `${HOME_URL}${SECTION_ID.ACCESS}`,
    NAME: 'ACCESS',
  },
  {
    URL: `${ACCESS_URL}${SECTION_ID.ROUTE}`,
    NAME: 'ROUTE',
  },
] as const
