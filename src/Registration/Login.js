import React, {useState} from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
//import './style.css'

const useStyles = makeStyles({
    root: { 
      height: '60vh',
      minWidth: 275,
      color: "white"
    },
    table: {
      minWidth: 300,
      color: "white",
    },
    title: {
      fontSize: 24,
    },
  });

function Login(props) {
  const classes = useStyles();
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
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
        //alert("Login Success")
        //redirectToHome()
        const payload={
            "username":state.username,
            "email":state.email,
            "password":state.password,
        }
        axios.post('http://dev-api.qwikxr.com/api/v1/auth/get-token/', {payload})
            .then(function (response) {
                alert("Login Success")
                console.log("Login Success")
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        "token": "1615762ba7991b631f337c57f11760220ce0b0b2"
                    }))
                    props.showError(null)
                    alert("Login Success")
                }
                else if(response.code === 401){
                    props.showError("Username and password do not match");
                }
                else{
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    /*const sendDetailsToServer = () => {
        redirectToHome();
    }
    const redirectToHome = () => {
        //props.history.push('/dashboard');
    }*/
    const redirectToRegister = () => {
        props.history.push('/accountOptionOrganisation'); 
    }

    const redirectToForgot= () => {
        props.history.push('/forgotPassword'); 
    }

  return (
    <div mt={6} className={classes.root} style={{background:"none"}}>
    <TableContainer component={Paper}>
      <Table className="table" aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography className={classes.title}  gutterBottom>
                  <span className="h2 align-items-center text-white">Login/Register</span>
              </Typography>
            </TableCell>
            <TableCell>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
                <TableCell align="left">
                  <IconButton>
                      <PersonIcon />
                  </IconButton>
                  <TextField type="text" 
                      className="form-control" 
                      color="white"
                      id="username" 
                      aria-describedby="userNameHelp" 
                      placeholder="Enter Username" 
                      value={state.username}
                      onChange={handleChange}
                  />
                </TableCell>
            </TableRow >
            <TableRow >
                <TableCell align="left">
                  <IconButton>
                      <EmailIcon />
                  </IconButton>
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
            <TableRow >
                <TableCell align="left">
                  <IconButton>
                      <LockIcon />
                  </IconButton>
                  <TextField type="password" 
                      className="form-control" 
                      id="password"
                      placeholder="Enter password" 
                      value={state.password}
                      onChange={handleChange}
                  />
                </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <Button 
                    variant="contained" 
                    color="primary"
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Login
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">
                <Typography variant="body2" component="p">
                    <span className="loginText" onClick={() => redirectToForgot()}>Forgot Password</span>
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">
                <Typography variant="body2" component="p">
                    <span>Don't have an account? </span>
                    <span className="loginText" onClick={() => redirectToRegister()}>Register here</span>
                </Typography>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default withRouter(Login)