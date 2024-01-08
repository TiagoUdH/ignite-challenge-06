import { Hero } from "@/components/Hero";
import { TravelTypesList } from "@/components/TravelTypesList";
import { Box } from "@chakra-ui/react";

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
      </Box>
    </Box>
  )
}
