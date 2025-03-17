import { useEffect, useState } from "react"
// import axios from 'axios'
export default function Home(){
    const [user,setuser]=useState({
           hotels: [],
            cars: [],
            flights: [] 
         })
   

let  fetchdata=()=>{
    fetch('http://localhost:8001/showall', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
        .then(res => res.json())
        .then(data => {console.log(data)
            setuser(  {
                hotels: data.data.hotels ,
                cars: data.data.cars ,
                flights: data.data.flights 
            });
        })
      
        .catch(err => console.log("Fetch Error:", err));
      
}

   useEffect(()=>{
   fetchdata()
   },[])
    return <>
    <section>
        <img src="/Images/b1.webp" alt="" width='100%' height='600px' />
    </section>
    <section className="container">
        <div>
           
        <h1>Hotels</h1>
           <div className="grid-container">
         
             {
              
             user.hotels.map((index)=>{
                const imageUrl = index.Image.startsWith("http")
                ? index.Image
                : `http://localhost:8001${index.Image}`;

                    return <>
                 
                 <div className="box">
                 <img src={imageUrl} alt=""  width='200px'/>
                   {/* <p>{index.id}</p> */}
                   <h4>{index.Name}</h4>
                   <h5>{index.RoomType}</h5>
                   <p>{index.MobileNo}</p>
                <p>{index.Price}</p>
                <p>{index.Rating}⭐</p>
                <p>{index.status}</p>
                 </div>
                 
                    </>
                })
            }</div>
            {/* cars */}
            <h1>cars</h1>
            <div className="grid-container"> {
             
             user.cars.map((index)=>{
                const imageUrl = index.Image.startsWith("http")
                ? index.Image
                : `http://localhost:8001${index.Image}`;

                    return <>
                 <div className="box">
                 <img src={imageUrl} alt=""  width='200px'/>
                   <p>{index.id}</p>
                   <h4>{index.Name}</h4>
                 </div>
                   
                    </>
                })
            }</div>
  <h1>flights</h1>
            {/* flights */}
            <div className="grid-container"> {
             
             user.flights.map((index)=>{
                const imageUrl = index.Image.startsWith("http")
                ? index.Image
                : `http://localhost:8001${index.Image}`;

                    return <>
                 <div className="box">
                 <img src={imageUrl} alt=""  width='200px'/>
                   <p>{index.id}</p>
                   <h4>{index.Name}</h4>
                 </div>
                    </>
                })
            }</div>
        </div>
    </section>
    </>
}