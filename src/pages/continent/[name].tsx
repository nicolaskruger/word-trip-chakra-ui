import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { SectionBottom } from "../../components/Section/ContinentBottom";
import { SectionMiddle } from "../../components/Section/ContinentMiddle";
import { SectionTop } from "../../components/Section/ContinentTop";
import { continetApi } from "../../services/continetApi";

type Continent = {
    title: string,
    text: string,
    banner: string,
    numCounty: number,
    numLanguages: number,
    numCitys: number,
    citiys: {
        name: string,
        banner: string,
        flag: string,
        country: string,
    }[]
}

type Result = {
    continet: Continent
}

const ContinetPage: NextPage<Result> = ({ continet: {
    title,
    text,
    banner,
    numCounty,
    numLanguages,
    numCitys,
    citiys
} }) => {
    return (
        <Flex
            direction={"column"}
            as="main"
        >
            <SectionTop title={title} banner={banner} />
            <SectionMiddle
                text={text}
                numCountry={numCounty}
                numCities={numCitys}
                numLanguages={numLanguages} />
            <SectionBottom citiys={citiys} />
        </Flex>
    )
}

export default ContinetPage;


type Path = {
    name: string,
}

export const getStaticPaths: GetStaticPaths<Path> = async () => {
    const { getContinets } = continetApi();

    const response = await getContinets();

    return {
        paths: response.map(res => ({ params: { name: res } })),
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps<Result, Path> = async ({ params }) => {
    const { name } = params as Path;

    const { getContinetByName } = continetApi();

    const continet = await getContinetByName(name);

    return {
        props: {
            continet
        },
        revalidate: 60 * 60 * 24 // 24h
    }
}