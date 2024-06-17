import { useState } from 'react'
import '../../style/contact/contactus.css'
import 'animate.css'

export const ContactUs = () => {
const [topic,settopic]=useState("Topic");
const [name,setname]=useState("");
const [email,setemail]=useState("");
const [message,setmessage]=useState("");
const onsend=async()=>{
  console.log(topic);
    try{
       const response=await fetch(`https://tolet-globe-backend.onrender.com/api/contact`,{
        method:'POST',
        headers:{
         'content-type': 'application/json'
        },
        body:JSON.stringify({
          "topic":topic,
          "name":name,
          "email":email,
          "message":message
        })

       });
       const data=await response.json();
       console.log(data);
       alert(data.message);
      window.location.reload();
    }catch(error){
      console.error(error);
    }
}
  const googlemaps =
    'https://www.google.com/maps/place/To-Let+Globe/@26.8465566,80.9797793,15z/data=!4m6!3m5!1s0x399bfd77577ba78f:0xd2d6f22d1b246815!8m2!3d26.8465566!4d80.9797793!16s%2Fg%2F11vhrqqb45?entry=ttu'
  return (
      <div class="innerdiv1">
        <a href={googlemaps} class="googlemaplink">
          <div class="imagediv2">
            <p class="imagediv2h1"></p>
          </div>
        </a>
        <div class="headingd1">
          <p class="headingh1">GET IN TOUCH</p>
          <p class="headingh2">Have some questions?</p>
          <p class="headingh2">feel free to ask them anytime</p>

          <form class="contactusform">
            <input type="text" onChange={e=>settopic(e.target.value)}  placeholder="Topic" class="contactusinput" />
            <input type="text" onChange={e=>setname(e.target.value)}  placeholder="Name" class="contactusinput" />
            <input type="email" onChange={e=>setemail(e.target.value)} placeholder="Email" class="contactusinput" />
            <textarea type="text" onChange={e=>setmessage(e.target.value)} placeholder="Message" class="contactusinput" />
            <button type="button" onClick={onsend} class="contactusbutt">Send Message &rarr;</button>
          </form>
        </div>
      </div>
  )
}
