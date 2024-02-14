import React from 'react';
import './RestaurantsListing.css'


const RestaurantsListing = () => {
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
                <a className="navbar-brand" href="/">
                  <h1>PAKWAAAN</h1><span> A Campus Delivery System</span>
                </a>
              </div>
              <div id="navbar" className="collapse navbar-collapse navbar-right">
                <ul className="nav navbar-nav">
                  {/* <li><a href="/">Home</a></li>
                  <li><a href="#footer">Contact</a></li> */}
                  <li><a href="/">Log Out</a></li>
                  {/* <li className="active"><a href="registration.php">Sign Up</a></li> */}
                  {/* <li><a href="blogs.php">Blogs</a></li>
                  <li><a href="events.php">Events</a></li> */}
                </ul>
              </div>
            </div>
          </nav>
        </header>
     <section id="login-reg">
      <div className="container">
     <div className='cards' style={{backgroundColor: '#d2dbdd' }}>
      <div className='card'>
        <img src = "https://www.pspl.org/sites/default/files/2023-08/TechCafe_calendarimage.jpg"
         alt= "myPic" className = "card__img" /> 
          <div className = "card__info">
            <span className="card__category"> Try it Once </span>
            <h3 className="card__title"> TECH CAFE </h3>
            <a href = "" target= "_blank">
              <button> Order Now </button>
            </a>
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
              <hr/>
              <p>
                Aishwarya Crystal Layout, <br/>
                Singasandra,<br/>
                Bengaluru, Karnataka,<br/>
                Pin: 560068.
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 col-xs-12 block">
            <div className="footer-block">
              <h4>Useful Links</h4>
              <hr/>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Sign In</a></li>
                <li><a href="#">Sign Up</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 col-xs-12 block">
            <div className="footer-block">
              <h4>Community</h4>
              <hr/>
              <ul className="footer-links">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Forum</a></li>
                <li><a href="#">Free Goods</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="footer-block">
              <h4>Recent Posts</h4>
              <hr/>
              {/* Uncomment and update the content inside the list based on your requirements */}
              {/* <ul className="footer-links">
                <li>
                  <a href="#" className="post">Lorem ipsum dolor sit amet</a>
                  <p className="post-date">May 25, 2017</p>
                </li>
                <li>
                  <a href="#" className="post">Lorem ipsum dolor sit amet</a>
                  <p className="post-date">May 25, 2017</p>
                </li>
                <li>
                  <a href="#" className="post">Lorem ipsum dolor sit amet</a>
                  <p className="post-date">May 25, 2017</p>
                </li>
              </ul> */}
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
          {/* Uncomment and update the content inside the div based on your requirements */}
          {/* <div className="col-md-6 col-sm-6 col-xs-12 copyright">
            Developed by <a href="#">D-Tech, Bengaluru</a> designed by <a href="#">D-Tech, Bengaluru</a>
          </div> */}
        </div>
      </div>
    </section>
        </div>
    );
}

export default RestaurantsListing;
