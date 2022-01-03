import { Box, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { Options } from "./Options";


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
            </Stack>
        </Box>
    )
}