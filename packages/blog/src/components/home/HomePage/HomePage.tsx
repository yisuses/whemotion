import { useTranslation } from 'next-i18next'

import { Metadata, HeaderImage } from '@components/common'
import { useGetCategories } from '@hooks'
import { HomeLatestPosts } from '../HomeLatestPosts'
export interface HomePageProps {
  latestPosts: Post[]
}

export function HomePage({ latestPosts }: HomePageProps) {
  const { t } = useTranslation('homePage')

  const categories = useGetCategories()
  const lastPost = latestPosts?.[0]

  //TODO ldjson

  return (
    <>
      <Metadata name={t('homePage.title')} description={t('homePage.description')} />
      {lastPost ? <HeaderImage post={lastPost} showPostInfo /> : <div>{t('homePage.noPublishedArticles')}</div>}

      <HomeLatestPosts title={t('latestPosts.title')} categories={categories} posts={latestPosts} />
    </>
  )
}
