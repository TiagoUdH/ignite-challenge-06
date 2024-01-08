import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

interface SlideItemProps {
  continent: {
    id: number,
    name: string,
    shortDescription: string,
    imageHome: string,
  }
}

export function SliderItem({ continent }: SlideItemProps) {
  return (
    <Link href={`/contients/${continent.id}`}>
      <Box
        w="100%"
        h={450}
        bgImg={`url(${continent.imageHome})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="100% 100%"
      >
        <VStack pt="180px" color="gray.100" fontWeight="bold" spacing="4">
          <Heading align="center" fontSize="5xl">{continent.name}</Heading>
          <Text align="center" fontSize="2xl">{continent.shortDescription}</Text>
        </VStack>
      </Box>
    </Link>
  )
}