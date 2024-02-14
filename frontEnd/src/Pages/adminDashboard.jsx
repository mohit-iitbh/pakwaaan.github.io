import React from 'react';

const AdminDashboard = () => {

return (
<div>
    
    <div id="main-wrapper" data-navbarbg="skin6" data-theme="light" data-layout="vertical" data-sidebartype="full"
        data-boxed-layout="full">
    
        <header className="topbar" data-navbarbg="skin6">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
                <div className="navbar-header" data-logobg="skin5">
                    {/* <!-- This is for the sidebar toggle which is visible on mobile only --> */}
                    <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)">
                        <i className="ti-menu ti-close"></i>
                    </a>
                    
                    <div className="navbar-brand">
                        <a href="#" className="logo">
                            {/* <!-- Logo icon --> */}
                            <b className="logo-icon">
                                {/* <!--You can put here icon as well // <i className="wi wi-sunset"></i> //--> */}
                                {/* <!-- Dark Logo icon --> */}
                                <img src="../../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                                {/* <!-- Light Logo icon --> */}
                                <img src="../../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                            </b>
                            
                            <span className="logo-text">
                                {/* <!-- dark Logo text --> */}
                                <img src="../../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                                {/* <!-- Light Logo text --> */}
                                <img src="../../assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
                            </span>
                        </a>
                    </div>
                  
                    
                </div>
                
                {/* <!-- End Logo --> */}
                
                <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin6">
                    
                    {/* <!-- toggle and nav items --> */}
                    
                    {/* <ul className="navbar-nav float-start me-auto">
                        
                        {/* <!-- Search -->
                        
                        <!---<li className="nav-item search-box">
                            <a className="nav-link waves-effect waves-dark" href="javascript:void(0)">
                                <div className="d-flex align-items-center">
                                    <i className="mdi mdi-magnify font-20 me-1"></i>
                                    <div className="ms-1 d-none d-sm-block">
                                        <span>Search</span>
                                    </div>
                                </div>
                            </a>
                            <form className="app-search position-absolute">
                                <input type="text" className="form-control" placeholder="Search &amp; enter">
                                <a className="srh-btn">
                                    <i className="ti-close"></i>
                                </a>
                            </form>
                        </li>
                    </ul> */}
                    
                    {/* <!-- Right side toggle and nav items --> */}
                    
                    <ul className="navbar-nav float-end">
                        
                        {/* <!-- User profile and search --> */}
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    <img src="../../assets/images/users/1.jpg" alt="user" className="rounded-circle" width="31" /> 
                                 
                                  <img src="../../assets/images/users/<?php echo $data['image']; ?>" alt="user" className="rounded-circle" width="31" />
                                
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end user-dd animated" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#"><i className="ti-user me-1 ms-1"></i>
                                    My Profile</a>
                                <a className="dropdown-item" href="admin_logout.php"><i className="ti-wallet me-1 ms-1"></i>
                                    Logout</a>
                                <a className="dropdown-item" href="javascript:void(0)"><i className="ti-email me-1 ms-1"></i>
                                    Inbox</a>
                            </ul>
                        </li>
                        
                        {/* <!-- User profile and search --> */}
                        
                    </ul>
                </div>
            </nav>
        </header>
        
        {/* <!-- End Topbar header --> */}
        
        
        {/* <!-- Left Sidebar - style you can find in sidebar.scss  --> */}
        
        <aside className="left-sidebar" data-sidebarbg="skin5">
            {/* <!-- Sidebar scroll--> */}
            <div className="scroll-sidebar">
                {/* <!-- Sidebar navigation--> */}
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="adminDashboard.php"
                                aria-expanded="false">
                                <i className="mdi mdi-av-timer"></i>
                                <span className="hide-menu">Dashboard</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="admin-mentorManage.php"
                                aria-expanded="false">
                                <i className="mdi mdi-account-network"></i>
                                <span className="hide-menu">Mentor Management</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="admin-menteeManage.php"
                                aria-expanded="false">
                                <i className="mdi mdi-account-network"></i>
                                <span className="hide-menu">Mentee Management</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="admin-notifications.php"
                                aria-expanded="false">
                                <i className="mdi mdi-bell"></i>
                                <span className="hide-menu">Notifications</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="admin-events.php"
                                aria-expanded="false">
                                <i className="mdi mdi-account"></i>
                                <span className="hide-menu">Events</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="admin-news.php"
                                aria-expanded="false">
                                <i className="mdi mdi-account"></i>
                                <span className="hide-menu">News</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="adminprofile.php"
                                aria-expanded="false">
                                <i className="mdi mdi-account-network"></i>
                                <span className="hide-menu">Profile</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="admin_logout.php"
                                aria-expanded="false">
                                <i className="mdi mdi-logout"></i>
                                <span className="hide-menu">Logout</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* <!-- End Sidebar navigation --> */}
            </div>
            {/* <!-- End Sidebar scroll--> */}
        </aside>
        
        {/* <!-- End Left Sidebar - style you can find in sidebar.scss  --> */}
        
        
        {/* <!-- Page wrapper  --> */}
        
        <div className="page-wrapper">
            
            {/* <!-- Bread crumb and right sidebar toggle --> */}
            
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-5 align-self-center">
                        <h4 className="page-title">Dashboard</h4>
                    </div>
                    <div className="col-7 align-self-center">
                        <div className="d-flex align-items-center justify-content-end">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <!-- End Bread crumb and right sidebar toggle --> */}
            
            
            {/* <!-- Container fluid  --> */}
            
            <div className="container-fluid">
                
                {/* <!-- Email campaign chart --> */}
            <div className="card text-white bg-primary mb-3" style="max-width: 18rem;">
                    <div className="card-header"></div>
                    <div className="card-body">
                      <h5 className="card-title">Mentee Count</h5>
                     {/* <h3><?php 
                      include 'db.php';
                      
                       $sql= " SELECT COUNT(id) as id FROM mentees ";
  
                         $data = mysqli_fetch_assoc(mysqli_query($con,$sql));
                         
                         echo $data['id'];
                      
                     ?></h3> */}
                    </div>
                  </div>
                 
                <div className="row">
                    <div className="card text-white bg-primary mb-3" style="max-width: 18rem;">
                        <div className="card-header"></div>
                        <div className="card-body">
                          <h5 className="card-title">Mentor Count</h5>
                         {/* <h3><?php 
                      include 'db.php';
                      
                       $sql= " SELECT COUNT(id) as id FROM mentor ";
  
                         $data = mysqli_fetch_assoc(mysqli_query($con,$sql));
                         
                         echo $data['id'];
                       
                        ?> </h3> */}
                        </div>
                      </div>    
               </div>
            </div>
            
            {/* <!-- End Container fluid  --> */}
            
            
            {/* <!-- footer --> */}
           </div>
            {/* //  */}
             <footer className="footer text-center">
                All Rights Reserved.
                
            </footer>
            {/* //  */}
            {/* <!-- End footer --> */}
            {/* //  */}
        
        {/* //  */}
        {/* <!-- End Page wrapper  --> */}
        {/* //  */}
    </div>
    

</div>
);
}

export default AdminDashboard;
