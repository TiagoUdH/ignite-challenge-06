import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Hero() {
  return (
    <Box
      as="header"
      backgroundImage="url('assets/bg-hero.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="100% 100%"
      w="100%"
      h="335px"
    >
      <Flex
        justify="space-between"
        pt={20}
        px="140px"
        pb="70px"
      >
        <Box>
          <Heading
            as="h1"
            color="gray.50"
            w={426}
            h={105}
            fontSize={36}
            fontWeight="medium"
            mb={5}
          >
            5 Continentes,<br />infinitas possibilidades.
          </Heading>

          <Text
            w={526}
            color="gray.100"
            fontWeight="regular"
            fontSize={20}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image src="assets/airplane.svg" />
      </Flex>
    </Box>
  );
}