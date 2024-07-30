export const ARIA_LABEL = 'contentItem' as const

interface Content {
  name: string
  image: string
  description: string
  type: string
}

export interface ContentItemProps {
  content: Content
}

export function ContentItem({ content }: ContentItemProps) {
  const border = content.type === 'main' ? 'border-main' : 'border-blue-300'

  return (
    <div
      className={`grid grid-cols-2 border-l-[10px] ${border}`}
      aria-label={ARIA_LABEL}
    >
      <div className="grid items-center">
        <span className="text-[1.3rem] font-bold text-center">
          {content.name}
        </span>
        <span>{content.description}</span>
      </div>
      <div className="flex justify-end col-span-1">
        <img
          src={content.image}
          alt={content.image}
          className="h-auto w-auto"
        />
      </div>
    </div>
  )
}
