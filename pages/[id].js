import Head from 'next/head'
import { Header } from '../components/Header'
import { Hero, HeroImage, HeroList, HeroListItem, HeroSection, HeroTitle } from '../components/Hero'
import { OSList } from '../components/OSList'
import GooglePageContent from '../components/GooglePageContent'
import { Footer } from '../components/Footer'
import {pages} from '../pages'

export default function Home({ subid }) {

  return (
    <>
      <Head>
        <title>Paras7VPN</title>
        <link rel="icon" href="https://paras7vpn.fi/assets/img/logo.png" />
      </Head>
      <Header />
      <Hero>
        <HeroSection>
          <HeroTitle text="Parasta VPN-palvelua Suomessa" />
          <HeroList>
            <HeroListItem text="Turvallinen, salattu ja yksityinen verkon selaaminen" />
            <HeroListItem text="Rajaton pääsy verkkosivuille ja sovelluksiin" />
            <HeroListItem text="Ilmaiset koeajat & tyytyväisyystakuu" />
            <HeroListItem text="Todella nopeat nopeudet, täydellisiä HD-suoratoistoon" />
          </HeroList>
          <OSList text="Saatavilla:"/>
        </HeroSection>
        <HeroSection>
          <HeroImage url="https://paras7vpn.fi/assets/img/finland.png" />
        </HeroSection>
      </Hero>
      <GooglePageContent subid={subid}/>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const paths = pages.map(page => ({
    params: { id: page.id }
  }))

  return { paths, fallback: false }
}

export function getStaticProps({ params }) {

  const currentPage = pages.find(page => page.id === params.id)

  return { props: { subid: currentPage.subid } }

}
