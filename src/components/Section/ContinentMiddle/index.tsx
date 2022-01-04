import { HStack, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import { Card } from "./card";

type SectionMiddleProps = {
    numCountry: number,
    numLanguages: number,
    numCities: number,
    text: string
}

type CardProps = {
    value: number,
    label: string,
    tooltip?: boolean,
    tooltipInfo?: string
}


export const SectionMiddle: FC<SectionMiddleProps> = ({
    text,
    numCountry,
    numLanguages,
    numCities
}) => {
    const cardList: CardProps[] = [
        {
            value: numCountry,
            label: "países",
        },
        {
            value: numLanguages,
            label: "linguas"
        },
        {
            value: numCities,
            label: "cidades +100",
            tooltip: true,
            tooltipInfo: "numero de cidades"
        }
    ]
    return (
        <SimpleGrid
            mt={"20"}
            minChildWidth={"50%"}
            column={2}
        >
            <Text>
                {text}
            </Text>
            <HStack>
                {cardList.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </HStack>
        </SimpleGrid>
    )
}