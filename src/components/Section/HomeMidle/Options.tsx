import { Box, Flex, SimpleGrid, } from "@chakra-ui/react";
import { FC } from "react";
import { useIsMobileContext } from "../../../contexts/IsMobileContext";
import { OptionCard } from "./OptionCard";

type Card = {
    title: string,
    src: string,
}

const cardList: Card[] = [
    {
        title: "vida noturna",
        src: "/icon/cocktail.svg"
    },
    {
        title: "praia",
        src: "/icon/surf.svg"
    },
    {
        title: "moderno",
        src: "/icon/building.svg"
    },
    {
        title: "clásico",
        src: "/icon/museum.svg"
    },
    {
        title: "e mais...",
        src: "/icon/earth.svg"
    },
]

export const Options: FC = () => {

    const isMobile = useIsMobileContext();

    if (!isMobile)
        return (
            <Flex
                justifyContent={"space-between"}
                align={"center"}
            >
                {
                    cardList.map(card => (
                        <OptionCard card={card} key={card.title} />
                    ))
                }
            </Flex >
        )
    return (
        <SimpleGrid
            alignSelf={"center"}
            columns={2}
            spacing={10}
            spacingX={100}
        >
            {
                cardList.map(card => (
                    <OptionCard card={card} key={card.title} />
                ))
            }
        </SimpleGrid>
    )
}