import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Image, Tooltip, position } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const { asPath } = useRouter()
  const isHomePage = asPath === "/" ? true : false

  return (
    <Flex
      as="header"
      w={1240}
      mx="auto"
      my={27}
      position="relative"
      align="center"
    >
      {isHomePage &&
        <Link href="/">
          <Tooltip
            label="Voltar ao Início"
            closeDelay={120}
            hasArrow
            fontSize="sm"
            bg="gray.100"
            color="gray.800"
            mt={1}
          >
            <IconButton
              icon={<ChevronLeftIcon fontSize={32} />}
              aria-label="Voltar ao Início"
              bg="transparent"
              position="absolute"
              top="50%"
              transform="translateY(-50%)"
              _hover={{
                bg: "gray.100"
              }}
            />
          </Tooltip>
        </Link>
      }

      <Image
        src='logo.svg'
        mx="auto"
        alt='Logo da Worldtrip'
      />
    </Flex >
  )
}