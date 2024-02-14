// import React from 'react';
import React, { useState } from 'react';
// import Login from './Login';
// import { NavLinNavLink } from 'react-router-dom';


// ffc
function admin_login() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          // const token = sessionStorage.getItem('token'); //Add this line
          // Add your API call to the Node.js backend for authentication
          const response = await fetch('http://localhost:8081/admin_login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              // Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
  
            // Successful login, redirect or perform desired action
            console.log('Login successful!');
            window.location.href = "/";
  
          } else {
            // Handle login failure
            console.log('Login failed.');
          }
        } catch (error) {
          console.error('Error during login:', error);
        }
      };
  

  return (  
    
    <div id="wrapper">

    <section id="top-header">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12 top-header-links">
                    <ul className="contact_links">
                        <li><i className="fa fa-phone"></i><a href="#">+91 0000000000</a></li>
                        <li><i className="fa fa-envelope"></i><a href="#">sayhi@something.in</a></li>
                    </ul>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <ul className="social_links">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i className="fa fa-skype"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

    </section>

    <header>
        <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">
                        <h1>PAKWAAAN</h1><span>A Campus Food Delivery System</span></a>
                </div>
            </div>
        </nav>
    </header>

    <section id="login-reg">
        <div className="container center">
                <div className="col-md-6">

                    <div className="form-box">
                        <div className="form-top">
                            <div className="form-top-left">
                                <h3>Admin Login</h3>
                                <p>Enter username and password to log on:</p>
                            </div>
                            <div className="form-top-right">
                                <i className="fa fa-key"></i>
                            </div>
                        </div>
                        <div className="form-bottom">
                            <form role="form" /*action="admin_login.php" method="POST"*/ className="login-form" onSubmit={handleLogin}>
                                <div className="input-group form-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="fa fa-user"></i></span>
                                    <input type="text" className="form-control" name="user_name" placeholder="Username" aria-describedby="basic-addon1" onChange={handleInputChange} />
                                </div>
                                <div className="input-group form-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="fa fa-unlock"></i></span>
                                    <input type="password" className="form-control" name="password" placeholder="Password" aria-describedby="basic-addon1" onChange={handleInputChange}/>
                                </div>
                                <button type="submit" name="save1" className="btn">Sign in as a Admin!</button>

                            </form>
                        </div>
                    </div>
                </div> 
            </div>

    </section>
    

    <section id="bottom-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12 btm-footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 copyright">
            Developed by <a href="#">Cool Nerds</a> designed by <a href="#">Cool Nerds</a>
          </div>
        </div>
      </div>
    </section>
    {/* <div id="panel">
        <div id="panel-admin">
            <div className="panel-admin-box">
                <div id="tootlbar_colors">
                    <button className="color" style={{"background-color:#1abac8;"}} onclick="mytheme(0)"></button>
                    <button className="color" style={{"background-color:#ff8a00;"}} onclick="mytheme(1)"> </button>
                    <button className="color" style={{"background-color:#b4de50;"}} onclick="mytheme(2)"> </button>
                    <button className="color" style={{"background-color:#e54e53;"}} onclick="mytheme(3)"> </button>
                    <button className="color" style={{"background-color:#1abc9c;"}} onclick="mytheme(4)"> </button>
                    <button className="color" style={{"background-color:#159eee;"}} onclick="mytheme(5)"> </button>
                </div>
            </div>

        </div>
        <a className="open" href="#"><span><i className="fa fa-gear fa-spin"></i></span></a>
    </div> */}

</div>  
  );
}

export default admin_login;