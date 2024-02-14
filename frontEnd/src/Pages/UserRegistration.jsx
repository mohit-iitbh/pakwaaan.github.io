import React, {useState} from 'react';
import './userForm.css';
import { Link } from 'react-router-dom';

const UserRegistration = () => {

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        phone: '',
        clg_id: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSignup = async (e) => {
        e.preventDefault();
         
        try {
            const token = sessionStorage.getItem('token'); //Add this line
            // Add your API call to the Node.js backend for authentication
            const response = await fetch('http://localhost:8081/register/user', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
    
              // Successful login, redirect or perform desired action
              console.log('Successful!');
              window.location.href = "/";
    
            } else {
              // Handle login failure
              console.log('Failed.');
            }
          } catch (error) {
            console.error('Error:', error);
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
                    <li><a href="/">Home</a></li>
                    <li><a href="#footer">Contact</a></li>
                    <li><a href="/login">Sign In</a></li>
                    {/* <li className="active"><a href="registration.php">Sign Up</a></li> */}
                    {/* <li><a href="blogs.php">Blogs</a></li>
                    <li><a href="events.php">Events</a></li> */}
                    </ul>
                </div>
                </div>
            </nav>
            </header>        
            <form role="form"  id="userRegistrationForm" onSubmit={handleSignup}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required onChange={handleInputChange}  />

                <label htmlFor="email">UserName/Email:</label>
                <input type="email" id="username" name="username" required onChange={handleInputChange} />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required onChange={handleInputChange} />

                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required onChange={handleInputChange} />

                <label htmlFor="id">College ID:</label>
                <input type="text" id="clg_id" name="clg_id" required onChange={handleInputChange} />

                <button  type="submit" id="userSubmitButton">Register</button>
            </form>

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

export default UserRegistration;
