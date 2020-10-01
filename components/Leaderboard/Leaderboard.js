import React from 'react'
import LeaderboardButton from './LeaderboardButton'
import LeaderboardHeader from './LeaderboardHeader'
import LeaderboardImage from './LeaderboardImage'
import LeaderboardItem from './LeaderboardItem'
import LeaderboardPros from './LeaderboardPros'
import LeaderboardProsListItem from './LeaderboardProsListItem'
import LeaderboardScore from './LeaderboardScore'
import LeaderboardStar from './LeaderboardStar'

function Leaderboard({ subid }) {
    return (
        <div className="leaderboard-container">
            <LeaderboardHeader />
            <LeaderboardItem provider="expressvpn" subid={subid}>
                <LeaderboardImage url="https://paras7vpn.fi/assets/img/exrpessvpn-1.png" />
                <LeaderboardPros title="Suomen suosituin VPN. Supernopea ja turvallinen.">
                    <LeaderboardProsListItem text="Palvelimia 94 maassa" />
                    <LeaderboardProsListItem text="Supernopea" />
                    <LeaderboardProsListItem text="Helppokäyttöinen" />
                    <LeaderboardProsListItem text="30 päivän rahat takaisin -takuu" />
                    <p><i class="fas fa-user-friends"></i>72% käyttäjistämme valitsee ExpressVPN</p>
                </LeaderboardPros>
                <LeaderboardScore score="9.8">
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                </LeaderboardScore>
                <LeaderboardButton/>
            </LeaderboardItem>
            <LeaderboardItem provider="nordvpn" subid={subid}>
                <LeaderboardImage url="https://paras7vpn.fi/assets/img/nordvpn-square.png" />
                <LeaderboardPros title="Yksi parhaista VPN:istä joita voit löytää. Armeijatason turvallisuus.">
                    <LeaderboardProsListItem text="4300 palvelinta 62 maassa" />
                    <LeaderboardProsListItem text="Välitön asennus kaikille laitteillesi" />
                    <LeaderboardProsListItem text="30 päivän rahat takaisin -takuu" />
                    <LeaderboardProsListItem text="Erittäin nopea" />
                </LeaderboardPros>
                <LeaderboardScore score="9.6">
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                </LeaderboardScore>
                <LeaderboardButton/>
            </LeaderboardItem>
            <LeaderboardItem provider="ultravpn" subid={subid}>
                <LeaderboardImage url="https://paras7vpn.fi/assets/img/ultravpn.png" />
                <LeaderboardPros title="Varsin nopea VPN-palvelu. Erittäin hyvä salaus ja asiakaspalvelu.">
                    <LeaderboardProsListItem text="30 päivän rahat takaisin -takuu" />
                    <LeaderboardProsListItem text="Ei lokipolitiikkaa" />
                    <LeaderboardProsListItem text="24/7 asiakaspalvelu" />
                </LeaderboardPros>
                <LeaderboardScore score="8.9">
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                    <LeaderboardStar starType="half"/>
                </LeaderboardScore>
                <LeaderboardButton/>
            </LeaderboardItem>
            <LeaderboardItem provider="surfshark" subid={subid}>
                <LeaderboardImage url="https://paras7vpn.fi/assets/img/surfshark.png" />
                <LeaderboardPros title="Nopea ja turvallinen VPN-palvelu.">
                    <LeaderboardProsListItem text="Palvelimia yli 50 maassa" />
                    <LeaderboardProsListItem text="Erittäin helppokäyttöinen" />
                    <LeaderboardProsListItem text="30 päivän rahat takaisin -takuu" />
                </LeaderboardPros>
                <LeaderboardScore score="8.5">
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                    <LeaderboardStar starType="half"/>
                </LeaderboardScore>
                <LeaderboardButton/>
            </LeaderboardItem>
            <LeaderboardItem provider="cyberghost" subid={subid}>
                <LeaderboardImage url="https://paras7vpn.fi/assets/img/cyberghost-logo.png" />
                <LeaderboardPros title="Nopeutta ja turvallisuutta kohtuulliseen hintaan">
                    <LeaderboardProsListItem text="Yli 3000 palvelinta 60 maassa" />
                    <LeaderboardProsListItem text="Ei lokipolitiikkaa" />
                    <LeaderboardProsListItem text="30 päivän rahat takaisin -takuu" />
                </LeaderboardPros>
                <LeaderboardScore score="8.5">
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                    <LeaderboardStar/>
                    <LeaderboardStar starType="border"/>
                </LeaderboardScore>
                <LeaderboardButton/>
            </LeaderboardItem>
        </div>
    )
}

export default Leaderboard
