import React from 'react';

export const AppHeader = () => {
    return (
        <>
            <div className="main-header">
                <div className="logo-header " data-background-color="blue">

                    <a href="index.html" className="logo">
                        <img src="assets/img/logo.png" alt="navbar brand" className="navbar-brand"/>
                    </a>
                    <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse"
                        data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fas fa-bars"></i>
                        </span>
                    </button>
                    <button className="topbar-toggler more"><i className="fas fa-ellipsis-v"></i></button>
                    {/* <div className="nav-toggle">
                        <button className="btn btn-toggle toggle-sidebar toggled">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div> */}
                </div>
                <nav className="navbar navbar-header navbar-expand-lg" data-background-color="grey">

                    <div className="container-fluid">
                        <div className="collapse" id="search-nav">
                            <h3 style={{ fontWeight:'600', fontSize:24 }}>Halo Calon CPNS</h3>
                        </div>
                        <ul className="navbar-nav topbar-nav ml-md-auto align-items-center" style={{width:'50%',justifyContent:'flex-end'}}>
                            
                            <li className="nav-item dropdown hidden-caret">
                                <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-shopping-cart" style={{color:'#647195'}}></i>
                                </a>
                                <ul className="dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
                                    <li>
                                        <div className="dropdown-title d-flex justify-content-between align-items-center">
                                            Messages
                                            <a href="#" className="small">Mark all as read</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="message-notif-scroll scrollbar-outer">
                                            <div className="notif-center">
                                                <a href="#">
                                                    <div className="notif-img">
                                                        <img src="assets/img/profile.jpg" alt="Img Profile"/>
                                                    </div>
                                                    <div className="notif-content">
                                                        <span className="subject">Jimmy Denis</span>
                                                        <span className="block">
                                                            How are you ?
                                                        </span>
                                                        <span className="time">5 minutes ago</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="see-all" href="javascript:void(0);">See all messages<i
                                                className="fa fa-angle-right"></i> </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown hidden-caret">
                                <a className="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-bell" style={{color:'#647195'}}></i>
                                    <span className="notification"></span>
                                </a>
                                <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
                                    <li>
                                        <div className="dropdown-title">You have 4 new notification</div>
                                    </li>
                                    <li>
                                        <div className="notif-scroll scrollbar-outer">
                                            <div className="notif-center">
                                                <a href="#">
                                                    <div className="notif-icon notif-success"> <i className="fa fa-comment"></i> </div>
                                                    <div className="notif-content">
                                                        <span className="block">
                                                            Rahmad commented on Admin
                                                        </span>
                                                        <span className="time">12 minutes ago</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="notif-img">
                                                        <img src="assets/img/profile.jpg" alt="Img Profile"/>
                                                    </div>
                                                    <div className="notif-content">
                                                        <span className="block">
                                                            Reza send messages to you
                                                        </span>
                                                        <span className="time">12 minutes ago</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="see-all" href="javascript:void(0);">See all notifications<i
                                                className="fa fa-angle-right"></i> </a>
                                    </li>
                                </ul>
                            </li>
                            
                            <li className="nav-item dropdown hidden-caret">
                                <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false"  style={{ display:'flex', flexDirection:'row', alignItems:'center' }}>
                                    <div className="avatar-sm">
                                        <img src="assets/img/profile.jpg" alt="..."
                                            className="avatar-img img-thumbnail" style={{padding:2,borderWidth:0}}/>
                                    </div>
                                    <div style={{ display:'flex', alignItems:'center' }}>
                                        <p style={{fontSize:14, fontWeight:'bold',color:'#647195', paddingLeft:10, marginBottom:0}}>Yudi Candra</p>
                                        <i className="fas fa-chevron-down" style={{ paddingLeft:5, color:'#647195' }}></i>
                                    </div>
                                </a>
                                <ul className="dropdown-menu dropdown-user animated fadeIn">
                                    <div className="dropdown-user-scroll scrollbar-outer">
                                        <li>
                                            <div className="user-box">
                                                <div className="avatar-lg"><img src="assets/img/profile.jpg"
                                                        alt="image profile" className="avatar-img rounded"/></div>
                                                <div className="u-text">
                                                    <h4>Hizrian</h4>
                                                    <p className="text-muted">hello@example.com</p><a href="profile.html"
                                                        className="btn btn-xs btn-secondary btn-sm">View Profile</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">My Profile</a>
                                            <a className="dropdown-item" href="#">My Balance</a>
                                            <a className="dropdown-item" href="#">Inbox</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Account Setting</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Logout</a>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}