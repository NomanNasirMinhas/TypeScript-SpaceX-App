import React from 'react';
import {useMissionsInfoQuery} from './../../generated/graphql';
import MissionList from './MissionList'

const MissionContainer = () => {

    const {data, error, loading} = useMissionsInfoQuery();

    if(loading)
    return <h2>Loading</h2>

    if (error || !data)
    return <h1>Error</h1>

    console.log(data)
    return(
        <div>
            <MissionList data={data}/>
        </div>
    )
}

export default MissionContainer