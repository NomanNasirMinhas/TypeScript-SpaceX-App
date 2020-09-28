import gql from 'graphql-tag';

export const AboutCoy = gql`
query AboutCoy{
  info {
    ceo
    name
    summary
    founder
    founded
    headquarters {
      address
      city
    }
    launch_sites
    test_sites
    vehicles
  }
  }

`