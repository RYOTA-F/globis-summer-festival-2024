import { SectionTemplate } from '../../../components/templates/SectionTemplate/SectionTemplate'
import { ContentItem } from '../../../components/ContentItem/ContentItem'
import { CONTENTS, MAIN, SUB } from '../../../constants/contents'
import { TextLabel } from '../../../components/elements/TextLabel/TextLabel'
import { SECTION_ID } from '../../../constants/section'

export const ARIA_LABEL = 'contents' as const

export function ContentsSection() {
  const mainContents = CONTENTS.filter((content) => content.type === MAIN)
  const subContents = CONTENTS.filter((content) => content.type === SUB)

  return (
    <SectionTemplate
      id={SECTION_ID.CONTENTS}
      title="コンテンツ"
      subTitle="CONTENTS"
      height="auto"
      ariaLabel={ARIA_LABEL}
    >
      <div>
        <div>
          <TextLabel>メインコンテンツ</TextLabel>
          <div className="w-full grid grid-cols-2 gap-10 mt-5">
            {mainContents.map((content) => (
              <ContentItem content={content} key={content.name} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <TextLabel>サブコンテンツ</TextLabel>
          <div className="w-full grid grid-cols-2 gap-10 mt-5">
            {subContents.map((content) => (
              <ContentItem content={content} key={content.name} />
            ))}
          </div>
        </div>
      </div>
    </SectionTemplate>
  )
}
