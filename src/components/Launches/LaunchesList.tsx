import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Slide} from '@material-ui/core';
import {LaunchesInfoQuery} from '../../generated/graphql'
// import React from 'react';
// import {MissionsListQuery} from '../../generated/graphql'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper:{
    backgroundColor: '#01141760',
    paddingTop:'30px',
    paddingBottom:'30px',
    paddingLeft:'20px',
    paddingRight:'20px',
    marginTop:'50px',
    textAlign:'center',
    color:'white',
    fontFamily:'Secular One',
    // fontSize:'20px'
  },
  header:{
    backgroundColor: '#01141760',
    paddingTop:'30px',
    paddingBottom:'30px',
    paddingLeft:'20px',
    paddingRight:'20px',
    marginTop:'50px',
    textAlign:'center',
    color:'white'
  },
  description:{
    backgroundColor: '#01141760',
    paddingTop:'30px',
    paddingBottom:'30px',
    paddingLeft:'20px',
    paddingRight:'20px',
    marginTop:'50px',
    textAlign:'center',
    color:'white',
    fontFamily:'Quicksand',
    // fontSize:'20px'
  },
  title: {
    flexGrow: 0,
    fontFamily: 'Faster One',
    fontSize: '50px',
    margin: 'auto'
  },
}));

interface Props{
    data: LaunchesInfoQuery
}

const MissionList:React.FC<Props> = ({data}) => {
    const classes = useStyles();
    console.log(data)
    return(
        <div className={classes.root}>
          <Slide direction="up" in={true} timeout={300}>
          <Paper className={classes.header}>
            <Typography className={classes.title}>SpaceX Launches</Typography>
          </Paper>
          </Slide>
          <Slide direction="up" in={true} timeout={500}>
      <Grid container spacing={3}>
          {
            data.launches?.map((launch, ind)=>{
            //   var wiki=mission?.wikipedia;
            if(launch?.launch_success==true && launch?.mission_id?.length ==1)
            {
              var date = launch?.launch_date_utc?.split("T");
              console.log(date)
                return(
                    <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                    <h2>Mission ID: {launch?.mission_id}</h2>
                  <h2>Mission Name: {launch?.mission_name}</h2>
                  <h4>Launch Site: {launch?.launch_site?.site_name_long}</h4>
                <h4>Rocket Used: {launch?.rocket?.rocket_name}/{launch?.rocket?.rocket_type}</h4>
                <h4>Launched On: {launch?.launch_date_utc?.split("T")[0]}</h4>
                  <h5>{launch?.details}</h5>


                    </Paper>
                  </Grid>
                  );
            }

            })
          }

      </Grid>
      </Slide>
    </div>
    )
}

export default MissionList