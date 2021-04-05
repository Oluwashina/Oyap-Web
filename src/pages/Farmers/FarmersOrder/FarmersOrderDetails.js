import React, {useState} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import Item5 from "../../../assets/images/item5.png";
import './FarmersOrder.css'


const FarmersOrderDetails = () => {
   
    const [toggled, setToggled] = useState(false);
 
    const handleToggleSidebar = (value) => {
      setToggled(value);
    };

    const [timelineData] = useState([
        { id: 1, date: "23rd Sept, 2020", title: "Payment Received", time: "2:00 pm" },
        { id: 2, date: "23rd Sept, 2020", title: "Order Shipped", time: "6:00 pm" },
        { id: 3, date: "23rd Sept, 2020", title: "Awaiting Confirmation", time: "2:00 pm" },
      ]);

         // tab Layout
  const timelineLayout = timelineData.map((item) => (
    <div key={item.id} className="mt-4 orderTimeline" >
    <div>
        <div className={item.id === 3 ? "timelineWhiteCircle" : "timelineCircle"}>

        </div>
    </div>
    <div className="orderTimelineDiv">
            <div>
               <h6 className="mb-0" style={{fontWeight: 700}}>{item.title}</h6>
               <p className="mb-0 mt-2">{item.date}</p>
               <p className="mb-0 mt-2">{item.time}</p>
            </div>
    </div>

</div>
  ));

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
                    <h5 style={{fontWeight: 'bold'}}>Order details</h5>
                </div>

            {/* details */}
            <div className="row mt-lg-0 mt-1">
                    <div className="col-lg-6 mb-4">

                        {/* order details */}
                        <div className="mt-lg-4 mt-4 orderDetails" >

                            <div>
                                <img src={Item5} alt="cart" className="cartImage" />
                            </div>

                            <div className="ml-4 ml-lg-5">
                              <div className="">
                                    <p className="mb-0 mt-0 mt-lg-4" style={{fontWeight: 'bold', lineHeight: '25px'}}>Maize</p>
                                    <p className="mb-0 mt-2" style={{fontSize: 14}}>Qty: 1</p>
                                    <div className="mt-2">
                                        <p className="mb-0" style={{color: '#ED881C', fontSize: 14, fontWeight: '500'}}>Status: <span style={{color: '#ED881C', fontWeight: 700, lineHeight: '20px'}}>Payment Received</span></p>
                                    </div>
                                 </div>
                            </div>
                        </div>

                          {/* order location  */}
                          <div className="mt-lg-4 mt-4 orderDetails" >

                            <div>
                                <p className="mb-0" style={{fontSize: 15, lineHeight: '25px'}}>Delivery Address: </p>
                                <p className="mb-0 mt-3" style={{fontSize: 15}}>Phone Number: </p>
                            </div>

                            <div className="ml-4 ml-lg-5">
                              <div className="">
                                    <p className="mb-0" style={{lineHeight: '25px', fontSize: 15}}>4517 Washington Ave. Manchester, Kentucky 39495</p>
                                    <p className="mb-0 mt-3" style={{fontSize: 15}}>0815433445223</p>
                                  
                                 </div>
                            </div>
                        </div> 

                          {/* order timeline */}
                            <div className="mt-5 mt-lg-5">
                                    <h5>Order Timeline</h5>
                            </div>

                            {/* timeline flow layout */}
                            {timelineLayout}

                    </div>

                    <div className="col-lg-6">
                        
                        {/* order summary */}
                        <div className="mt-lg-4 mt-4" style={{background: ' rgba(196, 196, 196, 0.2)', borderRadius: '5px', padding: '30px 15px'}}>

                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontWeight: 500, fontSize: 14}}>Order Id</p>
                                </div>
                                <div>
                                   <p className="mb-0" style={{fontWeight: 500, fontSize: 14}}>123343432DHG</p> 
                                </div>
                            </div>

                            <div>
                                <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>

                            <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Date Ordered</p>
                                </div>
                                <div>
                                   <p className="mb-0" style={{fontWeight: 500, fontSize: 14,}}>23rd Sept, 2020</p> 
                                </div>
                            </div>

                            <div>
                                <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>

                            <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Amount</p>
                                </div>
                                <div>
                                   <p className="mb-0" style={{fontWeight: 600}}>NGN 40,000</p> 
                                </div>
                            </div>
                            

                            <div>
                                <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>

                            <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Shipping Fee</p>
                                </div>
                                <div>
                                   <p className="mb-0" style={{fontWeight: 600}}>NGN 2,000</p> 
                                </div>
                            </div>

                            <div>
                                <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>

                            <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Payment Channel</p>
                                </div>
                                <div>
                                   <p className="mb-0" style={{fontWeight: 500, fontSize: 14,}}>Flutterwave</p> 
                                </div>
                            </div>

                            
                            <div>
                                <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>


                            <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontWeight: 700}}>TOTAL PAID</p>
                                </div>
                                <div>
                                   <h6 className="mb-0" style={{fontWeight: 600, color: '#5B9223'}}>NGN 42,000</h6> 
                                </div>
                            </div>
                        </div>

                        {/* cancel and confirm order div for a new order */}
                        <div className="mt-lg-4 mt-4" style={{background: ' rgba(196, 196, 196, 0.2)', borderRadius: '5px', padding: '30px 15px'}}>

                            <div className="text-center mt-2">
                                <h6>Click here to confirm when order is ready for 
                                    pick up by delivery company</h6>
                            </div>

                            <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                <button className="btn btn-cancel" >Cancel Order</button>
                                </div>

                                <div>
                                <button className="btn btn-confirm" >Confirm Order</button>
                                </div>
                            </div>

                        </div>

                    </div>
            </div>

            </header>
        
            
        </main>
          
     </div>
     );
}
 
export default FarmersOrderDetails;