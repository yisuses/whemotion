import { SimpleGrid } from '@chakra-ui/layout'
import { format, parseISO } from 'date-fns'

import { PostCard } from '@components/common'
import { getImageUrlFromMedia } from '@utils'

interface LatestPostsProps {
  posts: Post[]
}

export function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <SimpleGrid
      gridTemplateColumns={{
        base: 'repeat(auto-fill, minmax(100%, 1fr))',
        md: 'repeat(auto-fill, minmax(280px, 1fr))',
      }}
      spacing={8}
      mt={8}
    >
      {posts.map(({ id, categories, publishedAt, coverImage, title, summary, imgUrl }) => (
        <PostCard
          key={id}
          id={id}
          categories={
            categories
              ? categories.map(category => ({
                  key: category.code,
                  label: category.localizedName,
                }))
              : []
          }
          date={format(parseISO(publishedAt), 'dd.MM.yyyy')}
          imageUrl={getImageUrlFromMedia({ media: coverImage, format: 'small', fallback: imgUrl })}
          title={title}
          description={summary}
        />
      ))}
    </SimpleGrid>
  )
}
