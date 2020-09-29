import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Slide } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { AboutCoyQuery } from '../../generated/graphql'

interface Props {
    data: AboutCoyQuery
}

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

const AboutCompany: React.FC<Props> = ({ data }) => {
    const classes = useStyles();
    console.log(data)
    return (
        <div>
            <Slide direction="up" in={true} timeout={300}>
                <Paper className={classes.header}>
                    <Typography className={classes.title}>Who Are We</Typography>
                </Paper>
            </Slide>

            <Slide direction="up" in={true} timeout={500}>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <Paper className={classes.paper}>
                        <h1>Comapny Name: {data.info?.name}</h1>
            <h2>Founder: {data.info?.founder}</h2>
            <h2>Founded: {data.info?.founded}</h2>
            <h2>CEO: {data.info?.ceo}</h2>
            <h3>Headquarters: {data.info?.headquarters?.address}, {data.info?.headquarters?.city}</h3>
            <h2>{data.info?.summary}</h2>
                        </Paper>
                    </Grid>
                </Grid>
            </Slide>
        </div>
    )
}

export default AboutCompany