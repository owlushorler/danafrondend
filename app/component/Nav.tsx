"use client"
import { useState } from "react";


const Navigation = () => {  
const [update , setUpdate]=useState(false)

  return (  
    <div className=" flex flex-col">
    <nav className="bg-white p-4  flex flex-row px-20 justify-between space-x-8"> {/* White background, padding, horizontal alignment, spacing */}  
    <div>
        <a className="text-blue-900 hover:underline">
          <img className="h-20 w-20" src="https://i.ibb.co/DMVpbNT/DANA-logo-brand.png" alt="DANA-logo-brand"/></a>  
    </div>
    <div onClick={()=>setUpdate((ele)=>ele?false:true)}  className="md:hidden  text-2xl cursor-pointer" >
    &equiv;
    </div>

     

        <div className=' hidden md:flex md:flex-row gap-6' >
        <a className="text-blue-900 hover:underline cursor-pointer">Our Subsidiaries</a>  
    
        <a className="text-blue-900 cursor-pointer hover:underline">About Us</a>  
     
        <a className="text-blue-900 cursor-pointer hover:underline">Contact Us</a>  
    
        <a className="text-blue-900 cursor-pointer hover:underline">Career</a> 

      
        
        </div>

        



        
    </nav>  
    { update && <div className='md:hidden flex flex-col gap-6' >
        <a className="text-blue-900 cursor-pointer hover:underline">Our Subsidiaries</a>  
    
        <a className="text-blue-900 cursor-pointer hover:underline">About Us</a>  
     
        <a className="text-blue-900 cursor-pointer hover:underline">Contact Us</a>  
    
        <a className="text-blue-900 cursor-pointer hover:underline">Career</a>  
        </div>}



    

    </div>







  );  
};  

export default Navigation;