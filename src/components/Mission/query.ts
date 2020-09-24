import gql from 'graphql-tag';

export const MissionsInfo = gql`
query MissionsInfo{
    launches {
      mission_id
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      details
      launch_date_utc
      launch_site {
        site_name_long
      }
      launch_year
      launch_success
    }
  }

`