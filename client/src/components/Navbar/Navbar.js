import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button, Avatar } from '@mui/material'
import CardTravelIcon from '@mui/icons-material/CardTravel';


const Navbar = () => {
    const user = null;
    return (
        <AppBar position="static" color="inherit">
            <div>
                <Typography component={Link} to="/" variant="h2" align="center">Travellers App</Typography>
                <CardTravelIcon fontSize="large" />
            </div>
            <Toolbar>
                {user ? (
                    <div>
                        <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" color="secondary">Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;

// To Do: add a logo so that users can click to be routed back to the home page