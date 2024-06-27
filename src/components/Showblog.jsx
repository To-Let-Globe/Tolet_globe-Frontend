import React,{useEffect,useState} from 'react'
import '../style/Showblog.css'
import img1 from '../assets/image/blog/blog1/image1.png';
export default function Showblog() {
    const [targetBlog, setTargetBlog] = useState({});
  const blogfetch=async()=>{
    try{
         const response=await fetch(`https://tolet-globe-backend.onrender.com/blogs/`,{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
          },
         });
         const data=await response.json();
         if(response.status===200){
          const targetBlogData = data.find(blog => blog._id === localStorage.getItem('blogid'));
          if (targetBlogData) {
              console.log(targetBlogData);
            setTargetBlog(targetBlogData);
          }
         }else{
          console.log(data);
         }

    }catch(error){
      console.error(error);
    }
  }
  useEffect(() => {
    blogfetch();
  }, [])
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
  return (
    <div style={{width:'100vw',height:'100vh',color:'white'}}>
       
       <p className='showblogdate'>{formatDate(targetBlog.updatedAt)}</p>
      <h1  className='blogtitle'>{targetBlog.title}</h1>
      <p>By {targetBlog.author}</p>
      
      <div className='showblogcontent'>
      <img src={img1} className="showblogimage" style={{width:'80%',paddingBottom:'2%',marginLeft:'10%'}}></img>
        {targetBlog.content}
      </div>
    </div>
  )
}
