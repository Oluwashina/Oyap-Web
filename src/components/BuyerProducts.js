import React from 'react';
import { Link } from 'react-router-dom';
import './BuyerProducts.css'
import Item1 from "../assets/images/item1.png";
import Item2 from "../assets/images/item2.png";
import Item3 from "../assets/images/item3.png";
import Item4 from "../assets/images/item4.png";
import Item5 from "../assets/images/item5.png";

const BuyerProducts = (props) => {

    const {itemRoute, products} = props
    

    const handleRoute = (val) =>{
        console.log(val)
        itemRoute(val)
    }

    const AllProducts = !products ?
    (
        <div>
            <p>Loading</p>
        </div>
    )
     : products.map(product =>{
            return(
                <div key={product.id} className="col-lg-2 col-6 mb-4 productCard" onClick={() => handleRoute(product.id)}>
                {/* image */}
                <div className="text-center">
                  <img src={product.images[0]} alt="oyap" className="productImage" />
                </div>
                {/* name */}
                <div className="mt-3">
                    <p className="mb-0 text-center">{product.name}</p>
                </div>
                {/* price */}
                <div className="mt-2">
                    <p className="mb-0 price text-center">NGN 20,000</p>
                </div>
            </div> 
            )
        }) 

    return ( 
        <>
        {/* Products heading */}
            <div className="container" style={{background: 'rgba(196, 196, 196, 0.2)', padding: '10px 20px'}}>
                <div style={{display: 'flex'}}>
                    <div style={{flex: 2}}>   
                        <p className="mb-0" style={{fontWeight: 600}}>Recently Added</p>
                    </div>
                    <div style={{flex: 1}}>
                        <ul className="mb-0" style={{display: 'flex', listStyle: 'none', justifyContent: 'space-between', alignItems: 'flex-end',}}>
                            <li className="d-none d-lg-block"><Link to="/"  style={{textDecoration: 'none', color: 'rgba(50, 51, 53, 0.8)'}}>Fruits</Link></li>
                            <li className="d-none d-lg-block"><Link to="/" style={{textDecoration: 'none', color: 'rgba(50, 51, 53, 0.8)'}}>Vegetables</Link></li>
                            <li className="d-none d-lg-block"><Link to="/" style={{textDecoration: 'none', color: 'rgba(50, 51, 53, 0.8)'}}>Meat</Link></li>
                            <li className="d-sm-block d-md-block"><Link to="/" style={{color: '#5B9223', textDecoration: 'none'}}>View All</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* end of products heading */}

            {/* products layout section */}
            <div className="container mt-lg-4 mt-3">

                {/* first row */}
                <div className="row">
                    <div className="col-lg-2 col-6 mb-4 productCard" onClick={() => handleRoute(1)}>
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
                    <div className="col-lg-2 col-6 mb-4 productCard"  onClick={() => handleRoute(2)}>
                        <div className="text-center">
                          <img src={Item2} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 8,000</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 mb-4 productCard"  onClick={() => handleRoute(3)}>
                        <div className="text-center">
                          <img src={Item3} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 40,000</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 mb-4 productCard"  onClick={() => handleRoute(4)}>
                        <div className="text-center">
                          <img src={Item4} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 40,000</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 mb-4 productCard"  onClick={() => handleRoute(5)}>
                        <div className="text-center">
                          <img src={Item5} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 10,000</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 mb-4 productCard"  onClick={() => handleRoute(6)}>
                        <div className="text-center">
                          <img src={Item1} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 40,000</p>
                        </div>
                    </div>
                </div>

                {/* second row */}
                <div className="row">
                    <div className="col-lg-2 col-6 mb-4 productCard">
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
                    <div className="col-lg-2 col-6 mb-4 productCard">
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
                    <div className="col-lg-2 col-6 mb-4 productCard">
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
                    <div className="col-lg-2 col-6 mb-4 productCard">
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
                    <div className="col-lg-2 col-6 mb-4 productCard">
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
                    <div className="col-lg-2 col-6 mb-4 productCard">
                        <div className="text-center">
                          <img src={Item1} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 40,000</p>
                        </div>
                    </div>
                </div>

                {/* third row */}
                <div className="row">
                    <div className="col-lg-2 col-6 mb-4 productCard">
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
                    <div className="col-lg-2 col-6 mb-4 productCard">
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
                    <div className="col-lg-2 col-6 mb-4 productCard">
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
                    <div className="col-lg-2 col-6 mb-4 productCard">
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
                    <div className="col-lg-2 col-6 mb-4 productCard">
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
                    <div className="col-lg-2 col-6 mb-4 productCard">
                        <div className="text-center">
                          <img src={Item1} alt="oyap" className="productImage" />
                        </div>
                         {/* name */}
                         <div className="mt-3">
                            <p className="mb-0 text-center">Green Beans clean and processed 50 kg</p>
                        </div>
                        {/* price */}
                        <div className="mt-2">
                            <p className="mb-0 price text-center">NGN 40,000</p>
                        </div>
                    </div>
                </div>

                {/* mapping products */}
                <div className="row">
                     {AllProducts}
                </div>

            </div>
        </>
     );
}
 
export default BuyerProducts;