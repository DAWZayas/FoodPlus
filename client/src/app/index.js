import React from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navbar';

export default ({children}) => (
   <div className="container">
     <NavBar />
     {children}
     <Footer />
   </div>
 );