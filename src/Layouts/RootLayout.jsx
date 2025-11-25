import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/shared/Footer/Footer';
import NavBar from '../pages/shared/NavBar/NavBar';

const RootLayout = () => {
    return (
        <div className='w-11/12 mx-auto mt-3'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default RootLayout;