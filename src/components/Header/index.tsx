import { Box, Flex, Img } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { GoHome } from "./GoHome";

export const Header: FC = () => {

    const { asPath } = useRouter();

    return (
        <Box
            py={"6"}
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
                {asPath !== "/" && <GoHome />}
                <Img
                    height={"12"}
                    src="/Logo.svg"
                    alt="logo"
                />
            </Flex>
        </Box>
    )
}