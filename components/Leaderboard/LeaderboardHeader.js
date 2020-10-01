import React from 'react'
import { Disclaimer } from '../Disclaimer'

function LeaderboardHeader() {

    return (
        <ul className="leaderboard-header">
            <li>VPN-Palvelu</li>
            <li>Ominaisuudet</li>
            <li>
                Arvostelu
                <Disclaimer>
                    <h3>Mitä korostamme arvioinnissamme:</h3>
                    <ul>
                        <li>Hinta</li>
                        <li>Nopeus ja laatu</li>
                        <li>Käyttäjäkokemus</li>
                        <li>Edustettujen maiden ja servereiden määrä</li>
                        <li>Onko rahat takaisin takuuta, jos asiakas ei ole tyytyväinen</li>
                        <li>Asiakaspalvelu ja aukioloajat</li>
                    </ul>
                    <p>Tämä verkkosivusto saa maksuja linkityksestä VPN-palveluntarjoajiin. Siksi sivusto on ilmainen käyttäjille.</p>
                </Disclaimer>
            </li>
            <li>
                Mainostus
            <Disclaimer>
                    <h3>Mainostus:</h3>
                    <p>Että tämä sivusto voisi olla ilmainen käyttää, me saamme maksuja linkittämisestä eri palveluntarjoajiin.</p>
                    <p>Meillä ei ole mahdollisuutta kattaa kaikkia VPN-palveluntarjoajia. Toivottavasti nautit tästä sivustosta ja jaat sen kavereiden ja perheen kanssa, jotka ovat kiinnostuneita VPN-palveluista.</p>
                </Disclaimer>
            </li>
        </ul>
    )
}

export default LeaderboardHeader
