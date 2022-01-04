import { Flex, Img, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";

type CardProps = {
    city: {
        name: string,
        banner: string,
        flag: string,
        country: string,
    }
}

export const Card: FC<CardProps> = ({ city: { name, banner, country, flag } }) => {
    return (
        <Flex
            flexDir={"column"}
            width={["256px"]}
        >
            <Img
                src={banner}
                alt={name}
                borderTopRadius={"5px"}
                width={["256px"]}
                height={["173px"]}
                objectFit={"cover"}
            />
            <Flex
                borderBottomRadius={"5px"}
                backgroundColor={"light.50"}
                justifyContent={"space-between"}
                alignItems={"center"}
                borderColor={"highlight.500"}
                borderBottomWidth={"1px"}
                borderLeftWidth={"1px"}
                borderRightWidth={"1px"}
                padding={"20px"}
            >
                <Stack>
                    <Text
                        fontWeight={"semibold"}
                        fontSize={["1.25rem"]}
                        color={"dark.700"}
                    >
                        {name}
                    </Text>
                    <Text
                        fontWeight={"medium"}
                        color={"dark.300"}
                        fontSize={["1rem"]}
                    >
                        {country}
                    </Text>
                </Stack>
                <Img
                    src={flag}
                    alt={country}
                    width={"30px"}
                    height={"30px"}
                    objectFit={"cover"}
                    borderRadius={"full"}
                />
            </Flex>
        </Flex>
    )
}