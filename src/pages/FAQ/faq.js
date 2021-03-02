import React from 'react';
import BuyerFooter from '../../components/BuyerFooter';
import BuyerNav from '../../components/BuyerNavbar'
import './faq.css'

const FAQ = () => {
    return ( 
        <>

        <BuyerNav />

          {/* breadcrumbs */}
      <div style={{ background: " rgba(196, 196, 196, 0.2)", padding: "10px" }}>
        <div className="container">
          <p className="mb-0" style={{fontSize: 14}}>
            <span style={{ color: "#7BC30A", fontSize: 14 }}>Home</span>
            /FAQ
          </p>
        </div>
      </div>

      {/* faq title */}
      <section className="faq-section">
      <div className="container">
          <div className="row">
              <div className="col">
                  <h1>FAQ</h1>
              </div>
          </div>
      </div>
      </section>

      {/* faq questions and answers layout */}
      {/* 1st question */}
      <section className="faq-section" style={{background: '#efefef'}}>
          <div className="container">
                <div className="row gutter-2 gutter-md-4">
                    <div className="col-md-4 col-lg-3">
                        <h2 className="mb-4">Order</h2>
                    </div>

                    <div className="col-md-8 col-lg-9">

                    <div className="accordion" id="accordionExample">
                        <div className="card">
                          <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                              <button className="btn btn-header-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-1-1" aria-expanded="true" aria-controls="collapseOne">
                               Can i add items to my order?
                              </button>
                            </h2>
                          </div>
                      
                          <div id="collapse-1-1" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" style={{lineHeight: '30px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut ipsam optio et doloribus aut, magnam repellendus nostrum earum consequatur. Sunt voluptate, aperiam voluptatum, rem vero deleniti veniam omnis ipsum
                            </div>
                          </div>
                        </div> 

                          <div className="card">
                          <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                              <button className="btn btn-header-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-1-2" aria-expanded="true" aria-controls="collapseOne">
                                Can i cancel my order?
                              </button>
                            </h2>
                          </div>
                      
                          <div id="collapse-1-2" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" style={{lineHeight: '30px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut ipsam optio et doloribus aut, magnam repellendus nostrum earum consequatur. Sunt voluptate, aperiam voluptatum, rem vero deleniti veniam omnis ipsum
                            </div>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                              <button className="btn btn-header-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-1-3" aria-expanded="true" aria-controls="collapseOne">
                                Can i change my address?
                              </button>
                            </h2>
                          </div>
                      
                          <div id="collapse-1-3" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" style={{lineHeight: '30px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut ipsam optio et doloribus aut, magnam repellendus nostrum earum consequatur. Sunt voluptate, aperiam voluptatum, rem vero deleniti veniam omnis ipsum
                            </div>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                              <button className="btn btn-header-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-1-4" aria-expanded="true" aria-controls="collapseOne">
                                Can i merge my address?
                              </button>
                            </h2>
                          </div>
                      
                          <div id="collapse-1-4" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" style={{lineHeight: '30px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut ipsam optio et doloribus aut, magnam repellendus nostrum earum consequatur. Sunt voluptate, aperiam voluptatum, rem vero deleniti veniam omnis ipsum
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                </div>
          </div>
      </section>


      {/* 2nd question */}
      <section className="faq-section">
          <div className="container">
                <div className="row gutter-2 gutter-md-4">
                    <div className="col-md-4 col-lg-3">
                        <h2 className="mb-4">Delivery</h2>
                    </div>

                    <div className="col-md-8 col-lg-9">

                    <div className="accordion" id="accordionExample">
                        <div className="card">
                          <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                              <button className="btn btn-header-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-2-1" aria-expanded="true" aria-controls="collapseOne">
                               Which carrier will deliver my order?
                              </button>
                            </h2>
                          </div>
                      
                          <div id="collapse-2-1" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" style={{lineHeight: '30px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut ipsam optio et doloribus aut, magnam repellendus nostrum earum consequatur. Sunt voluptate, aperiam voluptatum, rem vero deleniti veniam omnis ipsum
                            </div>
                          </div>
                        </div> 

                          <div className="card">
                          <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                              <button className="btn btn-header-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-2-2" aria-expanded="true" aria-controls="collapseOne">
                                Where is my order?
                              </button>
                            </h2>
                          </div>
                      
                          <div id="collapse-2-2" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" style={{lineHeight: '30px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut ipsam optio et doloribus aut, magnam repellendus nostrum earum consequatur. Sunt voluptate, aperiam voluptatum, rem vero deleniti veniam omnis ipsum
                            </div>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                              <button className="btn btn-header-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-2-3" aria-expanded="true" aria-controls="collapseOne">
                                Will i have to pay some duties?
                              </button>
                            </h2>
                          </div>
                      
                          <div id="collapse-2-3" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" style={{lineHeight: '30px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut ipsam optio et doloribus aut, magnam repellendus nostrum earum consequatur. Sunt voluptate, aperiam voluptatum, rem vero deleniti veniam omnis ipsum
                            </div>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                              <button className="btn btn-header-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-2-4" aria-expanded="true" aria-controls="collapse-2-4">
                                Can i merge my address?
                              </button>
                            </h2>
                          </div>
                      
                          <div id="collapse-2-4" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" style={{lineHeight: '30px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut ipsam optio et doloribus aut, magnam repellendus nostrum earum consequatur. Sunt voluptate, aperiam voluptatum, rem vero deleniti veniam omnis ipsum
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                </div>
          </div>
      </section>


 {/* 3rs question */}
 <section className="faq-section"  style={{background: '#efefef'}}> 
          <div className="container">
                <div className="row gutter-2 gutter-md-4">
                    <div className="col-md-4 col-lg-3">
                        <h2 className="mb-4">Returns</h2>
                    </div>

                    <div className="col-md-8 col-lg-9">

                    <div className="accordion" id="accordionExample">
                        <div className="card">
                          <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                              <button className="btn btn-header-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-3-1" aria-expanded="true" aria-controls="collapseOne">
                               I've received the wrong item?
                              </button>
                            </h2>
                          </div>
                      
                          <div id="collapse-3-1" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" style={{lineHeight: '30px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut ipsam optio et doloribus aut, magnam repellendus nostrum earum consequatur. Sunt voluptate, aperiam voluptatum, rem vero deleniti veniam omnis ipsum
                            </div>
                          </div>
                        </div> 

                          <div className="card">
                          <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                              <button className="btn btn-header-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-3-2" aria-expanded="true" aria-controls="collapseOne">
                                Can i exchange my order?
                              </button>
                            </h2>
                          </div>
                      
                          <div id="collapse-3-2" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" style={{lineHeight: '30px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut ipsam optio et doloribus aut, magnam repellendus nostrum earum consequatur. Sunt voluptate, aperiam voluptatum, rem vero deleniti veniam omnis ipsum
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                </div>
          </div>
      </section>

        <BuyerFooter />

        </>
     );
}

export default FAQ;