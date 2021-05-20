import React, {useState, useEffect} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import './FarmersWallet.css'
import ArrowUp from '../../../assets/images/arrow-up-circle.svg'
import ArrowDown from '../../../assets/images/arrow-down-circle.svg'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { getFarmersTransactions } from '../../../store/actions/farmers';
import Moment from "react-moment";
import { getUserById } from '../../../store/actions/auth';



const FarmersWallet = (props) => {

    const {walletBalance, getTransaction, auth, transactions, getWalletBalance} = props
   
    const [toggled, setToggled] = useState(false);
 
    const handleToggleSidebar = (value) => {
      setToggled(value);
    };

    useEffect(() =>{
        if(auth){
          getWalletBalance()
          getTransaction()
        } 
    }, [getTransaction, auth, getWalletBalance])

    // mapping transactions
    const transactionsLayout = transactions.length ? (
        transactions.map((value) => {
            
          return (
         <div key={value.id} 
          className={value.type === 'Credit' ? "creditDiv mt-3" : "debitDiv mt-3"}
         >
            <div className="transactionRow">
                <div className="transactionColumn">
                   <img 
                   src={value.type === 'Credit' ? ArrowUp  : ArrowDown}
                    alt="transactionbar" width="25" height="25" />
                </div>
                <div className="nameColumn mt-lg-0 mt-3">
                    <p 
                     className={value.type === 'Credit' ? "mb-0 creditColor" : "mb-0 debitColor"}
                     >{value.status.toUpperCase()}</p>
                </div>
                <div className="transactionColumn mt-lg-0 mt-3">
                    <p className="mb-0" style={{color:'#3A5654'}}>
                        {value.type === 'Credit' ? "Credit" : "Debit"}
                    </p>
                </div>
                <div className="amountColumn mt-lg-0 mt-3">
                    <p 
                    className={value.type === 'Credit' ? "mb-0 creditColor" : "mb-0 debitColor"}
                     >
                        NGN {value.amount}</p>
                </div>
                <div className="doubleColumn mt-lg-0 mt-3">
                    <p className="mb-0" style={{color:'#3A5654'}}>
                         <Moment format="MMMM Do, YYYY">
                                 {value.createdAt}
                            </Moment>
                    </p>
                </div>
                <div className="transactionColumn mt-lg-0 mt-3">
                    <Link to={value.type === 'Credit' ? `/farmers/transactions/credit/${value.id}` : `/farmers/transactions/debit/${value.id}`} className="mb-0" style={{color: '#5B9223', textDecoration: 'none'}}>View more</Link>
                </div>`
            </div>
        </div>

          );
        })
      ) : (
        <div className="mb-3">
           <div className="text-center mt-5">
                <p className="mb-0 mt-3" style={{fontStyle: 'italic'}}>No transactions available for display!</p>
             </div>
        </div>
      );


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
                            <h4 className="walletAmount">NGN {walletBalance.toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") ? walletBalance.toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0.00}</h4>
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
                {/* layout */}
                {transactionsLayout}
            </header>
        
            
        </main>
          
     </div>
     );
}

const mapStateToProps = (state) =>{
    return{
        walletBalance: state.auth.walletBalance,
        auth: state.auth.isAuthenticated,
        transactions: state.farmers.transactions
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getTransaction: () => dispatch(getFarmersTransactions()),
        getWalletBalance: () => dispatch(getUserById()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FarmersWallet);