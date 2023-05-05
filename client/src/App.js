import React, { useEffect, useState } from "react";
import { Container } from '@mui/material';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
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
                console.log('App.js-received response:', res);
                console.log('App.js-received response data:', res.data);
                setClientId(res);
                console.log('App.js-Received clientId from backend:', res.data.clientId);
                console.log('App.js-Received clientId from backend:', res);
            })
            .catch(error => {
                console.log('App.js-Error fetching client id - ', error);
            })
    }, []);


    console.log('App.js-rendering with clientId:', clientId);


    return (
        <GoogleOAuthProvider clientId={clientId}>
            <BrowserRouter>
                <Container maxWidth='lg'>
                    <Navbar />
                    <Routes>
                        <Route path="/" exact element={<Home />}></Route>
                        <Route path="/auth" exact element={<Auth />}></Route>
                    </Routes>
                </Container>
            </BrowserRouter>
        </GoogleOAuthProvider>
    );
}

export default App;


