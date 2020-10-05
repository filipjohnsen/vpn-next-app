import React from 'react'
import { Content, ContentContainer, ContentImage, ContentTitle, Paragraph } from './Content'
import { Leaderboard } from './Leaderboard'

function GooglePageContent({ subid }) {
  return (
    <ContentContainer>
      <Leaderboard subid={subid} />
      <Content>
        <ContentTitle text="Mikä on VPN?" />
        <ContentImage caption="ExpressVPN" url="https://paras7vpn.fi/assets/img/expressvpn.png" />
        <Paragraph text="VPN luo turvallisen, salatun ”tunnelin” internetiin tietokoneesi, älypuhelimesi tai tablettisi ja haluamasi verkkosivun tai sovelluksen välillä." />
        <Paragraph text="Tämä on mahdollista, koska yhteys kulkee toisen maan VPN-palvelimen kautta. Tämä takia näyttää siltä, että olet ”paikallinen” vierailija." />
        <Paragraph text="Kun IP-osoitteesi korvataan VPN-palvelimella, olet anonyymi." />
        <Paragraph text="Sinun on vain asennettava VPN-sovellus laitteellesi. Parhaat VPN-ohjelmat toimivat tietokoneissa, älypuhelimissa, tableteilla yms." />
        <Paragraph text="Kun haluat piilottaa oikean sijaintisi, voit avata VPN-ohjelman ja yhdistää maahan, jonka vierailija haluat olla. Tämän jälkeen voit käyttää selaintasi ja muita ohjelmia tavalliseen tapaan.." />
        <ContentTitle text="Miten yhdistän VPN-palvelimeen?" />
        <Paragraph text="Yleisin tapa on käyttää VPN-sovellusta, jonka asentaa haluamaansa laitteeseen. VPN-ohjelma antaa mahdollisuuden yhdistää moneen eri palvelimeen ympäri maailman." />
        <Paragraph text="Saatavilla olevien sijaintien määrä riippuu käytetystä VPN-tarjoajasta. Käyttämällä VPN-ohjelmaa, luot turvallisen yhteyden laitteesi ja palvelimen, tietoverkon tai muun digitaalisen laitteen välillä." />
        <Paragraph text="Käyttämäsi VPN-tyyppi riippuu siitä, miten haluat luoda yhteyden internetiin ja miten turvallisen yhteyden haluat." />
        <Paragraph text="Useimmissa tapauksissa tarvitsee vain rekisteröityä VPN-palveluun ja asentaa sovellus laitteelle ennen kuin voi yhdistää VPN:ään. Useimmat VPN-palvelut tarjoavat ohjelmistoja kaikille suurille käyttöjärjestelmille." />
        <ContentTitle text="Mitkä ovat VPN-ohjelman edut?" />
        <Paragraph text="VPN-ohjelman käyttöön liittyy monia etuja. Jos tarvitset täyttä yksityisyyttä, VPN on paras vaihtoehto. Toisin kuin proxy-palvelut tai muut IP-osoitteen piilottavat sovellukset, VPN tarjoaa paremman yksityisyyden luomalla turvallisen yhteyden laitteen ja palvelimen tai yhdistetyn verkon välillä." />
        <Paragraph text="VPN antaa myös ylimääräistä turvaa. Jos sinun on lähetettävä tai vastaanotettava arkaluonteisia tietoja internetin kautta, VPN-ohjelma tekee tästä turvallisempaa." />
        <Paragraph text="Toinen VPN-ohjelman etu on rajoittamaton pääsy verkkosivuille ja ohjelmiin, jotka ovat muuten estetty. Pystyt esimerkiksi katsomaan" />
        <Paragraph text="Yhdysvaltojen Netflix-elokuvia Suomessa. Missä ikinä oletkin, VPN antaa sinulle mahdollisuuden käyttää monia eri palvelimia ympäri maailman." />
        <ContentTitle text="Voinko käyttää VPN:ää kaikilla laitteilla?" />
        <ContentImage caption="NordVPN" url="https://paras7vpn.fi/assets/img/nordvpn.png" />
        <Paragraph text="Useimmiten VPN-ohjelmat ovat saatavilla kaikilla käyttämilläsi laitteilla. Sinun tulisi kuitenkin varmistaa, että ohjelma, jota aiot käyttää, kattaa kaikki käyttämäsi käyttöjärjestelmät. Esimerkiksi, ExpressVPN ja CyberGhost tukevat kaikkia johtavia käyttöjärjestelmiä." />
        <Paragraph text="Jos paras mahdollinen turvallisuus on tärkeää, on valittava oikeanlainen VPN-protokolla. VPN-palvelut tarjoavat erilaisia protokollia tietyille käyttöjärjestelmille. Sinun tulisi miettiä, mitä VPN-protokollaa haluat käyttää ja sitten tarkistaa, mitkä VPN-palvelut tarjoavat sitä käyttämällesi käyttöjärjestelmälle." />
        <ContentTitle text="Maksullinen vai ilmainen VPN-ohjelma?" />
        <Paragraph text="VPN-tarjoajia on monia ja monet niistä tarjoavat ilmaispalveluja. Näiden ilmaisohjelmien ongelma on usein hitaampi yhteys, huonompi toimintavarmuus, turvallisuus ja tuki. Jos haluat käyttää VPN:ää sisällön lataamiseen, nopeus ja toimintavarmuus ovat tärkeitä." />
        <Paragraph text="Turvallisuus on myös hyvin tärkeä asia VPN-tarjoajan valinnassa. Useimmiten ilmaispalvelut tarjoavat Point-to-Point Tunneling Protokollaa (PPTP), joka on helpoin asentaa. PPTP:n kohdalla on huomioitu heikkouksia, jotka tekevät näistä VPN-yhteyksistä alttiita hyökkäyksille. Maksulliset palvelut tarjoavat monia erilaisia VPN-protokollia, kuten IPSec (Internet Protocol Security) ja L2TP (Layer 2 Tunneling Protocol), jotka ovat PPTP:tä turvallisempia." />
        <Paragraph text="Toinen tärkeä asia on VPN-palvelun tarjoama siirtonopeus. Ilmaispalveluilla ei yleensä ole resursseja sijoittaa tehokkaisiin internet-yhteyksiin, joka johtaa hitaampiin yhteyksiin. Maksulliset VPN-sovellukset tarjoavat turvallisempia ja nopeampia yhteyksiä." />
        <Paragraph text="Turvallisuuden ja siirtonopeuden lisäksi tarjoajalla on oltava monia palvelimia. Maksullisilla VPN-palveluilla on usein monia palvelimia, joka tekee VPN-yhteydestä nopean sekä vahvan ja voit suoratoistaa sisältöä ilman puskurointiongelmia tai yhteyden katkeamista." />
        <Paragraph text="Maksullisten palvelujen asiakaspalvelu on lähes aina parempi kuin ilmaisten. Ilmaispalvelut vaativat, että etsit VPN-vian ja korjaat sen itse, kun taas maksullisilla palveluilla on usein 24/7 asiakaspalvelu. Maksulliset VPN:ät tarjoavat myös asiakaspalvelua puhelimitse, joka voi olla hyödyllistä heille, jotka eivät voi ratkaista ongelmaa verkossa." />
      </Content>
    </ContentContainer>
  )
}

export default GooglePageContent
