import React from 'react';
import Style from './AdminDashboard.module.css';
import Clock from '../Clock';
import HomeAdmin from '../../Admin/HomeAdmin/HomeAdmin';
import AdminData from './AdminData';
import Calendar from '../Calendar';

function AdminDashboard(){
    return(
        <div className={Style.container}>   
            <h1>Welcome!</h1>
            <Clock />
            <div className={Style.box}>
                <div className={Style.sideBar}>
                    <HomeAdmin />
                </div>
                <div className={Style.adminData}>
                    <AdminData />
                </div>
                <div className={Style.calendar}>
                    <Calendar />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;