import React from 'react';
import { color } from '../../config/color';

export const AppSidebar = () => {
    return(
        <div className="sidebar sidebar-style-2" style={{backgroundColor:color.PRIMARY}}>
            <div className="sidebar-wrapper scrollbar scrollbar-inner">
                <div className="sidebar-content">
                    {/* <div className="user">
                        <div className="avatar-sm float-left mr-2">
                            <img src="assets/img/profile.jpg" alt="d" className="avatar-img rounded-circle"/>
                        </div>
                        <div className="info">
                            <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                                <span>
                                    Hizrian
                                    <span className="user-level">Administrator</span>
                                    <span className="caret"></span>
                                </span>
                            </a>
                            <div className="clearfix"></div>

                            <div className="collapse in" id="collapseExample">
                                <ul className="nav">
                                    <li>
                                        <a href="#profile">
                                            <span className="link-collapse">My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#edit">
                                            <span className="link-collapse">Edit Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#settings">
                                            <span className="link-collapse">Settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                    <ul className="nav nav-primary">
                        <li className="nav-item active">
                            <a href="widgets.html">
                                <i className="fas fa-home"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        
                        <li className="nav-item">
                            <a data-toggle="collapse" href="#base">
                                <i className="fas fa-layer-group"></i>
                                <p>Master Data</p>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="base">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <a href="/test">
                                            <span className="sub-item">Ukuran Kertas</span>
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </li>

                        
                    </ul>
                </div>
            </div>
        </div>
    )
}