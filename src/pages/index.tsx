import { ContinentsSlider } from "@/components/ContinentsSlider";
import { Hero } from "@/components/Hero";
import { TravelTypesList } from "@/components/TravelTypesList";
import { api } from "@/services/api";
import { Box, Divider, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";

type Continent = {
  id: number,
  name: string,
  shortDescription: string,
  description: string,
  imageHome: string,
  imagePage: string,
}

type ContinentData = Omit<Continent, 'description' | 'imagePage'>

interface HomeProps {
  continents: ContinentData[]
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

      <Box as="main" w="100%" mb="10">
        <Hero />

        <Box
          as="section"
          w={1240}
          mx="auto"
        >
          <TravelTypesList />

          <Divider borderWidth="2px" w="90px" borderColor="gray.800" mx="auto" />

          <Box my="52px">
            <Text align="center" fontWeight="medium" fontSize="4xl">Vamos nessa?</Text>
            <Text align="center" fontWeight="medium" fontSize="4xl">Então escolha seu continente</Text>
          </Box>

          <ContinentsSlider continents={continents} />
        </Box>
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<Continent[]>('continents')

  const continents = data.map(continent => {
    return {
      id: continent.id,
      name: continent.name,
      shortDescription: continent.shortDescription,
      imageHome: continent.imageHome,
    }
  })

  return {
    props: {
      continents
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}