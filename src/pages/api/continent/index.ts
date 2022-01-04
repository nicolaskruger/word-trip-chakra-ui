import { NextApiRequest, NextApiResponse } from "next";

export type Continent = {
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

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<string[]>
) {
    res.status(200).json([
        "europe",
        "north-america",
        "south-america",
        "asia",
        "africa",
        "australia"
    ])
}
