import React, {useState, useEffect} from 'react';
import Home from './page/Home';
import Delete from './page/Delete.js';
import Login from './page/Login.js';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes>                                                                       
               <Route path="/" element={<Home/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/delete" element={<Delete/>}/>
               <Route path="/Delete-Account" element={<Home/>}/>
               <Route path="/*" element={<Home/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;