import React, {useState} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import Item5 from "../../../assets/images/item5.png";
import Item1 from "../../../assets/images/item1.png";
import Item4 from "../../../assets/images/item4.png";
import Arrow from "../../../assets/images/arrow.svg";
import {Link} from 'react-router-dom'

const FarmersOrderCompleted = () => {
   
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
            <div className="newOrders">

                            <h5>Completed Orders</h5>

                            {/* first order */}
                            <div className="mt-3 farmersOrders">
                                <div>
                                    <div>
                                        <img src={Item5} alt="cart" className="cartImage" />
                                    </div>
                                </div>

                                <div style={{flex: 4}}>
                                    <div className="ml-0">
                                            <p className="mb-0" style={{fontWeight: 'bold'}}>Maize</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date by: 23rd sept, 2020</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order time: 2:00pm</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Quantity: 10</p>

                                            <div className="text-right mt-lg-0 mt-2">
                                                <Link to="/" className="">
                                                    <img src={Arrow} alt="navigate" style={{width: 20, height: 20}} className="img-fluid" />
                                                </Link>         
                                            </div>
                                    </div>
                                </div>

                                
                            </div>

                            {/* second order */}
                            <div className="mt-4 farmersOrders">
                                <div>
                                    <div>
                                        <img src={Item5} alt="cart" className="cartImage" />
                                    </div>
                                </div>

                                <div style={{flex: 4}}>
                                    <div className="ml-0">
                                            <p className="mb-0" style={{fontWeight: 'bold'}}>Maize</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date by: 23rd sept, 2020</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order time: 2:00pm</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Quantity: 5</p>

                                            <div className="text-right mt-lg-0 mt-2">
                                                <Link to="/" className="">
                                                    <img src={Arrow} alt="navigate" style={{width: 20, height: 20}} className="img-fluid" />
                                                </Link>         
                                            </div>
                                    </div>
                                </div> 
                            </div>

                            {/* third order */}
                            <div className="mt-4 farmersOrders">
                                <div>
                                    <div>
                                        <img src={Item1} alt="cart" className="cartImage" />
                                    </div>
                                </div>

                                <div style={{flex: 4}}>
                                    <div className="ml-0">
                                            <p className="mb-0" style={{fontWeight: 'bold'}}>Green Beans</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date by: 23rd sept, 2020</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order time: 2:00pm</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Quantity: 10</p>

                                            <div className="text-right mt-lg-0 mt-2">
                                                <Link to="/" className="">
                                                    <img src={Arrow} alt="navigate" style={{width: 20, height: 20}} className="img-fluid" />
                                                </Link>         
                                            </div>
                                    </div>
                                </div>

                                
                            </div>

                            {/* fifth order */}
                         <div className="mt-4 farmersOrders">
                                <div>
                                    <div>
                                        <img src={Item4} alt="cart" className="cartImage" />
                                    </div>
                                </div>

                                <div style={{flex: 4}}>
                                    <div className="ml-0">
                                            <p className="mb-0" style={{fontWeight: 'bold'}}>Pepper</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order date by: 23rd sept, 2020</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Order time: 2:00pm</p>
                                            <p className="mb-0 mt-2" style={{fontSize: 14}}>Quantity: 10</p>

                                            <div className="text-right mt-lg-0 mt-2">
                                                <Link to="/" className="">
                                                    <img src={Arrow} alt="navigate" style={{width: 20, height: 20}} className="img-fluid" />
                                                </Link>         
                                            </div>
                                    </div>
                                </div>

                                
                            </div>

                            {/* pagination layout */}
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
                        </div>
                    </header>
        
            
        </main>
          
     </div>
     );
}
 
export default FarmersOrderCompleted;