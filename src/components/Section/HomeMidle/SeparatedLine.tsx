import { Box, Flex } from "@chakra-ui/react"
import { FC } from "react"

export const SeparetedLine: FC = () => {
    return (
        <Flex
            align={"center"}
            justifyContent={"center"}
        >
            <Box
                mt={["9", "20"]}
                mb={["6", "12"]}
                height={"1px"}
                width={["60px", "90px"]}
                backgroundColor={"dark.700"}
            />
        </Flex>
    )
}