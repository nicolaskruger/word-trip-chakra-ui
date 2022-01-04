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
        <Stack>
            <Text>
                {value}
            </Text>
            <Text>
                {label}
                {tooltip &&
                    <Tooltip label={tooltipInfo}>
                        <IconButton aria-label={tooltipInfo}>

                            <Icon as={AiOutlineInfoCircle} />
                        </IconButton>
                    </Tooltip>}
            </Text>
        </Stack >
    )
}