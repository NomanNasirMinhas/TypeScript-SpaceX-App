import React from 'react';
import {useAboutCoyQuery} from '../../generated/graphql';
import AboutCompany from './CoyInfo'

const MissionContainer = () => {

    const {data, error, loading} = useAboutCoyQuery();

    if(loading)
    return <h2>Loading</h2>

    if (error || !data)
    return <h1>Error</h1>

    console.log(data)
    return(
        <div>
            <AboutCompany data={data}/>
        </div>
    )
}

export default MissionContainer