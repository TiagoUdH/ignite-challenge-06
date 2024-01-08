import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypeItemProps {
  src: string;
  alt: string;
  children: string;
}

export function TravelTypeItem({ src, alt, children }: TravelTypeItemProps) {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      as="li"
      listStyleType="none"
    >
      <Image
        src={src}
        alt={alt}
        h={85}
        w={85}
        mb="6"
      />
      <Text fontWeight="semibold" fontSize="2xl" color="gray.800">{children}</Text>
    </Flex>
  )
}