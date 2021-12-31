import { Icon, IconButton, Link as LinkC } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { BsChevronLeft } from "react-icons/bs";

export const GoHome: FC = () => {
    return (
        <Link href={"/"} passHref>
            <LinkC cursor={"pointer"} pos={"absolute"} left={0}>
                <Icon as={BsChevronLeft} />
            </LinkC>
        </Link>
    )
}