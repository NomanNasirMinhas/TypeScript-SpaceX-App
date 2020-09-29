import React from 'react';
import {Slide} from '@material-ui/core';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useHistory } from "react-router-dom";

const theme = createMuiTheme({
  overrides: {

    MuiAppBar: {
      root: {
        borderRadius: 0,
        border: 4,
        borderStyle: 'solid',
        background: 'linear-gradient(60deg, #000000 30%, #0C1213 90%)',
      },

    },
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: 'linear-gradient(45deg, #000000 30%, #313131 90%)',
        border: 0,
        borderStyle: 'solid',
        fontFamily: 'Righteous',
        color: 'white',
        padding: '0 10px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
  },

  btnGrp: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
    fontFamily: 'Faster One',
    fontSize: '50px',
    margin: 'auto'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  let history = useHistory();

  function handleMissions() {
    history.push("/missions");
  }

  function handleLaunches() {
    history.push("/launches");
  }

  function handleAbout() {
    history.push("/about");
  }

  function handleMotto() {
    history.push("/");
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position='sticky'>
        <Slide direction="down" in={true} timeout={600}>
          <Toolbar >
            <Typography className={classes.title} color="inherit" aria-label="menu">
              SpaceX
          </Typography>
          </Toolbar>
          </Slide>

          <div className={classes.btnGrp}>
          <Slide direction="down" in={true} timeout={600}>
            <ButtonGroup>
              <Button color="inherit" onClick={handleMotto}>Home</Button>
              <Button color="inherit" onClick={handleMissions}>Missions</Button>
              <Button color="inherit" onClick={handleLaunches}>Launches</Button>
              <Button color="inherit" onClick={handleAbout}>About</Button>
            </ButtonGroup>
            </Slide>
          </div>
        </AppBar>

      </div>
    </ThemeProvider>
  );
}
