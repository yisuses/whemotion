import parseISO from 'date-fns/parseISO'
import { useTranslation } from 'next-i18next'

import { HeaderImage, LatestPosts, Metadata } from '@components/common'

export interface CategoryPageProps {
  category: Category
  latestPosts: Post[]
}

export function CategoryPage({ latestPosts, category }: CategoryPageProps) {
  const { t } = useTranslation('categoryPage')
  const lastPost = latestPosts?.[0]
  //TODO ldjson

  return (
    <>
      <Metadata
        name={t('categoryPage.title', { categoryName: category.name })}
        description={t('categoryPage.description', { categoryName: category.name })}
      />
      {lastPost ? (
        <HeaderImage
          imgSrc={lastPost.coverImage?.url || lastPost.imgUrl || 'https://picsum.photos/1440/600'}
          date={parseISO(lastPost.publishedAt)}
          categories={lastPost.categories}
          title={lastPost.title}
          subtitle={lastPost.summary}
        />
      ) : (
        <div>{t('categoryPage.noPublishedArticles')}</div>
      )}
      <LatestPosts title={t('latestPosts.title', { categoryName: category.name })} posts={latestPosts} />
    </>
  )
}
