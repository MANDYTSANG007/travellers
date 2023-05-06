// import React, { useState, useEffect, useCallback } from 'react';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button, Avatar } from '@mui/material'
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import logo from '../../assets/images/logo-travellers.png';


const Navbar = () => {
    // const user = null;
    //Get user profile here using localstorage
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    
        navigate('/auth');
    
        setUser(null);
      };
    
      useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);


    return (
        <AppBar position="static" color="inherit">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Toolbar component={Link} to="/" sx={{ maxWidth: 1 }}>
                    <img src={logo} alt="logo" />
                </Toolbar>
                <Typography variant="h2" align="center">Travellers</Typography>

                {user ? (
                    <Toolbar>
                        <Avatar sx={{mr: 1}} alt={user.userObject.name} src={user.userObject.imageUrl}>{user.userObject.name.charAt(0)}</Avatar>
                        <Typography variant="h6">{user.userObject.name}</Typography>
                        <Button variant="contained" color="secondary" sx={{ ml: 5 }} onClick={logout}>Logout</Button>
                    </Toolbar>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar >
    )
}

export default Navbar;

