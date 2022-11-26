import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <div className="tabs flex justify-center mt-5">
                <div className="tabs">
                    <Link to='/dashboard/sellers' className="tab tab-lg tab-lifted">Sellers</Link>
                    <Link to='/dashboard/buyers' className="tab tab-lg tab-lifted tab-active">Buyers</Link>
                    <Link to='/dashboard/allUsers' className="tab tab-lg tab-lifted">All Users</Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default DashboardLayout;