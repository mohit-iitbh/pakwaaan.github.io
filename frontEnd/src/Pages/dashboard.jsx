import React from 'react'
// import './index.css'

function Card1(){ 
    return (
    <>
    <div className='cards'>
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
  </>
    )

}


function Card2 (){
    return(
    <>
    <div className='cards'>
      <div className='card'>
        <img src = "https://t3.ftcdn.net/jpg/05/26/35/94/360_F_526359452_QrYV3AGvPO2QRVLCiH8MiYllQNeatKCw.jpg"
         alt= "myPic" className = "card__img" /> 
          <div className = "card__info">
            <span className="card__category"> Not Just Coffee  </span>
            <h3 className="card__title"> NJC </h3>
            <a href = "" target= "_blank">
              <button> Order Now </button>
            </a>
          </div>
      </div>
    </div>
  </>
    )

}

function Card3 (){
    return(
    <>
    <div className='cards'>
      <div className='card'>
        <img src = "https://www.shutterstock.com/image-vector/letter-ccb-monogram-logo-design-260nw-2352912775.jpg"
         alt= "myPic" className = "card__img" /> 
          <div className = "card__info">
            <span className="card__category"> Visit and Eat  </span>
            <h3 className="card__title"> Crazy Cake & Bakers </h3>
            <a href = "" target= "_blank">
              <button> Order Now </button>
            </a>
          </div>
      </div>
    </div>
  </>
    )

}

function Card4 (){
    return(
    <>
    <div className='cards'>
      <div className='card'>
        <img src = "https://wallpapercave.com/dwp2x/wp11030589.jpg"
         alt= "myPic" className = "card__img" /> 
          <div className = "card__info">
            <span className="card__category"> Come and Enjoy </span>
            <h3 className="card__title"> Go-Vatsa </h3>
            <a href = "" target= "_blank">
              <button> Order Now </button>
            </a>
          </div>
      </div>
    </div>
  </>
    )

}

function Card5 (){
    return(
    <>
    <div className='cards'>
      <div className='card'>
        <img src = "https://moneymint.com/wp-content/uploads/2020/03/Start-Cafe-Coffee-Day-Franchise-in-India-1.png"
         alt= "myPic" className = "card__img" /> 
          <div className = "card__info">
            <span className="card__category"> A lot can happen over  </span>
            <h3 className="card__title"> Cafe Coffee Day </h3>
            <a href = "" target= "_blank">
              <button> Order Now </button>
            </a>
          </div>
      </div>
    </div>
  </>
    )

}
export default { Card1 , Card2 , Card3, Card4 , Card5 } ;
// export default Card1;