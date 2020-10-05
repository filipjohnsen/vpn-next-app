import Head from 'next/head'
import { Content } from '../components/Content'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

function About() {
    return (
        <>
            <Head>
                <title>Meistä | Paras7VPN</title>
            </Head>
            <Header />
            <Content>
                <h1>Meistä</h1>
                <p>Paras7VPN on VPN-tarjoajia vertaileva ja arvioiva verkkoportaali.</p>
                <p>VPN:n suosio on kasvanut monesta syystä, joka on johtanut monen VPN-tarjoajan syntyyn. Tämä voi tehdä hyödyllisimmän VPN-ohjelman valinnasta vaikeaa kuluttajalle. Haluamme tehdä prosessista hieman helpomman.</p>
                <p>Päämäärämme on löytää VPN-palvelut nopeimmilla nopeuksilla ja parhaalla turvallisuudella sekä asiakaspalvelulla. Käytettävyys on myös tärkeä asia. Kaikki suosittelemamme tarjoajat ovat helppokäyttöisiä. Yleensä tarvitsee vain ladata ohjelma ja valita maa, johon haluaa yhdistää.</p>
                <p>Hinta on myös tekijä, mutta lähes kaikki VPN-palvelut ovat samanhintaisia. Tästä syystä hinta ei ole kovin merkittävä tekijä arvioissamme. Yhden kuukauden hinta on $10 luokkaa useimmilla tarjoajilla mutta jos ostaa 6 kuukautta tai enemmän, on mahdollista saada varteenotettavia alennuksia – jopa 75% asti.</p>
                <p>VPN-alan kilpailuhenkisyys on syntynyt vähitellen, joka on hyvä asia kuluttajille. VPN-palveluiden on pakko alentaa hintoja ja tarjota kestäviä tuotteita.</p>
                <p>VPN-palveluja on monia tämän sivun suositusten lisäksi ja jotkut niistä saattavat olla hyviä valintoja. Resurssisyistä olemme kuitenkin valinneet 5 hyvin tunnettua brändiä alalta.</p>
                <p>Sivulla suosittelemamme ohjelmat ovat kaikki maksullisia. Ilmaisia VPN-ohjelmia on myös olemassa. Ohjelmien hinta on kuitenkin niin alhainen, että uskomme maksullisen ohjelman olevan ilmaista ohjelmaa viisaampi valinta.</p>
                <p>Kuten muut yritykset, meidän on maksettava sivun ylläpidosta sekä tehtävä voittoa. Siksi saamme vireillepanomaksun, kun ihminen ostaa tilauksen VPN-tarjoajalta sivumme kautta.</p>
                <p>Toivomme, että hyödyt tästä sivusta ja toivotamme sinulle onnea VPN-palvelun etsinnöissä.</p>
            </Content>
            <Footer />
        </>
    )
}

export default About
