import { Box, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Options } from "./Options";
import { SeparetedLine } from "./SeparatedLine";


export const SectionMidle: FC = () => {
    return (
        <Box
            marginTop={"24"}
            px={"5"}
            mx={"auto"}
            maxW={"1480px"}
        >
            <Stack>
                <Options />
                <SeparetedLine />
                <Box>
                    <Text
                        textAlign={"center"}
                        color={"dark.700"}
                        fontSize={["1.25rem", "2.25rem"]}
                        fontWeight={"medium"}
                        mb={["5", "12"]}
                    >
                        Vamos nessa?<br />
                        Então escolha seu continente
                    </Text>
                </Box>
            </Stack>
        </Box >
    )
}