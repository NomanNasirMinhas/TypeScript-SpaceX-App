import React from 'react';
// import { MissionInfo } from '../Mission/query';
import {useLaunchMissionInfoQuery} from './../../generated/graphql';
import MissionInfo from './MissionInfo'

const MissionInfoContainer = () => {

    const {data, error, loading} = useLaunchMissionInfoQuery({
        variables: {
            id: '25'
        }
    });

    if(loading)
    return <h2>Loading</h2>

    if (error || !data)
    return <h1>Error</h1>

    console.log(data)
    return(
        <div>
            <MissionInfo data={data}/>
        </div>
    )
}

export default MissionInfoContainer