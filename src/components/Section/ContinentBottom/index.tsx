import { Box, Flex, SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { FC } from "react";
import { useIsMobileContext } from "../../../contexts/IsMobileContext";
import { Card } from "./card";

type SectionBottomProps = {
    citiys: {
        name: string,
        banner: string,
        flag: string,
        country: string,
    }[]
}


export const SectionBottom: FC<SectionBottomProps> = ({ citiys }) => {
    const isMobile = useBreakpointValue({
        base: true,
        md: false
    });

    const renderList = () => {
        return <>
            {citiys.map((city, index) => (
                <Card key={index} city={city} />
            ))}
        </>
    }

    return (
        <Box
            px={"5"}
            mx={"auto"}
            maxW={"1480px"}
            width={"100%"}
        >
            <Text
                as="h1"
                fontWeight={"medium"}
                fontSize={["1.5rem", "2.25rem"]}
            >
                Cidades +100
            </Text>
            {isMobile ?
                (
                    <Flex
                        justifyContent={"center"}
                        marginTop={"20px"}
                    >
                        <Stack
                            spacing={"20px"}
                        >
                            {renderList()}
                        </Stack>

                    </Flex>
                ) :
                <SimpleGrid
                    marginTop={"40px"}
                    minChildWidth={"300px"}
                    gap={"48px"}
                >
                    {citiys.map((city, index) => (
                        <Card key={index} city={city} />
                    ))}
                </SimpleGrid>
            }
        </Box>
    )
}