import { Box, Flex, Img, Text } from "@chakra-ui/react"
import { FC } from "react"

type SectionTopProps = {
    title: string,
    banner: string
}

export const SectionTop: FC<SectionTopProps> = ({ title, banner }) => {



    return (
        <Box
            position={"relative"}
            height={["9.375rem", "31.25rem"]}
            width={"100%"}
        >
            <Img
                width={"100%"}
                height={["9.375rem", "31.25rem"]}
                objectFit={"cover"}
                position={"absolute"}
                src={banner}
                alt={title}
                zIndex={-1}
                filter={"brightness(35%)"}
            />
            <Flex
                px={"5"}
                width={"100%"}
                height={["9.375rem", "31.25rem"]}
                mx={"auto"}
                maxW={"1480px"}
                justifyContent={["center", "flex-start"]}
                alignItems={["center", "flex-end"]}
                py={"8"}
            >
                <Text
                    fontWeight={"semibold"}
                    fontSize={["1.75rem", "3rem"]}
                    color={"light.200"}
                >
                    {title}
                </Text>
            </Flex>
        </Box>
    )
}

