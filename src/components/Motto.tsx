import { Typography } from '@material-ui/core';
import React from 'react';
import {Slide} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
    padding:'70px',
    marginTop:'50px',
  },
  motto: {
    flexGrow: 0,
    margin: 'auto',
    fontFamily: 'Righteous'
  },
}));

export default function Motto() {
  const classes = useStyles();
  return (
    <div className="App">
<Slide direction="up" in={true} timeout={600}>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.motto}>
          <h3>"You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars."</h3>
          <h2>-Elon Musk-</h2>
        </Typography>
      </Paper>
      </Slide>

    </div>
  )
}
