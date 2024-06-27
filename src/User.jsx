import './App.css';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import { useState } from 'react';
import { NavBar } from './components/navbar';
import { Layout } from './components/layout';
import { Contact } from './components/contact/contactus';
import { BlogPage1 } from './components/blog/blogpage1';
import { BlogPage2 } from './components/blog/blogpage2';
import { BlogPage3 } from './components/blog/blogpage3';
import { BlogPage4 } from './components/blog/blogpage4';
import { BlogPage5 } from './components/blog/blogpage5';
import { BlogPage6 } from './components/blog/blogpage6';
import { BlogMain } from './components/blog/blogmain';
import { AboutUs } from './components/about/aboutus';
import { Service } from './components/service';
import { Property } from './components/property/property';

import 'bootstrap/dist/css/bootstrap.css';

import Login from './components/login/Login';

 const User=()=>{
  return (
    <div className="App">
 
        <NavBar />
       
        <Routes>
          <Route path="/*" element={<Layout />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogMain />} />
          <Route path="/blog/blogpage-1" element={<BlogPage1 />} />
          <Route path="/blog/blogpage-2" element={<BlogPage2 />} />
          <Route path="/blog/blogpage-3" element={<BlogPage3 />} />
          <Route path="/blog/blogpage-4" element={<BlogPage4 />} />
          <Route path="/blog/blogpage-5" element={<BlogPage5 />} />
          <Route path="/blog/blogpage-6" element={<BlogPage6 />} />
          <Route path="/service" element={<Service />} />
          <Route path="/property" element={<Property />} />
          <Route path="/about" element={<AboutUs />} />
        
         
        </Routes>
      
    </div>
  )
}
export default User
