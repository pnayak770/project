import React from 'react'
import "../index.css"

const Body = () => {
  return (
    <div style={{padding:"1rem 4rem"}}>
        <img src="https://plus.unsplash.com/premium_photo-1687989651213-2398cd99c5bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{width:"100%",height:"30rem",objectFit:"cover"}} />
       

       
        <div style={{textAlign:"center",backgroundColor:"#991f48", color:"white",padding:"2rem "}}>
       <h1 style={{}}>Think Health. Think Massage</h1>
      <p>
        We are open 9am to 6pm; Monday through Sunday. If you would like to
        schedule an appointment with us, please call at 987-654-3210 today!
      </p>
      <div style={{display:"flex",gap:"0.4rem",justifyContent:"center"}}>
        <button style={{backgroundColor:"#991f48",color:"white",border:"2px solid white", padding:"0.6rem 1.4rem"}}>
          Learn More About Us
        </button >
        <button style={{backgroundColor:"#991f48",color:"white",border:"2px solid white", padding:"0.6rem 1.4rem"}}>Contact Us Today</button>
      </div>
       </div>
      

       <div style={{display:"flex",flexDirection:"column",gap:"5",padding:"1rem",font:"semibold"}}>
      <p style={{color:"#991f48"}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque optio,
        provident corporis aspernatur aliquam enim quod voluptatem ipsam totam
        architecto blanditiis voluptatibus quam delectus, maiores odio rem
        repudiandae impedit esse! Lorem ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eius ut
        aliquid nam iste numquam illum ex reprehenderit minus cupiditate!
        Mollitia sit est saepe esse facilis odit eum aut itaque iure omnis. Eum,
        deleniti reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Reiciendis, dolor?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas saepe
        minus corrupti reiciendis nemo eos repellat temporibus ducimus quia
        voluptatum, ab exercitationem similique obcaecati? Eaque sunt numquam
        quisquam aperiam fugiat! Lorem ipsum dolor sit.
      </p>
      <hr />
    </div>

    {/* className="bg-[#A4A19C] w-full text-center p-2 */}

    <hr />
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <p style={{fontSize:"20px",color:"#991f48"}}>Family Wellness Massage Therapy</p>
      <p>
        9876 Main Street, Suite 123, Mainland, ML12345  
      </p>
      <p>Phone: 987-654-3210</p>
      <p style={{backgroundColor:"#a4a19c",width:"100%",textAlign:"center",padding:"0.5rem"}}>
        Copyright 2018 Website.com All rights reserved
      </p>
      <p>Powered by Website.com</p>
    </div>
    </div>
  )
}

export default Body