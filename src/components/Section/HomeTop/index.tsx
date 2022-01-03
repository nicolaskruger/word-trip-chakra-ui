import { Box, Flex, Img, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";

export const SectionTop: FC = () => {
    return (
        <Box
            as="section"
            backgroundImage={"/Background.png"}
            backgroundSize={"cover"}
            width={"100%"}
        >
            <Flex
                mx={"auto"}
                maxW={"1480px"}
                justifyContent={"space-between"}
                align={"center"}
                px={"2"}
            >
                <Stack
                    spacing={"5"}
                    maxWidth={"500px"}
                >
                    <Text
                        as="h1"
                        fontWeight={"medium"}
                        fontSize={"2.25rem"}
                        color={"light.200"}
                    >
                        5 Continentes,<br />
                        infinitas possibilidades.
                    </Text>
                    <Text
                        fontWeight={"normal"}
                        fontSize={"1.25rem"}
                        color={"light.300"}
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Stack>
                <Img
                    src="/Airplane.svg"
                    width={417}
                    position={"relative"}
                    top={10}
                    transform={"rotate(3deg)"}
                />
            </Flex>
        </Box >
    )
}