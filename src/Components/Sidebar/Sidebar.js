import React from 'react';
import './Sidebar.css';
import iconDashboard from './analytics.svg';
import {Link} from 'react-router-dom';


const Sidebar = () => {
    return (
        <nav className='sidenav'>
            <img src={iconDashboard} alt="icône analytiques" />
            <Link to="/">FINANCES</Link>
            <Link to="/dashboardEmployees">EMPLOIS</Link>
        </nav>
    );
};

export default Sidebar;