import React from 'react'; 
// import Login from './Login';
// import { NavLinNavLink } from 'react-router-dom';


// ffc
function Home() {

  return (  
    
    <div id="wrapper">
      <section id="top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-7 col-xs-7 top-header-links">
              <ul className="contact_links">
                <li><i className="fa fa-phone"></i><a href="">+91 7665715801</a></li>
                <li><i className="fa fa-envelope"></i><a href="">abhishek22@something.in</a></li>
              </ul>
            </div>
            <div className="col-md-5 col-sm-5 col-xs-5 social">
              <ul className="social_links">
                <li><a href="https://www.facebook.com/cywayz.cywayz/"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/cywayz"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/cywayzs/"><i className="fa fa-instagram"></i></a></li>
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
            <div className="row">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">
                <h1>PAKWAAAN</h1><span>A Campus Delivery System</span>
                </a>
              </div>
              <div id="navbar" className="collapse navbar-collapse navbar-right">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="/">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#footer">Contact</a></li>
                  <li><a href="/register">Sign Up</a></li>
                  <li><a href="/login">LogIn</a></li>  
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    

      <div id="myCarousel" className="carousel slide">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        <div className="item active">
          <div className="fill" style={{ backgroundImage: "url('https://static.toiimg.com/thumb/msid-101282760,width-1280,height-720,resizemode-4/101282760.jpg')" }}></div>
          <div className="carousel-caption slide-up">
            <h1 className="banner_heading">PAKW<span>AAAN</span></h1>
            <p className="banner_txt">A Campus delivery System</p>
            <div className="slider_btn">
              <button type="button" className="btn btn-default slide"><a style={{color:'#fff'}} href="/register">Sign Up </a><i className="fa fa-caret-right"></i></button>
              <button type="button" className="btn btn-primary slide"><a style={{color:'#fff'}} href="/login">LogIn </a><i className="fa fa-caret-right"></i></button>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="fill" style={{ backgroundImage: "url('https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/14/full/1694673859-4182.jpeg?im=FeatureCrop,size=(826,465)')" }}></div>
          <div className="carousel-caption slide-up">
          <h1 className="banner_heading">PAKW<span>AAAN</span></h1>
            <p className="banner_txt">A Campus delivery System</p>
            <div className="slider_btn">
              <button type="button" className="btn btn-default slide"><a style={{color:'#fff'}} href="/register">Sign Up </a><i className="fa fa-caret-right"></i></button>
              <button type="button" className="btn btn-primary slide"><a style={{color:'#fff'}} href="/login">LogIn </a><i className="fa fa-caret-right"></i></button>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="fill" style={{ backgroundImage: "url('https://assets.architecturaldigest.in/photos/60084f39f93542952b665f27/master/w_1600%2Cc_limit/Mumbai-restaurant-COVID-19-2.jpg')" }}></div>
          <div className="carousel-caption slide-up">
           <h1 className="banner_heading">PAKW<span>AAAN</span></h1>
            <p className="banner_txt">A Campus delivery System</p>
            <div className="slider_btn">
              <button type="button" className="btn btn-default slide"><a style={{color:'#fff'}} href="/register">Sign Up </a><i className="fa fa-caret-right"></i></button>
              <button type="button" className="btn btn-primary slide"><a style={{color:'#fff'}} href="/login">LogIn </a><i className="fa fa-caret-right"></i></button>
            </div>
          </div>
        </div>
      </div>

      <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <i className="fa fa-angle-left" aria-hidden="true"></i>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <i className="fa fa-angle-right" aria-hidden="true"></i>
        <span className="sr-only">Next</span>
      </a>
    </div>



    <section id="about">
      <div className="image-holder col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-left">
        <div className="background-imgholder" style={{ backgroundImage: "url('https://i.pinimg.com/originals/81/76/10/8176101bc5ea849d8cee2332995c8ad4.jpg')" }}>
          <img src="img/1.jpg" alt="about" className="img-responsive" style={{ display: 'none' }} />
        </div>
      </div>

      <div className="container-fluid">
        <div className="container-fluid">
          <div className="col-md-7 col-md-offset-5 col-sm-8 col-sm-offset-2 col-xs-12 text-inner">
            <div className="text-block" >
              <div className="section-heading">
                <h1>ABOUT <span>US</span></h1>
                <p className="subheading">
                PAKWAAAN is a comprehensive food delivery system designed to provide a seamless and delightful experience for users seeking a variety of culinary delights. The platform connects users with a wide range of restaurants, offering diverse cuisines delivered right to their doorstep. With a user-friendly interface, robust features, and a commitment to quality service, PAKWAAAN aims to revolutionize the way people experience food delivery.
                </p>
              </div>

              <ul className="aboutul">
                <li>
                  {' '}
                  <i className="fa fa-check"></i>PAKWAAAN allows users to customize their orders according to their preferences. Whether it's adjusting spice levels, choosing specific ingredients, or requesting special instructions, the platform ensures that customers get exactly what they want.
                </li>
                <li>
                  {' '}
                  <i className="fa fa-check"></i>PAKWAAAN boasts an intuitive and user-friendly interface, making it easy for customers to navigate through the website. From browsing restaurants to placing orders, the platform ensures a smooth and enjoyable experience.
                </li>
                <li>
                  {' '}
                  <i className="fa fa-check"></i>The website provides secure and convenient payment options. Users can choose from various payment methods, including credit/debit cards, digital wallets, and cash on delivery, ensuring flexibility and ease of use.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="process" >
      <div className="container" >
        <div className="section-heading text-center">
          <div className="col-md-12 col-xs-12">
            <h1>
              What <span>We Do</span>
            </h1>
            <p className="subheading">
            PAKWAAAN is a comprehensive food delivery system designed to provide a seamless and delightful experience for users seeking a variety of culinary delights. The platform connects users with a wide range of restaurants, offering diverse cuisines delivered right to their doorstep. With a user-friendly interface, robust features, and a commitment to quality service, PAKWAAAN aims to revolutionize the way people experience food delivery.
            </p>
          </div>
        </div>
        <div className="section-heading text-center">
          <div className="col-md-12 col-xs-12">
            <h1>
              Contribute <span>a Restraurant</span>
            </h1>
            <p className="subheading">
            Are you a restaurant owner looking to expand your reach and connect with a broader audience? Consider joining PAKWAAAN as a contributor restaurant to showcase your culinary delights to a diverse and enthusiastic customer base.
            </p>
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
              <p>
                Indian Institute of Technology , <br />
                Bhilai,<br />
                Durg, Chattisgarh,<br />
                Pin: 491001.<br />
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-3 col-xs-12 block">
            <div className="footer-block">
              <h4>Useful Links</h4>
              <hr />
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#footer">Contact</a></li>
                <li><a href="/login">LogIn</a></li>
                <li><a href="/register">Sign Up</a></li>
              </ul>
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
            <button className="color" style={{ backgroundColor: '#1abac8' }} onClick={() => mytheme(0)}></button>
            <button className="color" style={{ backgroundColor: '#ff8a00' }} onClick={() => mytheme(1)}></button>
            <button className="color" style={{ backgroundColor: '#b4de50' }} onClick={() => mytheme(2)}></button>
            <button className="color" style={{ backgroundColor: '#e54e53' }} onClick={() => mytheme(3)}></button>
            <button className="color" style={{ backgroundColor: '#1abc9c' }} onClick={() => mytheme(4)}></button>
            <button className="color" style={{ backgroundColor: '#159eee' }} onClick={() => mytheme(5)}></button>
          </div>
        </div>
      </div>
      <a className="open" href="#">
        <span><i className="fa fa-gear fa-spin"></i></span>
      </a>
    </div> */}
    
    </div>
  

  );
}

export default Home;