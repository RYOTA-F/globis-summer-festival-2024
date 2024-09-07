export const TYPE_TENT = 'TYPE_TENT' as const
export const TYPE_BETWEEN_TENT = 'TYPE_BETWEEN_TENT' as const

export const ARIA_MAP = [
  {
    number: 1,
    name: '幹事席',
    type: TYPE_TENT,
  },
  {
    number: 2,
    name: '受付',
    type: TYPE_TENT,
  },
  {
    number: 3,
    name: '歓談席',
    type: TYPE_TENT,
  },
  {
    number: 4,
    name: '歓談席',
    type: TYPE_TENT,
  },
  {
    number: 5,
    name: 'シーフード',
    type: TYPE_TENT,
  },
  {
    number: 6,
    name: '野菜',
    type: TYPE_TENT,
  },
  {
    number: 7,
    name: 'お肉',
    type: TYPE_TENT,
  },
  {
    number: 8,
    name: '主食',
    type: TYPE_TENT,
  },
  {
    number: 'A',
    name: '輪投げ &\nコーンホール',
    type: TYPE_BETWEEN_TENT,
  },
  {
    number: 'B',
    name: 'ヨーヨー &\nスーパーボール',
    type: TYPE_BETWEEN_TENT,
  },
  {
    number: 'C',
    name: 'クローク &\nうちわ',
    type: TYPE_BETWEEN_TENT,
  },
] as const
