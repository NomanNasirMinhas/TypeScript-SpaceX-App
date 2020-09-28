import gql from 'graphql-tag'

const LaunchInfo = gql`
query LaunchInfo($id: String!) {
    launch(id: $id) {
      details
      launch_date_utc
      launch_site {
        site_name_long
      }
      launch_year
      mission_id
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
    }
  }

`

export default LaunchInfo