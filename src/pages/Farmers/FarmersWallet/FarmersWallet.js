import React, {useState} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import './FarmersWallet.css'
import ArrowUp from '../../../assets/images/arrow-up-circle.svg'
import ArrowDown from '../../../assets/images/arrow-down-circle.svg'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'



const FarmersWallet = (props) => {

    const {walletBalance} = props
   
    const [toggled, setToggled] = useState(false);
 
    const handleToggleSidebar = (value) => {
      setToggled(value);
    };
    return (  
        <div className='app'>
         <SideBar
        
         toggled={toggled}
         handleToggleSidebar={handleToggleSidebar}
          />

        <main>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>
            
            {/* content of page  layout*/}
            <header>

                <div className="mt-lg-1 mt-4">
                    <h5 style={{fontWeight: 'bold'}}>Wallet</h5>
                </div>

                {/* Wallet div */}
                <div className="walletDiv mt-3">
                    <div>
                        <p className="mb-0">Balance</p>
                        <div className="mt-2">
                            <h4 className="walletAmount">NGN {walletBalance ? walletBalance : 0.00}</h4>
                        </div>
                    </div>
                    <div className="mt-lg-0 mt-2">
                     <Link to="/farmers/withdraw" className="btn btn-oyap">Withdraw</Link>
                    </div>
                </div>

                {/* transactions div */}
                <div className="mt-5">
                     <h6 style={{fontWeight: 'bold'}}>Transactions</h6> 
                </div>

                {/* transaction details */}
                <div className="creditDiv mt-3">
                    <div className="transactionRow">
                        <div className="transactionColumn">
                           <img src={ArrowUp} alt="credit" width="25" height="25" />
                        </div>
                        <div className="nameColumn mt-lg-0 mt-3">
                            <p className="mb-0" style={{fontWeight: 'bold'}}>Courtney Henry</p>
                        </div>
                        <div className="transactionColumn mt-lg-0 mt-3">
                            <p className="mb-0" style={{color:'#3A5654'}}>Credit</p>
                        </div>
                        <div className="amountColumn mt-lg-0 mt-3">
                            <p className="mb-0 creditColor">NGN 4,000.00</p>
                        </div>
                        <div className="doubleColumn mt-3">
                            <p className="mb-0" style={{color:'#3A5654'}}>28 Dec, 2020</p>
                        </div>
                        <div className="transactionColumn mt-lg-0 mt-3">
                            <Link to="/farmers/transactions/credit/1" className="mb-0" style={{color: '#5B9223', textDecoration: 'none'}}>View more</Link>
                        </div>
                    </div>
                </div>

                {/* debit */}
                <div className="debitDiv">
                    <div className="transactionRow">
                        <div className="transactionColumn">
                           <img src={ArrowDown} alt="credit" width="25" height="25" />
                        </div>
                        <div className="nameColumn mt-lg-0 mt-3">
                            <p className="mb-0" style={{fontWeight: 'bold'}}>Courtney Henry</p>
                        </div>
                        <div className="transactionColumn mt-lg-0 mt-3">
                            <p className="mb-0" style={{color:'#3A5654'}}>Debit</p>
                        </div>
                        <div className="amountColumn mt-lg-0 mt-3">
                            <p className="mb-0 debitColor">NGN 4,000.00</p>
                        </div>
                        <div className="doubleColumn mt-3">
                            <p className="mb-0" style={{color:'#3A5654'}}>28 Dec, 2020</p>
                        </div>
                        <div className="transactionColumn mt-lg-0 mt-3">
                            <Link to="/farmers/transactions/debit/1" className="mb-0" style={{color: '#5B9223', textDecoration: 'none'}}>View more</Link>
                        </div>
                    </div>
                </div>

                {/* credit */}
                <div className="creditDiv">
                    <div className="transactionRow">
                        <div className="transactionColumn">
                           <img src={ArrowUp} alt="credit" width="25" height="25" />
                        </div>
                        <div className="nameColumn mt-lg-0 mt-3">
                            <p className="mb-0" style={{fontWeight: 'bold'}}>Courtney Henry</p>
                        </div>
                        <div className="transactionColumn mt-lg-0 mt-3">
                            <p className="mb-0" style={{color:'#3A5654'}}>Credit</p>
                        </div>
                        <div className="amountColumn mt-lg-0 mt-3">
                            <p className="mb-0 creditColor">NGN 4,000.00</p>
                        </div>
                        <div className="doubleColumn mt-3">
                            <p className="mb-0" style={{color:'#3A5654'}}>28 Dec, 2020</p>
                        </div>
                        <div className="transactionColumn mt-lg-0 mt-3">
                            <Link to="/farmers/transactions/credit/1" className="mb-0" style={{color: '#5B9223', textDecoration: 'none'}}>View more</Link>
                        </div>
                    </div>
                </div>


                  

            </header>
        
            
        </main>
          
     </div>
     );
}

const mapStateToProps = (state) =>{
    return{
        walletBalance: state.auth.walletBalance
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FarmersWallet);