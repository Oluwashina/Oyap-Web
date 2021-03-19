import React, {useState} from 'react';
import BuyerNav from '../../components/BuyerNavbar';
import './Orders.css'
import BuyerFooter from '../../components/BuyerFooter';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import { useFirestoreConnect } from "react-redux-firebase"
import moment from 'moment'


const Orders = (props) => {

  const {buyerId, orders, history} = props


  // const { auth: { uid: buyerId },} = useSelector((state) => state.firebase);

  // const myOrders = useSelector((state) => state.firestore.ordered.orders);
  useFirestoreConnect([
    { collection: "orders", where: [["buyerId", "==", buyerId]] },
  ]);

  console.log(orders)

    const [initialTab, setTab] = useState(1);
    

    const [tabData] = useState([
        { id: 1, name: "tab-1", text: "Pending Orders"},
        { id: 2, name: "tab-2", text: "Completed Orders" },
      ]);

      const handleToggle = (id) => {
        if(id === 1){
          console.log('Pending')
          setTab(id)
        
        }
        else if(id === 2){
          console.log('Completed')
          setTab(id);
          var yes = orders.filter(val => val.status === 'Completed')
          console.log(yes)
        }
      
      } 

   const handleDetailsRoute = (productId, id, product, orderAt, orderData) => {
       console.log(product)
       history.push("/order/" + productId, {
          id: id,
          product: product,
          orderAt,
          orderData
       });
        window.scrollTo(0, 0);
      };

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



  // pending orders map
  const myOrders = !orders ?
    (
      <div className="center">
      {/* icon */}
      <div className="text-center mt-5">
          <i className="mdi mdi-shopping-outline cartIcon" style={{color: '#5FA30E', fontSize: 50}}></i>
      </div>

      <div className="text-center mt-3">
          <h5 className="mb-0">No Orders Placed Yet!</h5>
          <p className="mb-0 mt-3">Looks like you haven't made your choice yet</p>
      </div>

      <div className="text-center">
      <Link to="/" className="btn btn-sell mt-4">Start Shipping</Link>
      </div>

   </div>  
    )
     : orders.map(({products, id, orderData, orderAt},i) =>{
       return(
              products.map((product, j)=>{
                return(
                  <div key={j} className="mt-4 orderDiv">
                  <div>
                      <div>
                           <img src={product.images[0]} alt="cart" className="cartImage" />
                       </div>
                  </div>
    
                  <div>
                       <div className="">
                              <p className="mb-0 orderTitle">{product.name}</p>
                              <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date by: {moment(orderAt.toDate()).format('Do MMM, YYYY')}</p>
                              <div className="mt-2">
                                  <p className="mb-0" style={{color: '#ED881C', fontSize: 14}}>Awaiting Confirmation</p>
                              </div>
                      </div>
                  </div>
    
                  <div>
                      <div className="">
                        
                       <button  onClick={() => handleDetailsRoute(product.id, id, product, orderAt, orderData)} className="btn orderDetailsBtn" >View Details</button>
                      </div>         
                  </div>
                </div>
                )
              })
            )
        }) 


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
          
            {/* 2nd item */}
            

            {myOrders}

         </div>

         <div style={{marginTop: '300px'}}>
                <BuyerFooter />
            </div>

        </>
    );
}

const mapStateToProps = (state) =>{
  return{
    buyerId : state.firebase.auth.uid,
    orders: state.firestore.ordered.orders
  }
}
 
export default connect(mapStateToProps)(Orders);