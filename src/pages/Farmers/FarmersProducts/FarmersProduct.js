import React, {useState} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
import Item1 from "../../../assets/images/item1.png";
import Item2 from "../../../assets/images/item2.png";
import Item3 from "../../../assets/images/item3.png";
import Item4 from "../../../assets/images/item4.png";
import Item5 from "../../../assets/images/item5.png";


const FarmersProduct = () => {
   
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
                    <h5 style={{fontWeight: 'bold'}}>Products</h5>
                </div>

                {/* list of products */}

                  {/* first row */}
                  <div className="row mt-4">
                    <div className="col-lg-3 col-6 mb-4 productCard">
                        {/* image */}
                        <div className="text-center">
                          <img src={Item1} alt="oyap" className="productImage" />
                        </div>
                        {/* name */}
                        <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 20,000</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mb-4 productCard">
                        <div className="text-center">
                          <img src={Item2} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 20,000</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mb-4 productCard">
                        <div className="text-center">
                          <img src={Item3} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 20,000</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mb-4 productCard">
                        <div className="text-center">
                          <img src={Item4} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 20,000</p>
                        </div>
                    </div>
                </div>

                {/* second row */}
                 <div className="row mt-4">
                    <div className="col-lg-3 col-6 mb-4 productCard">
                        {/* image */}
                        <div className="text-center">
                          <img src={Item2} alt="oyap" className="productImage" />
                        </div>
                        {/* name */}
                        <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 20,000</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mb-4 productCard">
                        <div className="text-center">
                          <img src={Item5} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 20,000</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mb-4 productCard">
                        <div className="text-center">
                          <img src={Item1} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 20,000</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mb-4 productCard">
                        <div className="text-center">
                          <img src={Item3} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 20,000</p>
                        </div>
                    </div>
                </div>

                {/* pagination */}
                 <div className="mt-5" style={{display: 'flex', justifyContent: 'flex-end'}}>

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

            </header>
        
            
        </main>
          
     </div>
     );
}
 
export default FarmersProduct;