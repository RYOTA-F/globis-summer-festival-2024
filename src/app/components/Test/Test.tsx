interface TestProps {
  text: string
}

export function Test({ text }: TestProps) {
  return <div>{text}</div>
}
