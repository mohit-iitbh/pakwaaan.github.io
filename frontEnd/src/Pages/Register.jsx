import React from 'react';

const Register = () => {
    return(
        
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
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">
                  <h1>PAKWAAAN</h1><span> A Campus Delivery System</span>
                </a>
              </div>
              <div id="navbar" className="collapse navbar-collapse navbar-right">
                <ul className="nav navbar-nav">
                  {/* <li><a href="/">Home</a></li>
                   <li><a href="#footer">Contact</a></li>
                   <li className="active"><a href="registration.php">Sign Up</a></li> */}
                  {/* <li><a href="blogs.php">Blogs</a></li>
                  <li><a href="events.php">Events</a></li> */}
                  <li><a href="/login">LogIn</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
  
        {/* <section id="top_banner">
          <div className="banner">
            <div className="inner text-center">
              <h2>Lorem ipsum dolor sit amet</h2>
            </div>
          </div>
        </section> */}
  
        <section id="login-reg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 forms-right-icons"></div>
              <div className="col-md-15 col-sm-12" style={{ paddingLeft: '50px' }}>
                <div className="form-box">
                  <div className="form-top">
                    <div className="form-top-left">
                      <h3>Sign up now</h3>
                      <p>Fill in the form below to get instant access</p>
                    </div>
                    <div className="form-top-right" style={{ paddingLeft: '50px' }}>
                      <i className="fa fa-pencil"></i>
                    </div>
                    <ul>
                    <li><a href="/register/user">Sign UP as a User!</a></li>
                    <li><a href="signUp_mentee.php">Register as a Restaurant!</a></li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-3 col-xs-12 block">
                <div className="footer-block">
                  <h4>Address</h4>
                  <hr />
                  <p>Aishwarya Crystal Layout, <br />
                    Singasandra,<br />
                    Bengaluru, Karnataka,<br />
                    Pin: 560068.<br />
                  </p>
                </div>
              </div>
  
              {/* Add the other blocks similarly */}
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
            </div>
          </div>
        </section>
  
        {/* <div id="panel">
          <div id="panel-admin">
            <div className="panel-admin-box">
              <div id="tootlbar_colors">
                <button className="color" style={{ backgroundColor: '#1abac8' }} onClick={() => mytheme(0)}></button>
                <button className="color" style={{ backgroundColor: '#ff8a00' }} onClick={() => mytheme(1)}> </button>
                <button className="color" style={{ backgroundColor: '#b4de50' }} onClick={() => mytheme(2)}> </button>
                <button className="color" style={{ backgroundColor: '#e54e53' }} onClick={() => mytheme(3)}> </button>
                <button className="color" style={{ backgroundColor: '#1abc9c' }} onClick={() => mytheme(4)}> </button>
                <button className="color" style={{ backgroundColor: '#159eee' }} onClick={() => mytheme(5)}> </button>
              </div>
            </div>
          </div>
          <a className="open" href="#"><span><i className="fa fa-gear fa-spin"></i></span></a>
        </div> */}
      </div>


    );
}

export default Register;