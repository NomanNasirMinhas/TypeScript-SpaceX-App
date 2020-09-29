import React from 'react';
import {MissionsListQuery} from '../../generated/graphql'
import {Slide} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
}));

interface Props{
    data: MissionsListQuery
}


const MissionList:React.FC<Props> = ({data}) => {
    const classes = useStyles();
    console.log(data)
    return(
        <div className={classes.root}>
          <Slide direction="up" in={true} timeout={300}>
          <Paper className={classes.header}>
            <Typography className={classes.title}>SpaceX Missions</Typography>
          </Paper>
          </Slide>

          <Slide direction="up" in={true} timeout={500}>
      <Grid container spacing={3}>
          {
            data.missions?.map((mission, ind)=>{
              var wiki=mission?.wikipedia;
              return(
                <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                <h2>Mission ID: {mission?.mission_id}</h2>
              <h2>Mission Info: {mission?.mission_name}</h2>
              <h3>Mission Description</h3>
              <h5 className={classes.description}>{mission?.description}</h5>
              <a href={mission?.wikipedia?.toString()} target="_blank"><h3>Click Here For More Info</h3></a>

                </Paper>
              </Grid>
              );
            })
          }

      </Grid>
      </Slide>
    </div>
    )
}

export default MissionList