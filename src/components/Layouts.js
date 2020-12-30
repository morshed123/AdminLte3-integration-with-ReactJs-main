import React from 'react';
import { Outlet } from "react-router-dom";
import Dashboard from './Dashboard';
import Footer from './Footer';
import Header from './Header';
import SideMenu from './SideMenu';

const Layouts = ({ childdren }) => {
    return (
        <>
            <Header />
            <SideMenu />
            <Dashboard />
            <div>{childdren}</div>
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layouts;