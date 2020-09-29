import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Motto from './Motto';
import Info from './Info';
import Launches from './Launches';
import LaunchInfo from './LaunchInfo';
import Missions from './Missions';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import './../App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper:{
    backgroundColor: '#01141760',
    paddingTop:'30px',
    paddingBottom:'30px',
    paddingLeft:'20px',
    paddingRight:'20px',
    marginTop:'50px'
  },
  motto: {
    flexGrow: 0,
    margin: 'auto',
    fontFamily: 'Fredoka One'
  },
  divider:{
      height:'100px'
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className="App">
        <Motto />
    </div>
  )
}
