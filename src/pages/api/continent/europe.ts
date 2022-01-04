import { NextApiRequest, NextApiResponse } from "next";
import { Continent } from ".";

const text = "A Europa é, por convenção, um dos seis" +
    "continentes do mundo. Compreendendo a " +
    "península ocidental da Eurásia, a Europa " +
    "geralmente divide-se da Ásia a leste pela " +
    "divisória de águas dos montes Urais, o rio Ural, " +
    "o mar Cáspio, o Cáucaso, e o mar Negro a sudeste"

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Continent>
) {
    res.status(200).json({
        title: "Europa",
        text,
        banner: "/continent/europe.jpg",
        numCounty: 50,
        numLanguages: 60,
        numCitys: 27,
        citiys: [
            {
                name: "Londres",
                country: "Reino Unido",
                flag: "/flag/united-kindon.jpg",
                banner: "/country/london.jpg"
            },
            {
                name: "Paris",
                country: "França",
                flag: "/flag/france.jpg",
                banner: "/country/paris.jpg"
            },
            {
                name: "Roma",
                country: "Itália",
                flag: "/flag/italy.jpg",
                banner: "/country/roma.jpg"
            },
            {
                name: "Praga",
                country: "República Tcheca",
                flag: "/flag/tcheca.jpg",
                banner: "/country/praga.jpg"
            },
            {
                name: "Amsterdã",
                country: "Holanda",
                flag: "/flag/holand.jpg",
                banner: "/country/amsterda.jpg"
            },
        ]
    })
}
