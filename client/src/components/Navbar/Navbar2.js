// import React, { useState, useEffect, useCallback } from 'react';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Box, Container, Typography, Toolbar, Button, Avatar } from '@mui/material'
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import logo from '../../assets/images/logo-travellers.png';


const Navbar = () => {
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
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 0 }}>
                        <img component={Link} to="/" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={logo} alt="logo" />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                fontSize: 30,
                            }}
                        >
                            TRAVELLERS
                        </Typography>
                    </Box>

                    {user ? (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar sx={{ mr: 1 }} alt={user.userObject.name} src={user.userObject.imageUrl}>{user.userObject.name.charAt(0)}</Avatar>
                            <Typography variant="h6">{user.userObject.name}</Typography>
                            <Button variant="contained" color="secondary" sx={{ ml: 5 }} onClick={logout}>Logout</Button>
                        </Box>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                    )}
                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default Navbar;

