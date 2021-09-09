import React, { Fragment } from 'react';
import Toolbar from './toolbar';
import Sidebar from './sidebar';
import Footer from './footer';

import './index.scss';

const Layout = (props: any) => {
    return (
    <>
        <Toolbar></Toolbar>
        <Sidebar></Sidebar>
        <div>
            { props.children }
        </div>
        <Footer></Footer>
    </>
    );
}

export default Layout;