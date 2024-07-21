import React from 'react';
import { Outlet } from 'react-router-dom';
import AadharVerification from './AadharVerification';
import { Footer } from '../footer';

export const Landlord = () => {

    return (
        <div>
             <div className='main'>
             <h1 style={{fontSize:'4rem'}}>Landlord</h1>
             <Outlet /> {
                <div className="sub-section">
                   <AadharVerification/>
                </div>
             }
             </div>
       <Footer/>
       </div>
      )
}