import React from 'react';
import {useMissionsListQuery} from '../../generated/graphql';
import LaunchesInfo from './MissionList'

const MissionContainer = () => {

    const {data, error, loading} = useMissionsListQuery();

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