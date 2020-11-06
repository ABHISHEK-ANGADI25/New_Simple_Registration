import React from 'react';
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BusinessIcon from '@material-ui/icons/Business';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  paper: {
    height: 140,
    width: 150,
  },
  pos: {
    marginBottom: 12,
  },
});

 function AccountOption(props) {
  const classes = useStyles();

  const redirectToRegister = () => {
        props.history.push('/register'); 
    }

    const redirectToSignUp = () => {
        props.history.push('/accountOptionIndividual'); 
    }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} >
        <Grid container justify="center">
            <Grid >
              <Paper className={classes.paper} style={{background:"none", paddingLeft:"2px 0", spacing: "2px"}}  >
                  <IconButton onClick={() => redirectToRegister()}>
                      <PersonIcon style={{ fontSize: 60, color:"white" }}/>
                  </IconButton>
                  <br />
                  <span className="loginText" style={{ color:"white" }} onClick={() => redirectToRegister()}>Individual</span>
              </Paper >
            </Grid>
            <Grid >
            <Paper className={classes.paper} style={{background:"none", paddingLeft:"2px 0", spacing: "2px"}}  >
                  <IconButton onClick={() => redirectToSignUp()}>
                      <BusinessIcon style={{ fontSize: 60, color:"white" }} />
                  </IconButton>
                  <br />
                  <span className="loginText" style={{ color:"white" }} onClick={() => redirectToSignUp()}>Organization</span>
              </Paper >
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withRouter(AccountOption)