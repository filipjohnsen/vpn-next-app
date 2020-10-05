import Head from 'next/head'
import { Header } from '../components/Header'
import { Hero, HeroImage, HeroList, HeroListItem, HeroSection, HeroTitle } from '../components/Hero'
import { OSList } from '../components/OSList'
import GooglePageContent from '../components/GooglePageContent'
import { Footer } from '../components/Footer'

export default function Home() {
  const subid = "finland404"
  return (
    <>
      <Head>
        <title>Paras7VPN</title>
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