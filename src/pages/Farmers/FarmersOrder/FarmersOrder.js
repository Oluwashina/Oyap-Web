import React, {useState, useEffect} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import Arrow from "../../../assets/images/arrow.svg";
import {connect} from 'react-redux'
import { getNewOrdersLimit, orderbyId } from '../../../store/actions/farmers';
import Moment from "react-moment";

const FarmersOrder = (props) => {

    const { getOrder, auth, neworders, history, filterOrder} = props
   
    const [toggled, setToggled] = useState(false);

    const [name] = useState('new')
 
    const handleToggleSidebar = (value) => {
      setToggled(value);
    };

    useEffect(() =>{
        if(auth){
          const values = {
              limit: 5,
              offset: 1
          }
          getOrder(values)
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

            <div style={{flex: 4}}>
                <div className="ml-0">
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
                            <div onClick={()=>{handleRoute(value.id)}} style={{cursor: 'pointer'}}>
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
            <div className="newOrders">

                            <h5>New Orders</h5>

                            {newOrderLayout}

                            {/* pagination layout */}

                            {neworders.length ? 

                                <div className="mt-4" style={{display: 'flex', justifyContent: 'flex-end'}}>

                                    <div className="active-pagination page-space">
                                        <span>1</span>
                                    </div>

                                    <div className="pagination page-space">
                                        <span>2</span>
                                    </div>

                                    <div className="next-page page-space">
                                        <span>Next Page <i className="mdi mdi-chevron-right" style={{color: '#c4c4c4'}}></i></span>
                                    </div>
                            </div>
                            :
                            ""
                            }  
                                     
                        </div>
                    </header>
        
            
        </main>
          
     </div>
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
        getOrder: (values) => dispatch(getNewOrdersLimit(values)),
        filterOrder: (value, id) => dispatch(orderbyId(value, id)),
    }
}
 

export default connect(mapStateToProps, mapDispatchtoProps)(FarmersOrder);