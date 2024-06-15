import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/navbar';
// import { Nav } from './components/nav';

// import { Home } from './components/home/home';
import { Layout } from './components/layout';
import { Contact } from './components/contact/contactus';
import  {BlogPage1 } from './components/blog/blogpage1';
import  {BlogPage2 } from './components/blog/blogpage2';
import  {BlogPage3 } from './components/blog/blogpage3';
import  {BlogPage4 } from './components/blog/blogpage4';
import  {BlogPage5 } from './components/blog/blogpage5';
import  {BlogPage6 } from './components/blog/blogpage6';
// import { Blog } from './components/blog/blog';
import { BlogMain } from './components/blog/blogmain';
import {AboutUs} from './components/about/aboutus';
import { Property } from './components/property/property';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/login/Login';
import {Service} from './components/service';
// import { Footer } from './components/footer';
function App() {
  return (
   <div className="App">
      <BrowserRouter>
      <NavBar />
      {/* <Nav /> */}
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Layout/>} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/blog" element={<BlogMain />} />
          <Route path="/blog/blogpage-1" element={<BlogPage1 />} />
          <Route path="/blog/blogpage-2" element={<BlogPage2 />} />
          <Route path="/blog/blogpage-3" element={<BlogPage3 />} />
          <Route path="/blog/blogpage-4" element={<BlogPage4 />} />
          <Route path="/blog/blogpage-5" element={<BlogPage5 />} />
          <Route path="/blog/blogpage-6" element={<BlogPage6 />} />
          <Route path="/service" element={<Service />} />
          <Route path="/property" element={<Property />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/about/" element={<AboutUs />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
   
);
}

export default App;
