import React from 'react';

import AuxCmp from '../../hoCmp/AuxCmp';
import classes from './Layout.css';

const Layout = (props) => (
    <AuxCmp>
        <div>ToolBar,SideDrawer and BackDrop</div>
        <main className = {classes.Content}>
            {props.children}
        </main>
     </AuxCmp>   
);

export default Layout;