import { Box, Text, Flex, Divider } from '@chakra-ui/layout'
import format from 'date-fns/format'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Tag } from '@components/common/Tag/Tag'

interface HeaderImageProps {
  imgSrc: string
  title: string
  subtitle: string
  date: Date
  categories: Category[]
}

export function HeaderImage({ imgSrc, categories, title, subtitle, date }: HeaderImageProps) {
  const { locale: appLocale } = useRouter()
  const renderedCategories = categories.slice(0, 3)

  return (
    <Box height={{ base: 350, md: 400, lg: 600 }} position="relative">
      <Image src={imgSrc} layout="fill" objectFit="cover" priority />
      <Box
        position="absolute"
        top={{ base: '45%', lg: '50%' }}
        ml={{ base: '15px', lg: '70px' }}
        mr={{ base: '15px', lg: '70px' }}
        maxWidth={{ base: '100%', lg: '530px' }}
        p="24px"
        borderRadius="5px"
        boxShadow="2px 2px 32px #0007"
        backgroundColor="blackAlpha.800"
        css={{
          '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(0,0,0,0.7)',
          },
        }}
      >
        <Flex gap="10px">
          {renderedCategories.map(({ name, locale, code }) => (
            <Tag
              mb={{ base: '8px', md: '12px', lg: '16px' }}
              key={code}
              size="md"
              label={(locale && locale?.[appLocale as AppLocales]) || name}
            />
          ))}
        </Flex>
        <Text
          fontWeight={700}
          fontSize={{ base: '20px', lg: '32px' }}
          lineHeight={{ base: '36px', lg: '40px' }}
          color="white"
          textShadow="0px 4px 3px rgb(0 0 0 / 40%), 0px 0px 0px rgb(0 0 0 / 10%), 0px 0px 0px rgb(0 0 0 / 10%)"
          mb={{ base: '8px', lg: '16px' }}
          noOfLines={{ base: 1, lg: 2 }}
        >
          {title}
        </Text>
        <Flex
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems="flex-start"
          color="white"
          fontWeight="600"
          fontSize={{ base: '12px', lg: '14px' }}
        >
          <Text mb={{ base: 2, lg: 0 }}>{format(date, 'dd.MM.yyyy')}</Text>
          <Divider
            display={{ base: 'none', lg: 'block' }}
            orientation="horizontal"
            w="45px"
            pt="8px"
            m="0 16px"
            opacity={1}
          />
          <Text noOfLines={{ base: 2, md: 3, lg: 5 }} fontStyle="italic" fontFamily="spartan">
            {subtitle}
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}