import React from 'react';
import BB from "../img/BB.png"
import { Link}  from 'react-router-dom';


import "./bbmain.css"

export const BBMain = () => {

return (    

   <>   
 <nav>
      
       <Link className="link " to="/ShowBBplay">Breacking Bad Play</Link>
 </nav>    

        <div className="container-main">
        <img className='logo-main animate__animated animate__backInDown 'src={BB} alt="" /> 
        </div> 
     </>
  )
  
}
