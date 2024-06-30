import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/navbar"
// import { Nav } from './components/nav';

// import { Home } from './components/home/home';
import { Layout } from "./components/layout"
import { Contact } from "./components/contact/contactus"
import { BlogPage1 } from "./components/blog/blogpage1"
import { BlogPage2 } from "./components/blog/blogpage2"
import { BlogPage3 } from "./components/blog/blogpage3"
import { BlogPage4 } from "./components/blog/blogpage4"
import { BlogPage5 } from "./components/blog/blogpage5"
import { BlogPage6 } from "./components/blog/blogpage6"
// import { Blog } from './components/blog/blog';
import { BlogMain } from "./components/blog/blogmain"
import { AboutUs } from "./components/about/aboutus"
import { Property } from "./components/property/property"
import "bootstrap/dist/css/bootstrap.css"
//import Login from './components/login/Login';
import { Service } from "./components/service"
import Register from "./components/Auth/Register"
import Login from "./components/Auth/Login"
import ForgetPassword from "./components/Auth/ForgetPassword"
import Adminpropertylisting from "./components/Adminpropertylisting"
import Flow2 from "./components/Flow2/Flow2a"
import Flow2_2 from "./components/Flow2-2/Flow2a"
import Flow2_3 from "./components/Flow2-18/Flow2a"

// import { Footer } from './components/footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Layout />} />
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
          <Route path="/register" element={<Register />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/about/" element={<AboutUs />} />
          <Route
            path="/adminpropertylisting"
            element={<Adminpropertylisting />}
          />
          <Route path="/flow2/" element={<Flow2 />} />
          <Route path="/flow2/2" element={<Flow2_3 />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
