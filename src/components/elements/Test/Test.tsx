export interface TestProps {
  text: string
}

export const TEST = 'test' as const

export function Test({ text }: TestProps) {
  return <div aria-label={TEST}>{text}</div>
}
