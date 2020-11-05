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

 function AccountIndividual(props) {
  const classes = useStyles();

  const redirectToRegister = () => {
        props.history.push('/register'); 
    }

    const redirectToSignUp = () => {
        props.history.push('/login'); 
    }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} spacing={2}>
        <Grid container justify="center">
            <Grid spacing={2}>
              <Paper className={classes.paper}  >
                  <IconButton>
                      <PersonIcon />
                  </IconButton>
                  <br />
                  <span className="loginText" onClick={() => redirectToRegister()}>Student</span>
              </Paper >
            </Grid>
            <Grid >
            <Paper className={classes.paper}  >
                  <IconButton>
                      <BusinessIcon />
                  </IconButton>
                  <br />
                  <span className="loginText" onClick={() => redirectToSignUp()}>Teacher</span>
              </Paper >
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withRouter(AccountIndividual)