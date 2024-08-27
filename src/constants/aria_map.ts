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
    name: '野菜(グリル)',
    type: TYPE_TENT,
  },
  {
    number: 6,
    name: '主食(グリル)',
    type: TYPE_TENT,
  },
  {
    number: 9,
    name: 'シーフード(グリル)',
    type: TYPE_TENT,
  },
  {
    number: 10,
    name: '肉(グリル)',
    type: TYPE_TENT,
  },
  {
    number: 'a',
    name: '輪投げ&コーンホール',
    type: TYPE_BETWEEN_TENT,
  },
  {
    number: 'b',
    name: 'スーパーボール',
    type: TYPE_BETWEEN_TENT,
  },
  {
    number: 'c',
    name: 'ヨーヨー',
    type: TYPE_BETWEEN_TENT,
  },
] as const
