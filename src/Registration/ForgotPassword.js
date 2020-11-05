import React, {useState} from 'react';
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: { 
      height: '40vh',
      backgroundColor:'#white',
      minWidth: 275,
    },
    table: {
      minWidth: 300,
    },
    title: {
      fontSize: 24,
    },
  });

function ForgotPassword(props) {
  const classes = useStyles();
    const [state , setState] = useState({
        email : "",
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        //redirectToHome()
        /*const payload={
            "email":state.email,
            "password":state.password,
        }
        axios.post(API_BASE_URL+'/user/login', payload)
            .then(function (response) {
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                    redirectToHome();
                    props.showError(null)
                }
                else if(response.code === 204){
                    props.showError("Username and password do not match");
                }
                else{
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });*/
    }

    /*const sendDetailsToServer = () => {
        redirectToHome();
    }
    const redirectToHome = () => {
        //props.history.push('/dashboard');
    }*/
    const redirectToRegister = () => {
        props.history.push('/register'); 
    }
  return (
    <div mt={6} className={classes.root}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography className={classes.title} color="text-black" gutterBottom>
                  <span className="h2 align-items-center">Lets find your account!</span>
              </Typography>
            </TableCell>
            <TableCell>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
                <TableCell align="left">
                  <TextField type="email" 
                      className="form-control" 
                      id="email" 
                      aria-describedby="emailHelp" 
                      placeholder="Enter email" 
                      value={state.email}
                      onChange={handleChange}
                  />
                </TableCell>
            </TableRow >
            <TableRow>
              <TableCell align="center">
                <Button 
                    variant="contained" 
                    color="primary"
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Continue
                </Button>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default withRouter(ForgotPassword)