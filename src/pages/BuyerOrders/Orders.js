import React, {useState} from 'react';
import BuyerNav from '../../components/BuyerNavbar';
import './Orders.css'
import Item5 from "../../assets/images/item5.png";
import Beans from "../../assets/images/greenbeans.png";
import BuyerFooter from '../../components/BuyerFooter';


const Orders = () => {

    const [initialTab, setTab] = useState(1);

    const [tabData] = useState([
        { id: 1, name: "tab-1", text: "Pending Orders"},
        { id: 2, name: "tab-2", text: "Completed Orders" },
      ]);

      const handleToggle = (id) => {
        setTab(id);
      } 

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
            {/* 1st */}
            <div className="mt-4 orderDiv">
                <div>
                    <div>
                         <img src={Item5} alt="cart" className="cartImage" />
                     </div>
                </div>

                <div>
                     <div className="">
                            <p className="mb-0 orderTitle">1 truck load of nigerian grade fresh maize</p>
                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date by: 23rd sept, 2020</p>
                            <div className="mt-2">
                                <p className="mb-0" style={{color: '#ED881C', fontSize: 14}}>Pending Payment</p>
                            </div>
                    </div>
                </div>

                <div>
                    <div>
                     <p className="orderDetailsBtn">View Details</p>
                    </div>         
                </div>
            </div>

            {/* 2nd item */}
            <div className="mt-4 orderDiv">
                <div>
                    <div>
                         <img src={Beans} alt="cart" className="cartImage" />
                     </div>
                </div>

                <div>
                     <div className="">
                            <p className="mb-0 orderTitle">Green beans cleaned and proccessed ma50kg</p>
                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date: 30rd sept, 2020</p>
                            <div className="mt-2">
                                <p className="mb-0" style={{color: '#ED881C', fontSize: 14}}>Awaiting Confirmation</p>
                            </div>
                    </div>
                </div>

                <div>
                    <div>
                     <p className="orderDetailsBtn">View Details</p>
                    </div>         
                </div>
            </div>

         </div>

         <div style={{marginTop: '300px'}}>
                <BuyerFooter />
            </div>

        </>
    );
}
 
export default Orders;