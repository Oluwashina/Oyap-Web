import React, {useState} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import Item from "../../../assets/images/item4_big.png";
import Item4 from "../../../assets/images/item4.png";
import Item6 from "../../../assets/images/item6.png";
import Default from "../../../assets/images/default.png";
import {Link} from 'react-router-dom'


const FarmersProductDetails = () => {
   
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

                <div className="mt-4">
                 <h5>1 truck load of nigerian grade alligator pepper</h5>
                </div>

                <div className="mt-4">
                    <hr className="mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.2)'}} />
                </div>

                <div className="row mb-5">
                    <div className="col-lg-5">

                        {/* product image */}
                        <div className="mt-4">
                         <img src={Item} alt="oyap" className="img-fluid itemImage" />
                        </div>

                        {/* smaller images */}
                        <div className="mt-4" style={{display:  'flex', justifyContent: 'space-between'}}>

                            <div>
                                <img src={Item4} alt="oyap" className="smallImages" />
                            </div>

                            <div>
                            <img src={Item6} alt="oyap" className="smallImages" />
                            </div>

                            <div>
                            <img src={Item4} alt="oyap" className="smallImages" />
                            </div>

                            <div>
                            <img src={Default} alt="oyap" className="smallImages" />
                            </div>
                        </div>

                    </div>

                        {/* item desc */}
                    <div className="col-lg-7">
                        {/* amount */}
                        <div className="mt-4">
                            <h5 style={{color: '#5B9223', fontWeight: 'bold'}}>NGN 40,000</h5>
                        </div>

                        {/* status */}
                        <div>
                            <h6>Status: <span style={{color: '#5B9223', fontWeight: 'bold'}}>In Stock</span></h6>
                        </div>

                        <div>
                            <hr />
                        </div>

                        {/* description */}
                        <div className="mt-4">   
                            <h6 style={{fontWeight: 600}}>Description</h6>
                            <p className="mt-2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>

                    {/* quantity add */}
                        <div className="mt-4">
                            <h6 style={{fontWeight: 600}}>Quantity</h6>
                           <p className="mt-2">2000</p>
                        </div>
                    
                    {/* category */}
                    <div className="mt-4">
                            <h6 style={{fontWeight: 600}}>Category</h6>
                           <p className="mt-2">Vegetables</p>
                        </div>

                        {/* add to cart and buy buttons */}
                        <div className="mt-2" style={{display: 'flex',}}>
                            <div style={{flex: 1}}>
                            <button className="btn btn-add btn-block mt-4">Edit</button>
                            </div>
                            <div className="ml-4" style={{flex: 1}}>
                        <Link to="/checkout" className="btn btn-buy btn-block mt-4">Delete</Link>
                            </div>
                        </div>

                    </div>


                </div>

            </header>
        
            
        </main>
          
     </div>
     );
}
 
export default FarmersProductDetails;