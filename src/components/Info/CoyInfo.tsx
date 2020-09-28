import React from 'react';
import { AboutCoyQuery } from '../../generated/graphql'

interface Props {
    data: AboutCoyQuery
}

const AboutCompany: React.FC<Props> = ({ data }) => {
    console.log(data)
    return (
        <div>
            <h1>Company Info</h1>
            <h2>Comapny Name: {data.info?.name}</h2>
            <h2>Founder: {data.info?.founder}</h2>
            <h2>Founded: {data.info?.founded}</h2>
            <h2>CEO: {data.info?.ceo}</h2>
            <h2>Headquarters: {data.info?.headquarters?.address}</h2>
            <h2>About: {data.info?.summary}</h2>

        </div>
    )
}

export default AboutCompany