import axios from "axios"

type Continent = {
    title: string,
    banner: string
    text: string,
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

export const continetApi = () => {

    const instance = axios.create({
        baseURL: "http://localhost:3000/"
    })

    const getContinets = async () => {
        return (await instance.get<string[]>("/api/continent")).data
    }

    const getContinetByName = async (name: string) => {
        return (await instance.get<Continent>(`/api/continent/${name}`)).data
    }

    return {
        getContinetByName,
        getContinets
    }
}