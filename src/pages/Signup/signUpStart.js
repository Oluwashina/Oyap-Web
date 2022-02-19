import React, {useState} from "react";
import Logo from "../../assets/images/logo.png";
import BuyImage from "../../assets/images/buy.svg";
import SellImage from "../../assets/images/sell.svg";
// import DeliveryImage from "../../assets/images/delivery.svg";
import WelcomeImg from "../../assets/images/welcome-img.png";
import "./signup.css";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const UserLogin = (props) => {

    const {history} = props

  const [tabData] = useState([
    { id: 1, name: "tab-1", text: "Buyer", imageUrl: BuyImage},
    { id: 2, name: "tab-2", text: "Seller" , imageUrl: SellImage},
  ]);

  
  const ToggleTab = (id) => {
    switch(id){
      case 1:
        history.push('/signup/Buyer')
        break;
      case 2:
        history.push('/signup/Seller')
        break;
      case 3:
        history.push('/signup/Logistics')
        break;
      default:
        alert('buyer')
    }
  }


   // tab Layout
   const tabLayout = tabData.map((item) => (
    <div 
    key={item.id}
    className="mr-4"
      onClick={() => ToggleTab(item.id)}>
        <div className="buy-div">
            <img src={item.imageUrl} alt="oyap" width="70" height="70" />
          </div>
      <p className="mt-2 text-center" style={{fontWeight: 600}}>{item.text}</p>
    </div>
  ));

  return (
    <div className="">
      <div className="row no-gutters">
        <div className="col-lg-4">
          {/* Logo */}
            <div className="text-center mt-4">
              <img src={Logo} alt="oyap logo" />
            </div>

            {/* progress bar */}
            <div className="mt-5" style={{display: 'flex',justifyContent: 'center'}}>
                <div className="active-bar">
                </div>
                <div className="bar ml-2">
                </div>
            </div>


            <div className="login-container mb-4">
                 <h3 className="mt-5 login-head">Sign Up as</h3>
                 <p style={{color: 'rgba(44, 58, 80, 0.2)'}}>Please select how you will like to use Oyap</p>

            
              {/* options to sign up layout */}
              <div className="mt-2" style={{display: "flex"}}>
                  {tabLayout}
              </div>

            </div>


            <div className="container already-div">
                <p style={{color: 'rgba(44, 58, 80, 0.2)'}}>Already have an account? <Link to="/login" style={{color: '#7BC30A', fontWeight: 600, textDecoration: 'none'}}>
                    Sign In</Link>
                    </p>
            </div>

       

        </div>
        <div className="col-lg-8 d-none d-md-block">
          <img src={WelcomeImg} alt="oyap" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
      
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
     
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
