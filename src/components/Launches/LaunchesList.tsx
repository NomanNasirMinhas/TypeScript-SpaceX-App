import React from 'react';
import {LaunchesInfoQuery} from '../../generated/graphql'

interface Props{
    data: LaunchesInfoQuery
}

const MissionList:React.FC<Props> = ({data}) => {
    console.log(data)
    return(
        <div>
            Launches List
        </div>
    )
}

export default MissionList