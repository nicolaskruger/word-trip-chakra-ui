import { Flex, Img, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

type SlideType = {
    src: string,
    title: string,
    subTitle: string,
    href: string,
}

type SlideProps = {
    slide: SlideType
}

export const Slide: FC<SlideProps> = ({ slide: { src, title, subTitle, href } }) => {
    return (
        <Link href={href} passHref>
            <Flex
                as="a"
                width={"100vw"}
                height={["250px", "450px"]}
                backgroundSize={"cover"}
                position={"relative"}
                align={"center"}
                justify={"center"}
                flexDir={"column"}
            >
                <Img
                    position={"absolute"}
                    height={"100%"}
                    width={"100%"}
                    src={src}
                    zIndex={-1}
                    filter={"brightness(20%)"}
                    objectFit={"cover"}
                    objectPosition={"center"}
                />
                <Text
                    as="h1"
                    fontWeight={"bold"}
                    fontSize={["1.5rem", "3rem"]}
                    color={"light.200"}
                >
                    {title}
                </Text>
                <Text
                    fontWeight={"bold"}
                    fontSize={["0.875rem", "1.5rem"]}
                    color={"light.200"}
                >
                    {subTitle}
                </Text>
            </Flex>
        </Link>
    )
}