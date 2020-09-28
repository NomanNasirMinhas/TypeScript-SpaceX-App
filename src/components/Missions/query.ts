import gql from 'graphql-tag';

export const MissionsList = gql`
query MissionsList{
  missions {
  mission_id
  mission_name
  description
  wikipedia
}
  }

`