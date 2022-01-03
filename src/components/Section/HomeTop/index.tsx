import { Box, Flex, Img, Stack } from "@chakra-ui/react";
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
                <Stack>

                </Stack>
                <Img
                    src="/Airplane.svg"
                    width={417}
                    position={"relative"}
                    top={10}
                    transform={"rotate(3deg)"}
                />
            </Flex>
        </Box>
    )
}