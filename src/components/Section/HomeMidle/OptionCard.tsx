import { Box, Img, Stack, StackDirection, Text } from "@chakra-ui/react";
import { type } from "os";
import { FC } from "react";
import { useIsMobileContext } from "../../../contexts/IsMobileContext";


type Card = {
    title: string,
    src: string
}

type OptionCardProps = {
    card: Card
}


export const OptionCard: FC<OptionCardProps> = ({ card: { title, src } }) => {
    const isMobile = useIsMobileContext();
    const direction: StackDirection = isMobile ? "row" : "column";
    return (
        <Stack
            align={"center"}
            justify={"center"}
            direction={direction}
        >
            {!isMobile && <Img width={"85px"} src={src} alt={title} />}
            {isMobile &&
                <Box
                    border={"highlight.500"}
                    borderRadius={"full"}
                    w={"8px"}
                    h={"8px"}
                    backgroundColor={"highlight.500"}
                />}
            <Text
                fontSize={["1.125rem", "1.5rem"]}
                textAlign={"center"}
                color={"dark.700"}
            >
                {title}
            </Text>
        </Stack>
    )
}