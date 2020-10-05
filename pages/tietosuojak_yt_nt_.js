import Head from 'next/head'
import NextLink from 'next/link'
import { Content } from '../components/Content'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Tietosuojakäytäntö | Paras7VPN</title>
            </Head>
            <Header />
            <Content>
                <h1>Tietosuojakäytäntö</h1>
                <h3><strong>Johdanto</strong></h3>
                <p>1.1 Tämä verkkosivusto on LWM AS -ylläpitämä. Katso yrityksen tiedot alatunnisteesta.</p>
                <p>1.2 Teemme parhaamme, että verkkosivustomme käyttäjien yksityisyys säilyy turvallisena.</p>
                <p>1.3 Tämä käytäntö koskee sitä, missä toimimme henkilötietojen ohjaajana tai prosessorina.</p>
                <h3><strong>2. Cookies</strong></h3>
                <p>Saatamme käyttää evästeitä tällä verkkosivustolla. Lue lisää meidän evästeiden <NextLink href="/cookies"><a href="/cookies">käytännöstä.</a></NextLink></p>
                <h3><strong>3. Henkilötietojen käyttö</strong></h3>
                <p>3.1 Saatamme pitää hallussa henkilökohtaiset tiedot, kun käyttäjä lähettää meille viestin verkkosivujen yhteydenottolomakkeiden kautta. Meillä on tällöin hallussa viestissä annetut tiedot. Poistamme yhteydenottolomakkeiden kautta saamamme tiedot 45 päivän kuluessa.</p>
                <h3><strong>4. Henkilökohtaisten tietojen jakaminen muiden kanssa</strong></h3>
                <p>4.1 Emme jaa henkilökohtaisia tietoja kenenkään kanssa.</p>
                <h3><strong>5. Henkilökohtaisten tietojen säilyttäminen</strong></h3>
                <p>5.1 Säilytämme henkilökohtaiset tietosi salasana suojatuilla ja suojatuilla palvelimilla.</p>
                <p>5.2 Tietojen lähettäminen internetin välityksellä ei ole 100% turvallista. Tietojen hakkerointi voi olla mahdollista.</p>
                <h3><strong>6. Linkit kolmannen osapuolen ominaisuuksiin.</strong></h3>
                <p>6.1 Tämä verkkosivusto linkittää kolmannen osapuolen verkkosivustoihin. Joissakin tapauksissa olemme sidoksissa näiden kolmansien osapuolten kanssa. Tiedot, jotka liittyvät näiden kolmansien osapuolten ominaisuuksien linkkien klikkaamiseen, sekä kaikkien henkilötiedot, jotka toimitat kyseisille ominaisuuksille, on tarjottu kolmansille osapuolille eikä meidän verkkosivustolle. Meillä ei ole vaikutusvaltaa tai valvontaa näiden kolmansien osapuolten verkkosivustoille ja heidän tietosuojakäytäntöön. On suositeltavaa lukea tietosuojakäytännöt ja käyttöehdot.</p>
                <h3><strong>7. Pääsy ja poistaminen</strong></h3>
                <p>7.1 Mikäli haluat tarkistaa tai poistaa henkilötietojasi, joita meillä saattaa olla. Ota yhteyttä vpnguest@hotmail.com. Pyynnön käsittely voi kestää jopa 20 päivää.</p>
                <p>7.2 Tunnistamista varten sinua pyydetään antamaan valokopio passista henkilöllisyytesi todentamista varten.</p>
            </Content>
            <Footer />
        </>
    )
}

export default PrivacyPolicy