import Image from 'next/image'

export interface IconProps {
  src: string
  width?: number
  height?: number
  alt?: string
}

export const ARIA_LABEL = 'icon' as const

export function Icon({ src, width = 24, height = 24, alt = '' }: IconProps) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      aria-label={ARIA_LABEL}
    />
  )
}
