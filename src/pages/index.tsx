import { useBreakpointValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SectionTop } from '../components/Section/HomeTop'

const Home: NextPage = () => {

  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <main>
      <SectionTop isMobile={isMobile} />
    </main>
  )
}

export default Home
