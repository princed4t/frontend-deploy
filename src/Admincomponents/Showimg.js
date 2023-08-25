import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Showimg() {
  const [imageData, setImageData] = useState(null);
    let{email}=useParams();
        
    // Make an API request to fetch the image data from your Spring Boot backend
    
     useEffect(()=>{
   showimg();

     },[])


    const showimg=()=>{
     axios.get(`http://localhost:9000/home/download/${email}`, {responseType: 'arraybuffer'})
     .then((response) => {
      const byteArray = new Uint8Array(response.data);
      const blob = new Blob([byteArray], { type: 'image/jpeg' });
      const objectUrl = URL.createObjectURL(blob);
      setImageData(objectUrl);
    })
    .catch(error => {
      console.error('Error fetching image data:', error);
    });
  }


return  (  <div  style={{backgroundColor:"black",height:"700px"}}>
    <h1 style={{textAlign:'center' ,backgroundColor:"red"}}>Image Display</h1>
    <img className='princeimage' src={imageData} alt="Fetched Image" />
  
  </div>
);
    }
  
export default Showimg;






