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
                                <i  className="fas fa-home"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a href="widgets.html">
                                <i className="fas fa-pen"></i>
                                <p>Latihan Soal</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a href="widgets.html">
                                <i className="fas fa-graduation-cap"></i>
                                <p>Media Belajar</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a href="widgets.html">
                                <i className="fas fa-trophy"></i>
                                <p>Peringkat</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a href="widgets.html">
                                <i className="fas fa-newspaper"></i>
                                <p>Informasi</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a href="widgets.html">
                                <i className="fas fa-comments"></i>
                                <p>Forum Diskusi</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a href="widgets.html">
                                <i className="fas fa-file-alt" ></i>
                                <p>Toefl Prediction</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a href="widgets.html">
                                <i className="fas fa-certificate"></i>
                                <p>Sertifikasi</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a href="widgets.html">
                                <i className="fas fa-file"></i>
                                <p>Compress File</p>
                            </a>
                        </li>
                        <hr></hr>
                        <li className="nav-item ">
                            <a href="widgets.html">
                                <i className="fas fa-comment"></i>
                                
                                <p>Complain & Saran</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a href="widgets.html">
                                <i className="fas fa-cog"></i>
                                
                                <p>Pengaturan</p> 
                            </a>
                        </li>
                        

                        
                    </ul>
                </div>
            </div>
        </div>
    )
}