import React, { useEffect, useState } from "react";
import { Container } from '@mui/material';
import "./App.css";
import Navbar2 from "./components/Navbar/Navbar2";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from "./components/Auth/Auth";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { getClientId } from './config';

const App = () => {
    const [clientId, setClientId] = useState('');

    useEffect(() => {
        getClientId()
            .then(res => {
                setClientId(res);
            })
            .catch(error => {
                console.log('App.js-Error fetching client id - ', error);
            })
    }, []);

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <BrowserRouter>
                <Container maxWidth='xl'>
                    <Navbar2 />
                    <Routes>
                        <Route path="/" exact element={<Home />}></Route>
                        <Route path="/auth" exact element={<Auth />}></Route>
                    </Routes>
                    <Footer />
                </Container>
            </BrowserRouter>
        </GoogleOAuthProvider>
    );
}

export default App;


