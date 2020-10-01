import React from 'react'
import CompanyDetailsItem from './CompanyDetailsItem'

function CompanyDetails() {
    return (
        <ul className="company-details">
            <CompanyDetailsItem text="Paras7VPN on palvelu"/>
            <CompanyDetailsItem text="LWM AS"/>
            <CompanyDetailsItem text="Org.nr. 915040004"/>
            <CompanyDetailsItem text="Bogstadveien 27b"/>
            <CompanyDetailsItem text="0355 Oslo"/>
            <CompanyDetailsItem text="Norja"/>
            <CompanyDetailsItem text="contact@paras7vpn.fi"/>
        </ul>
    )
}

export default CompanyDetails
