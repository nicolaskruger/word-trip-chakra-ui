import { useBreakpointValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SectionBottom } from '../components/Section/HomeBottom'
import { SectionMidle } from '../components/Section/HomeMidle'
import { SectionTop } from '../components/Section/HomeTop'

const Home: NextPage = () => {

  const isMobile: boolean = useBreakpointValue({
    base: true,
    lg: false
  }) as boolean;

  return (
    <main>
      <SectionTop />
      <SectionMidle />
      <SectionBottom />
    </main>
  )
}

export default Home
