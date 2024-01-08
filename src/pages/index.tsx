import { ContinentsSlider } from "@/components/ContinentsSlider";
import { Hero } from "@/components/Hero";
import { TravelTypesList } from "@/components/TravelTypesList";
import { Box, Divider, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as="main" w="100%">
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
      </Box>
    </Box>
  )
}
