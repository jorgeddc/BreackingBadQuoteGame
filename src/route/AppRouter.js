 import React from 'react'
import { ShowBBplay } from '../BBPlay/ShowBBplay';
import { BBMain } from '../BBMain/BBMain';
import { Routes, Route,BrowserRouter } from "react-router-dom";

export const AppRouter = () => {
    return (
      
      <>     
       
    <BrowserRouter>
            <Routes>
            <Route path='/' element={<BBMain/>}/>
             <Route path='/ShowBBplay' element={<ShowBBplay/>}/> 
           </Routes>
    </BrowserRouter>
    </>
   
    
  
    )
    }
