import React from 'react';

const Navbar = () => {
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
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <h1>Cywayz</h1><span> CXO Association</span>
            </a>
          </div>
          <div id="navbar" className="collapse navbar-collapse navbar-right">
            <ul className="nav navbar-nav">
              <li><a href="index.php">Home</a></li>
              <li><a href="contact.php">Contact</a></li>
              <li className="active"><a href="login.php">Sign In</a></li>
              <li><a href="registration.php">Sign Up</a></li>
              <li><a href="blogs.php">Blogs</a></li>
              <li><a href="events.php">Events</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </div>
    );
}

export default Navbar;
