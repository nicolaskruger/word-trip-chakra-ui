import { Flex, HStack, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
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
            mt={["3", "20"]}
            mb={["4", "20"]}
            minChildWidth={["100%", "100%", "47.5%"]}
            px={"5"}
            column={2}
            mx={"auto"}
            maxW={"1480px"}
            gap={"5%"}
        >
            <Text
                textAlign={"justify"}
                fontSize={["0.875rem", "1.5rem"]}
                color={"dark.700"}
            >
                {text}
            </Text>
            <Flex
                justifyContent={"space-between"}
                align={["center"]}
            >
                {cardList.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </Flex>
        </SimpleGrid>
    )
}