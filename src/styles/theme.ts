import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        highlight: {
            500: "#FFBA08"
        },
        light: {
            50: "#FFFFFF",
            200: "#F5F8FA",
            300: "#999999",
        },
        dark: {
            300: "#999999",
            700: "#47585B",
            900: "#000000"
        }
    },
    fonts: {
        body: "Poppins",
        heading: "Poppins",
    },
    styles: {
        global: {
            body: {
                bg: 'light.50',
                color: 'dark.700'
            }
        }
    }
});