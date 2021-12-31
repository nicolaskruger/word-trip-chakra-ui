import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { GoHome } from "./GoHome";

export const Header: FC = () => {
    return (
        <Box
            py={"4"}
            px={"2"}
            mx={"auto"}
            maxW={"1480px"}
        >
            <Flex
                w={"100%"}
                align={"center"}
                justify={"center"}
                pos={"relative"}
            >
                <GoHome />
                HEADER
            </Flex>
        </Box>
    )
}