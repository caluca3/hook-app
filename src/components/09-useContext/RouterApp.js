import React from "react";
 

import  {AboutScreen}  from "./AboutScreen";
import  {HomeScreen}  from "./HomeScreen";
import  {LoginScree}  from "./LoginScree";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { NavBar } from "./NavBar";
 
export const RouterApp = () => {
 
    return (<>
        <BrowserRouter>
            <NavBar/>
               
        <div className="container">
        
               <Routes>
                   <Route path="/" element={<HomeScreen/>}/>
                   <Route path="/about" element={<AboutScreen/>}/>
                   <Route path="/login" element={<LoginScree/>}/>
                   <Route path="*" element={<HomeScreen/>}/>
               </Routes>
        </div>

                
        </BrowserRouter>
    </>
    )
}
//Con router daba error de pathname
//con browser router daba error de anidamiento de router