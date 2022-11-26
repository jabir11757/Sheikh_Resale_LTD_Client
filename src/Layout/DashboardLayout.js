import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li><Link to='/dashboard/sellers'>Sellers</Link></li>
                        <li><Link to='/dashboard/buyers'>Buyers</Link></li>
                        <li><Link to='/dashboard/addProducts'>Add Products</Link></li>
                        <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;