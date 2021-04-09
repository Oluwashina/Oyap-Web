import React, {useState, useEffect} from 'react';
import BuyerNav from '../../components/BuyerNavbar';
import './Orders.css'
import BuyerFooter from '../../components/BuyerFooter';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import { getCustomersOrders } from '../../store/actions/orders';
import Moment from "react-moment";


const Orders = (props) => {

    const {getOrder, auth, customerOrder} = props

    const [initialTab, setTab] = useState(1);
    const [orderName, setOrderName] = useState('Pending')

    const [tabData] = useState([
        { id: 1, name: "tab-1", text: "Pending Orders"},
        { id: 2, name: "tab-2", text: "Completed Orders" },
      ]);

      const handleToggle = (id) => {
        if(id === 1){
          console.log('Pending')
          setTab(id)
          setOrderName('Pending')
          const value = 'Pending'
          getOrder(value)
        
        }
        else if(id === 2){
          console.log('Completed')
          setTab(id);
          setOrderName('Completed')
          const value = 'Completed'
          getOrder(value)

        }
      
      } 

      useEffect(() =>{
        if(auth){
          const value = 'Pending'
          getOrder(value)
        } 
    }, [getOrder, auth])

      // tab Layout
  const tabLayout = tabData.map((item) => (
    <div 
    key={item.id}
      className={initialTab === item.id ? "activeOrderTab tabSpace" : "orderTab tabSpace"}
      onClick={() => handleToggle(item.id)}
        >
      <p className="mb-0 text-center">{item.text}</p>
    </div>
  ));


  //   map pending orders layout
const orderLayout = customerOrder.length ? (
  customerOrder.map((value) => {
    return (
      <div key={value.id} className="mt-4 orderDiv">
                <div>
                    <div>
                         <img src={value.cartItem.productImages[0]} alt="cart" className="cartImage" />
                     </div>
                </div>

                <div>
                     <div className="">
                            <p className="mb-0 orderTitle">{value.cartItem.productName}</p>
                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date: 
                                    <Moment className="ml-1" format="MMMM Do, YYYY">
                                            {value.createdAt}
                                        </Moment>     
                             </p>
                            <div className="mt-2">
                                <p className="mb-0" style={{color: '#ED881C', fontSize: 14}}>{value.status} Payment</p>
                            </div>
                    </div>
                </div>

                <div>
                    <div className="orderDetailsBtn">
                     <Link to={`/order/${value.id}`}  style={{textDecoration: 'none', color: '#ED881C'}}>View Details</Link>
                    </div>         
                </div>
            </div>
    );
  })
) : (
  <div>
    <div className="text-center mt-5">
         <i className="mdi mdi-shopping-outline cartIcon" style={{color: '#5FA30E', fontSize: 50}}></i>
    </div>

     <div className="text-center mt-3">
          <h5 className="mb-0">No {orderName} Orders Placed Yet!</h5>
          <p className="mb-0 mt-3">Looks like you haven't made your choice yet</p>
       </div>

      <div className="text-center">
      <Link to="/" className="btn btn-sell mt-4">Start Shipping</Link>
    </div>
  </div>
);

    return (  
        <>

        <BuyerNav />

          {/* breadcrumbs */}
          <div style={{background: ' rgba(196, 196, 196, 0.2)', padding: '10px'}}> 
                <div className="container">
                     <p className="mb-0"><span style={{color: '#7BC30A'}}>Home /</span> My Orders</p>
                </div>
         </div>

         <div className="container mb-5">

            <div className="text-center mt-lg-4 mt-4">
                 <h5 style={{fontWeight: 'bold'}}>My Orders</h5>
            </div>

               {/* order tabs select */}
            <div
              className="mt-4" style={{display: 'flex', justifyContent: 'flex-start'}}>
              {tabLayout}
             </div>
            
            {/* orders details list layout */}

            {orderLayout}

         </div>

         <div style={{marginTop: '300px'}}>
                <BuyerFooter />
            </div>

        </>
    );
}

const mapStateToProps = (state) =>{
  return{
    customerOrder: state.order.customerOrders,
    auth: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    getOrder: (value) => dispatch(getCustomersOrders(value))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Orders);