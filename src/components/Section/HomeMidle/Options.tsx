import { Box, Flex, SimpleGrid, Stack, } from "@chakra-ui/react";
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
        <Stack
            px={"4"}
            spacing={"7"}
        >
            {cardList.reduce((acc, curr, index) => {
                const val = Math.trunc(index / 2);
                acc[val][index % 2] = curr;
                return acc;
            }, "_".repeat(3).split("").map(_ => [{}, null] as Card[]))
                .map((card, index) => (
                    <Flex
                        key={index}
                        justify={card[1] == null ? "center" : "space-between"}
                    >
                        <OptionCard card={card[0]} />
                        {card[1] && <OptionCard card={card[1]} />}
                    </Flex>
                ))
            }
        </Stack>
    )
}