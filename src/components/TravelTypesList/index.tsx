import { Flex } from "@chakra-ui/react";
import { TravelTypeItem } from "./TravelTypeItem";

export function TravelTypesList() {
  return (
    <Flex as="ul" mt={114} mb="20" justify="space-between" wrap="wrap">
      <TravelTypeItem src="assets/cocktail.jpg" alt="Ícone de um coquetel">
        vida noturna
      </TravelTypeItem>

      <TravelTypeItem src="assets/surf.jpg" alt="Ícone de um coquetel">
        praia
      </TravelTypeItem>

      <TravelTypeItem src="assets/building.jpg" alt="Ícone de um coquetel">
        moderno
      </TravelTypeItem>

      <TravelTypeItem src="assets/museum.jpg" alt="Ícone de um coquetel">
        clássico
      </TravelTypeItem>

      <TravelTypeItem src="assets/earth.jpg" alt="Ícone de um coquetel">
        e mais...
      </TravelTypeItem>
    </Flex>
  )
}