import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shaerd/Footer/Footer';
import Header from '../Pages/Shaerd/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='window'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;