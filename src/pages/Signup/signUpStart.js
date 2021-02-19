import React from "react";
import Logo from "../../assets/images/logo.png";
import BuyImage from "../../assets/images/buy.png";
import SellImage from "../../assets/images/sell.png";
import DeliveryImage from "../../assets/images/delivery.png";
import WelcomeImg from "../../assets/images/welcome-img.png";
import {signIn} from '../../store/actions/auth'
import "./signup.css";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const UserLogin = (props) => {


  return (
    <div className="">
      <div className="row no-gutters">
        <div className="col-lg-4">
          {/* Logo */}
            <div className="text-center mt-4">
              <img src={Logo} alt="oyap logo" />
            </div>


            <div className="login-container mb-4">
                 <h3 className="mt-5 login-head">Sign Up as</h3>
                 <p style={{color: 'rgba(44, 58, 80, 0.2)'}}>Please select how you will like to use Oyap</p>

            
            {/* options to sign up layout */}
            <div style={{display: "flex", justifyContent: 'space-between'}}>

                <div>
                    <div className="buy-div">
                    <img src={BuyImage} alt="oyap" width="70" height="70" />
                    </div>
                    <p className="mt-2 text-center" style={{fontWeight: 500}}>Buyer</p>
                </div>

                <div>
                    <div className="buy-div">
                    <img src={SellImage} alt="oyap" width="70" height="70" />
                    </div>
                    <p className="mt-2 text-center" style={{fontWeight: 500}}>Seller</p>
                </div>
                
                <div>
                    <div className="buy-div">
                    <img src={DeliveryImage} alt="oyap" width="70" height="70" />
                    </div>
                    <p className="mt-2 text-center" style={{fontWeight: 500}}>Logistics</p>
                </div>
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
      login: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
