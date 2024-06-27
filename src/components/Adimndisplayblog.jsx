import React, { useEffect, useState } from 'react';
import { Card, CardTitle, CardSubtitle, CardText, CardBody, Button } from "reactstrap";
import Slider from "react-slick";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import img1 from '../assets/image/blog/blog1/image1.png';
import { useNavigate } from 'react-router-dom';
import '../style/Admindisplayblog.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Adimdisplayblog() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 50000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const [blogdata, setblogdata] = useState([]);
  const blogfetch = async () => {
    try {
      const response = await fetch(`https://tolet-globe-backend.onrender.com/blogs/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setblogdata(data);
      } else {
        console.log(data);
      }
      console.log(blogdata);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    blogfetch();
  }, []);
  const shownav = useNavigate();
  const goto = (id) => {
    localStorage.setItem('blogid', id);
    shownav('/showblog');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
  const del=async(id)=>{
     try{
        const response=await fetch(`https://tolet-globe-backend.onrender.com/blogs/${id}`,{
          method:'DELETE',
          header:{
            'Content-Type':'application/json',
          }
        });
        const data=await response.json();
        if(response.status===200){
          alert('Blog deleted Successfully');
          window.location.reload();
        }else{
          console.log(data);
        }
     }catch(error){
      console.error(error)
     }
  }
  const fetchImage = async (event) => {
    const response = await fetch(`https://tolet-globe-backend.onrender.com/image/${event}`);
    const blob = await response.blob();
    console.log(URL.createObjectURL(blob));
    return URL.createObjectURL(blob);
    
  };

  return (
    <div style={{ width: '100vw', height: '100vh', overflowY: 'auto' }}>
      <h1 style={{ textAlign: 'center', marginTop: '5%', marginBottom: '5%' }}>Blogs</h1>
      
      <div className='blog-card-container' style={{ width: '100%', height: '100%', padding: '0', margin: '0', display: 'flex', justifyContent: 'space-between'}}>
     
        {blogdata.map((element, index) => (
          <div key={element._id} class="col-md-4" style={{ backgroundColor: 'black' }}>
          
            <Card style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>

              <img alt="Sample" src={()=>fetchImage(element.img)} style={{ width: '100%', borderRadius: '4%' }} />
              <CardBody className="text-light start" style={{ width: '100%',height:'10%' }}>
                <h6  className='displayblogdate'>{formatDate(element.updatedAt)}</h6>
                <CardTitle className="displayblogtitle" tag="h4">
                  {element.title.substring(0, 40)}....
                </CardTitle>
              
              
                <CardText>{element.content.substring(0, 60)}...</CardText>
                <div style={{display:'flex',justifyContent:'space-between',width:'100%',padding:'0',margin:'0'}}>
                <button style={{backgroundColor:'#3cbcb1',padding:'1%',borderRadius:'3%'}} onClick={() => goto(element._id)}>Read More <i className="fas fa-arrow-right" style={{ fontSize: '12px', marginLeft: '5px' }} /></button>
                <button style={{backgroundColor:'tomato',padding:'2%',borderRadius:'3%'}} onClick={() => del(element._id)}>Delete <i className="fas fa-trash-alt" style={{ fontSize: '12px', marginLeft: '5px' }} /></button>
                </div>
                <CardSubtitle className="displayblogauthor" tag="h6">
                  by {element.author.substring(0, 20)}
                </CardSubtitle>
              </CardBody>
            </Card>
          </div>
        ))}
        
       
      </div>
    
    </div>

  );
}