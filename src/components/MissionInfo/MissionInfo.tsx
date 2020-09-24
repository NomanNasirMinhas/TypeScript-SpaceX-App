import React from 'react';
import { LaunchMissionInfoQuery } from './../../generated/graphql'

interface Props {
    data: LaunchMissionInfoQuery
}

function getDeepKeys(obj: any) {
    var keys: any = [];
    for (var key in obj) {
        keys.push(key);
        if (typeof obj[key] === "object") {
            var subkeys = getDeepKeys(obj[key]);
            keys = keys.concat(subkeys.map(function (subkey: any) {
                return key + "." + subkey;
            }));
        }
    }
    return keys;
}

const MissionInfo: React.FC<Props> = ({ data }) => {
    // console.log(data)
    var keys = getDeepKeys(data)
    console.log(keys)
    return (
        <div>
            {/* {keys} */}
            <ul>
                <li>
                    {data.launch?.mission_name}
                </li>

                <li>
                    {data.launch?.details}
                </li>
            </ul>
        </div>
    )
}

export default MissionInfo