import React from 'react';
import {useLaunchesInfoQuery} from '../../generated/graphql';
import LaunchesInfo from './LaunchesList'

const MissionContainer = () => {

    const {data, error, loading} = useLaunchesInfoQuery();

    if(loading)
    return <h2>Loading</h2>

    if (error || !data)
    return <h1>Error</h1>

    console.log(data)
    return(
        <div>
            <LaunchesInfo data={data}/>
        </div>
    )
}

export default MissionContainer