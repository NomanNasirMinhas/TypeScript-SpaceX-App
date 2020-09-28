import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme({
    overrides: {

        MuiAppBar:{
            root:{
                borderRadius: 3,
                border: 2,
                borderStyle:'solid',
                background: 'linear-gradient(60deg, #000000 30%, #0C1213 90%)',
            },
            
        },
      MuiButton: {
        // Name of the rule
        text: {
          // Some CSS
          background: 'linear-gradient(45deg, #000000 30%, #313131 90%)',
          border: 1,
          borderStyle:'solid',
          fontFamily:'Righteous',
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
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily:'Faster One',
    fontSize:'50px'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} color="inherit" aria-label="menu">
            SpaceX
          </Typography>
          <Button color="inherit">Missions</Button>
          <Button color="inherit">Launches</Button>
          <Button color="inherit">About Us</Button>
        </Toolbar>
      </AppBar>
    </div>
    </ThemeProvider>
  );
}
