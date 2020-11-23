import React from 'react';
import { color } from '../../config/color';
import Link from 'next/link'
export const AppSidebar = ({active}) => {
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
                        <li className={`nav-item ${active === 'dashboard' ? 'active' : '' }`}>
                            <Link href="/"><a>
                                <i  className="fas fa-home"></i>
                                <p>Dashboard</p>
                            </a>
                            </Link>
                            
                        </li>
                        <li className={`nav-item ${active === 'latihansoal' ? 'active' : '' }`}>
                            <Link href="/latihansoal">
                                <a>
                                    <i className="fas fa-pen"></i>
                                    <p>Latihan Soal</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`nav-item ${active === 'materi' ? 'active' : '' }`}>
                            <Link href="/materi">
                                <a>
                                    <i className="fas fa-graduation-cap"></i>
                                    <p>Media Belajar</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`nav-item ${active === 'peringkat' ? 'active' : '' }`}>
                            <Link href="/peringkat">
                                <a>
                                    <i className="fas fa-trophy"></i>
                                    <p>Peringkat</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`nav-item ${active === 'informasi' ? 'active' : '' }`}>
                            <Link href="/informasi">
                                <a>
                                    <i className="fas fa-newspaper"></i>
                                    <p>Informasi</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`nav-item ${active === 'diskusi' ? 'active' : '' }`}>
                            <Link href="/diskusi">
                                <a>
                                    <i className="fas fa-comments"></i>
                                    <p>Forum Diskusi</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`nav-item ${active === 'toefl' ? 'active' : '' }`}>
                            <Link href="/toefl">
                                <a>
                                    <i className="fas fa-file-alt" ></i>
                                    <p>Toefl Prediction</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`nav-item ${active === 'sertifikasi' ? 'active' : '' }`}>
                            <Link href="/sertifikasi">
                                <a>
                                    <i className="fas fa-certificate"></i>
                                    <p>Sertifikasi</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`nav-item ${active === 'compress' ? 'active' : '' }`}>
                            <Link href="/compress">
                                <a>
                                    <i className="fas fa-file"></i>
                                    <p>Compress File</p>
                                </a>
                            </Link>
                        </li>
                        <hr></hr>
                        <li className={`nav-item ${active === 'komplain' ? 'active' : '' }`}>
                            <Link href="/komplain">
                                <a>
                                    <i className="fas fa-comment"></i>                                  
                                    <p>Complain & Saran</p>
                                </a>
                            </Link>
                        </li>
                        <li className={`nav-item ${active === 'pengaturan' ? 'active' : '' }`}>
                            <Link href="/pengaturan">
                                <a>
                                    <i className="fas fa-cog"></i>                                    
                                    <p>Pengaturan</p> 
                                </a>
                            </Link>
                        </li>                                               
                    </ul>
                </div>
            </div>
        </div>
    )
}