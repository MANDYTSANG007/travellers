import React, { useState, useEffect } from 'react'
import { Avatar, Toolbar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';
import Icon from './icon';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import { getClientId } from '../../config';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const [clientId, setClientId] = useState("");           // added
    // const state= null;
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    // const isSignup = true;

    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        if (isSignup) {
            dispatch(signup(formData, navigate))
        } else {
            dispatch(signin(formData, navigate))
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    }

    const handleCallbackResponse = async (response) => {
        const userObject = jwt_decode(response.credential);
        const credential = response.credential;
        console.log("Auth/Auth.js-handleCallbackResponse-userObject:", userObject);
        try {
            //After dispatch, redirect to the homepage
            dispatch({ type: "AUTH", data: { userObject, credential } });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getClientId().then((clientId) => {
            console.log("Auth/Auth.js-before-clientId", clientId);
            /*global google*/
            google.accounts.id.initialize({
                client_id: clientId,
                callback: handleCallbackResponse,
            });
            console.log("Auth/Auth.js-google-initialize");  
            console.log("Auth/Auth.js-clientId", clientId); 
            google.accounts.id.prompt();
        });
    });
    // useEffect(() => {
    //     getClientId().then((id) => setClientId(id));
    //   }, []);

    const googleError = (error) => {
        console.log(error);
        console.log("Google sign in was unsuccessful. Try again later.")
    };

    console.log("Auth/Auth.js-before-GoogleLogin-clientId:", clientId)  //Yes

    

    return (
        <Container align="center" component="main" maxWidth="xs">
            <Paper elevation={3}>
                <Toolbar sx={{ justifyContent: "center" }}>
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                </Toolbar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'} </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid sx={{ padding: 2 }} container spacing={2}>
                        {isSignup && (
                            <React.Fragment>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </React.Fragment>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                   
                    <div style={{ padding: 10, justifyContent: "center", display: "flex" }}>
                        <GoogleLogin
                            render={(renderProps) => {
                                console.log('Auth/Auth.js-inside-GoogleLogin');
                                return (
                                    <Button 
                                    color="primary" 
                                    fullWidth 
                                    onClick={renderProps.onClick} 
                                    disabled={renderProps.disabled} 
                                    startIcon={<Icon />} 
                                    variant="contained"
                                    >
                                    </Button>
                                )
                            }}
                            onSuccess={(response) => {
                                console.log("GoogleLogin-onSuccess", response);
                                handleCallbackResponse(response);
                            }}
                            onError={googleError}
                            cookiePolicy="single_host_origin"
                        />
                    </div>
                    
                    <Button type="submit" fullWidth variant="contained" color="primary" >
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>


                    <Grid sx={{ justifyContent: "center" }} container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign In.' : "Don't have an account? Sign up."}
                            </Button>
                        </Grid>
                    </Grid>
                    
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;