import React from 'react';
// import { MissionInfo } from '../Mission/query';
import {useLaunchInfoQuery} from '../../generated/graphql';
import LaunchInfo from './MissionInfo'

const MissionInfoContainer = () => {

    const {data, error, loading} = useLaunchInfoQuery({
        variables: {
            id: '25'
        }
    });

    if(loading)
    return <h2>Loading Data........ Please Wait</h2>

    if (error || !data)
    return <h1>Ooops! An Error Has Occurred</h1>

    console.log(data)
    return(
        <div>
            <LaunchInfo data={data}/>
        </div>
    )
}

export default MissionInfoContainer