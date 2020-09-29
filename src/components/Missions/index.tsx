import React from 'react';
import {useMissionsListQuery} from '../../generated/graphql';
import LaunchesInfo from './MissionList'

const MissionContainer = () => {

    const {data, error, loading} = useMissionsListQuery();

    if(loading)
    return <h2>Loading Data........ Please Wait</h2>

    if (error || !data)
    return <h1>Ooops! An Error Has Occurred</h1>

    console.log(data)
    return(
        <div>
            <LaunchesInfo data={data}/>
        </div>
    )
}

export default MissionContainer