import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import NavMain from './NavMain';


ReactDOM.render(
    (
        <BrowserRouter>
        <NavMain/>
        <Footer/>
        </BrowserRouter>
    ), document.getElementById("example"));