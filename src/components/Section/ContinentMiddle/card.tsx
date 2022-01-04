import { Button, Icon, IconButton, Stack, Text, Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai"

type CardProps = {
    value: number,
    label: string,
    tooltip?: boolean,
    tooltipInfo?: string
}

export const Card: FC<CardProps> = ({ value,
    label,
    tooltip = false,
    tooltipInfo = "" }) => {
    return (
        <Stack
            spacing={"0.5"}
        >
            <Text
                fontSize={["1.5rem", "3rem"]}
                fontWeight={"semibold"}
                color={"highlight.500"}
            >
                {value}
            </Text>
            <Text
                fontSize={["1.125rem", "1.5rem"]}
            >
                {label}
                {tooltip &&
                    <Tooltip label={tooltipInfo}>
                        <IconButton
                            height={"10px"}
                            aria-label={tooltipInfo}
                            backgroundColor={"transparent"}
                            _hover={
                                {
                                    backgroundColor: "transparent"
                                }
                            }
                        >

                            <Icon as={AiOutlineInfoCircle} />
                        </IconButton>
                    </Tooltip>}
            </Text>
        </Stack >
    )
}