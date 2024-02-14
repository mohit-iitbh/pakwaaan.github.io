import React, { useState } from 'react';

// import Validation from './loginValidation';

function Login() {
    // const [values, setValues] = useState({
    //   email: '',
    //   password: ''
    // })

    // const [errors, setErrors] = useState({})

    // const handleInput = (event) => {
    //   setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    // }

    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   setErrors(Validation(values));

    // }


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
        const response = await fetch('http://localhost:8081/login', {
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
          window.location.href = "/restaurants";

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
              <li><i className="fa fa-phone"></i><a href="#">+91 7665715801</a></li>
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
               <li className="active"><a href="login.php">Sign In</a></li> */}
              <li><a href="/register">Sign Up</a></li>
              {/* <li><a href="blogs.php">Blogs</a></li>
              <li><a href="events.php">Events</a></li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
    
    {/* <section id="top_banner">
      <div className="banner">
        <div className="inner text-center">
          <h2>Login with us</h2>
        </div>
      </div>
    </section> */}
    
    
    
    <section id="login-reg">
      <div className="container">
        {/* Top content */}
        <div className="row">
          <div className="col-md-6 col-sm-12 forms-right-icons">
            <div className="section-heading">
              <h2>Sign In With <span>Us</span></h2>
              <p className="subheading">Honestly, we don't want to lie saying we do things that no one else does and if we did say so, that’d be a slap on the face of truth. We do great things up here like it’s done at few other portals but the difference is we do things in the most promising and convincing way that makes people attain the satisfaction that they’ve approached the right place for growing ahead in their security careers.</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="form-box">
              <div className="form-top">
                <div className="form-top-left">
                  <h3>Login to our site</h3>
                  <p>Enter username and password to login:</p>
                </div>
                <div className="form-top-right">
                  <i className="fa fa-key"></i>
                </div>
              </div>
              <div className="form-bottom">
                <form role="form" /*action="user_login.php" method="POST"*/ className="login-form" onSubmit={handleLogin}>
                  <div className="input-group form-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="fa fa-user"></i></span>
                    <input type="text" className="form-control" name="username" placeholder="email" aria-describedby="basic-addon1" required="required" onChange={handleInputChange} />
                    {/* {errors.email && <span className='text-danger'>{errors.email}</span>} */}
                  </div>
                  <div className="input-group form-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="fa fa-unlock"></i></span>
                    <input type="password" className="form-control" name="password" placeholder="Password" aria-describedby="basic-addon1" required="required" onChange={handleInputChange} />
                    {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}
                  </div>
                  <button type="submit" name="save1" className="btn">Sign in as a User!</button>
                  {/* <button type="submit" name="save2" className="btn abc">Sign in as a Restraunt Owner!</button>
                  <button type="submit" name="save" className="btn abc">Sign in as Admin!</button> */}
                </form>
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

export default Login;