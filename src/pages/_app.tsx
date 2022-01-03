import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { IsMobileProvider } from '../contexts/IsMobileContext'
import { theme } from '../styles/theme'
import "../styles/global.css"

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <ChakraProvider theme={theme}>
      <IsMobileProvider>
        <Header />
        <Component {...pageProps} />
      </IsMobileProvider>
    </ChakraProvider>
  )
}

export default MyApp
