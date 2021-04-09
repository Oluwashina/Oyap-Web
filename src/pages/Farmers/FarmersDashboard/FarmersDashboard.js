import React, {useEffect, useState} from 'react';
import BuyerFooter from '../../../components/BuyerFooter';
import FarmerNavbar from '../../../components/FarmerNavbar';
import './FarmersDashboard.css'
import Wallet from "../../../assets/images/wallet.svg";
import Arrow from "../../../assets/images/arrow.svg";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { getNewOrders, orderbyId } from '../../../store/actions/farmers';
import Moment from "react-moment";

const FarmersDashboard = (props) => {

    const {firstname, getOrder, auth, neworders, filterOrder, history} = props

    const [name] = useState('new')

    useEffect(() =>{
        if(auth){
          getOrder()
        } 
    }, [getOrder, auth])


     //   map pending orders layout
const newOrderLayout = neworders.length ? (
    neworders.map((value) => {
      return (
     <div key={value.id} className="mt-3 farmersOrders">
        <div>
            <div>
                <img src={value.cartItem.productImages[0]} alt="cart" className="cartImage" />
            </div>
        </div>

        <div>
            <div className="ml-lg-3 ml-0">
                    <p className="mb-0" style={{fontWeight: 'bold'}}>{value.cartItem.productName}</p>
                    <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date by: 
                         <Moment className="ml-1" format="MMMM Do, YYYY">
                                 {value.createdAt}
                            </Moment></p>
                    <p className="mb-0 mt-2" style={{fontSize: 14}}>Order time:
                                 <Moment className="ml-1" format="LT">
                                    {value.createdAt}
                                    </Moment></p>
                    <p className="mb-0 mt-2" style={{fontSize: 14}}>Quantity: {value.cartItem.cartQty}</p>

                    <div className="text-right mt-lg-0 mt-2">
                        <div onClick={()=>{handleRoute(value.id)}} style={{cursor: 'pointer'}} >
                            <img src={Arrow} alt="navigate" style={{width: 20, height: 20}} className="img-fluid" />
                        </div>         
                    </div>
            </div>
        </div>

        
    </div> 
      );
    })
  ) : (
    <div className="mb-3">
      <div className="text-center mt-5">
           <i className="mdi mdi-shopping-outline cartIcon" style={{color: '#5FA30E', fontSize: 50, background: 'none'}}></i>
      </div>
  
       <div className="text-center mt-3">
            <h5 className="mb-0">No New Orders Placed Yet!</h5>
            <p className="mb-0 mt-3" style={{fontStyle: 'italic'}}>New orders will appear here as soon as you have any!</p>
         </div>

    </div>
  );

  const handleRoute = (id) =>{
    history.push('/farmers/order/'+id)
    filterOrder(name, id)
  }


    return ( 
        <>
            <FarmerNavbar />

            <div className="container mt-5 mb-5">

                <div className="row">

                    <div className="col-lg-6 mb-5">
                        
                        <div className="mt-1 mt-lg-5">
                            <h4 style={{fontWeight: 700}}>Hello, {firstname}</h4>   
                            <p style={{color: 'rgba(44, 58, 80, 0.4', fontSize: 14}}>Welcome to your OYAP dashboard</p> 
                        </div>

                        <div className="mt-4">
                            <Link to="/farmers/addproduct" className="btn btn-oyap dash-width">Add new product</Link>
                        </div>


                        {/* orders count */}
                        <div className="mt-5 dash-width" style={{display: 'flex', flexWrap: 'wrap', }}>

                            <div className="box-width">
                                <p className="mb-0 newOrderStyle text-center">200</p>
                                <div className="text-center mt-3">
                                    <p className="mb-0" style={{lineHeight: '25px', fontWeight: 500}}>New Orders</p>
                                </div>
                            </div>
                            

                            <div className="box-width">
                                <p className="mb-0 confirmedOrderStyle text-center">100</p>
                                <div className="text-center mt-3">
                                    <p className="mb-0" style={{lineHeight: '25px', color: '#ED881C', fontWeight: 500}}>Confirmed Orders</p>
                                </div>
                            </div>

                            <div className="box-width">
                                <p className="mb-0 completedOrderStyle text-center">50</p>
                                <div className="text-center mt-3">
                                    <p className="mb-0" style={{lineHeight: '25px', fontWeight: 500}}>Completed Orders</p>
                                </div>
                            </div>

                            
                        </div>

                        {/* products and manage wallet */}
                        <div className="mt-3 dash-width" style={{display: 'flex', flexWrap: 'wrap', }}>

                            <div className="box-width">
                                <p className="mb-0 newOrderStyle text-center">200</p>
                                <div className="text-center mt-3">
                                    <p className="mb-0" style={{lineHeight: '25px', fontWeight: 500}}>Total Products</p>
                                </div>
                            </div>



                            <div className="box-width">
                                    <Link to="/farmers/wallet" className="walletStyle text-center">
                                     <img alt="wallet" src={Wallet} className="img-fluid" />
                                    </Link>
                                <div className="text-center mt-3">
                                    <p className="mb-0" style={{lineHeight: '25px', fontWeight: 500}}>Manage Wallet</p>
                                </div>
                            </div>

                           
                            </div>

                    </div>

                    <div className="col-lg-6">


                        {/* new orders layout */}
                        <div className="newOrders">

                            <h5>New Orders</h5>

                            {/* first order */}

                            {newOrderLayout}
                                                    

                            {/* view more layout */}
                            {neworders.length ? 
                               <div className="mt-4" style={{display: 'flex', justifyContent: 'flex-end'}}>

                               <Link to="/farmers/order/new" className="next-page page-space" style={{textDecoration: 'none', color: '#323335'}}>
                                   <span>View All <i className="mdi mdi-chevron-right" style={{color: '#c4c4c4'}}></i></span>
                               </Link>
                               
                             </div>
                             :
                             ""
                            }
                           
                        </div>



                    </div>

                </div>

            </div>


            <div style={{marginTop: '200px'}}>
                <BuyerFooter />
            </div>
        </>
     );
}

const mapStateToProps = (state) =>{
    return{
        auth: state.auth.isAuthenticated,
        firstname: state.auth.firstname,
        lastname: state.auth.lastname,
        neworders: state.farmers.newOrders
    }
}

const mapDispatchtoProps = (dispatch) =>{
    return{
        getOrder: () => dispatch(getNewOrders()),
        filterOrder: (value, id) => dispatch(orderbyId(value, id)),
    }
}
 
export default connect(mapStateToProps, mapDispatchtoProps)(FarmersDashboard);