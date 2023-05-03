import React from "react";
import { Container } from '@mui/material';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from "./components/Auth/Auth";


const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth='lg'>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route path="/auth" exact element={<Auth />}></Route>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;


