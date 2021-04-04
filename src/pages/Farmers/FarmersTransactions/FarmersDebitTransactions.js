import React, {useState} from 'react';
import SideBar from '../../../components/SideBar';
import {FaBars } from 'react-icons/fa';
// import {Link} from 'react-router-dom'


const FarmersDebitTransactions = () => {
   
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
                    <h5 style={{fontWeight: 'bold'}}>Transaction Details</h5>
                </div>

                {/* details */}
                <div className="row mt-lg-0 mt-1">
                    <div className="col-lg-6">

                         <div className="mt-lg-4 mt-4">
                                <h6 style={{fontWeight: 'bold'}}>Payment Summary</h6>
                            </div>

                        {/* order summary */}
                        <div className="" style={{background: ' rgba(196, 196, 196, 0.2)', borderRadius: '5px', padding: '30px 15px'}}>

                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontWeight: 500, fontSize: 14}}>Payment Id</p>
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
                                    <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Date Payed</p>
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
                                    <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Account No</p>
                                </div>
                                <div>
                                   <p className="mb-0">3042314777</p> 
                                </div>
                            </div>
                            

                            <div>
                                <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>

                            <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Bank</p>
                                </div>
                                <div>
                                   <p className="mb-0">Firstbank</p> 
                                </div>
                            </div>

                            <div>
                                <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>

                            <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Account Name</p>
                                </div>
                                <div>
                                   <p className="mb-0" style={{fontWeight: 500, fontSize: 14,}}>Jide Olalelwonlere</p> 
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
                                   <p className="mb-0" style={{fontWeight: 600, fontSize: 14,}}>NGN 40,000</p> 
                                </div>
                            </div>

                            <div>
                                <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>

                            <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontSize: 14, lineHeight: '21px'}}>Charges</p>
                                </div>
                                <div>
                                   <p className="mb-0" style={{fontWeight: 500, fontSize: 14,}}>NGN 200</p> 
                                </div>
                            </div>

                            
                            <div>
                                <hr className="mt-4 mb-0" style={{borderTop: '1px solid rgba(196, 196, 196, 0.5)'}} />
                            </div>


                            <div className="mt-4" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <p className="mb-0" style={{fontWeight: 700}}>TOTAL DEBIT</p>
                                </div>
                                <div>
                                   <h6 className="mb-0" style={{fontWeight: 600, color: '#5B9223'}}>NGN 42,000</h6> 
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
 
export default FarmersDebitTransactions;