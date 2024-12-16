"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';  

const SubsidiaryFilter = () => {  
  const [subsidiary, setSubsidiary] = useState('');  
  const [location, setLocation] = useState('');
  const [User, setUsers]=useState([])  
  const [gen, setgen  ] = useState([])
 
  const[update , setUpdate] = useState([])
  const [secudate, setsecupdate] = useState([])
  const [full , setfull] = useState(true)
  


  

   useEffect(() => {  
    const fetchUsers = async () => {  
      try {  
        const response = await axios.get('https://danaback-2.onrender.com/danatest');  
        setUsers(response.data);  
      } catch (error) {  
        console.error('Error fetc hing users:', error);  
      }  
    };  
    fetchUsers();  
  }, []);   



  const handleSearch = () => {  
     setfull(false)
    setUpdate(User.filter((ele:{jobTitle:string,company:string, loction:string})=>ele.company == subsidiary))
   setsecupdate(update.filter((ele:{jobTitle:string,company:string, loction:string})=>ele.loction == location))
    
   

  if(update.length == 0){
    setgen(User.filter((ele:{jobTitle:string,company:string, loction:string})=>ele.loction == location))
  }

  else if(secudate.length == 0){
    setgen(User.filter((ele:{jobTitle:string,company:string, loction:string})=>ele.company == subsidiary))
  }

  if( update.length == 0 && secudate.length == 0 ){
    setfull(true)
  }

  };  



  return (  
    <div className='flex flex-col' >
    <div className="bg-pink-300 -my-4 shadow-lg flex flex-row justify-between mx-16 p-4 items-center"> {/* Pink background, padding, aligned items */}  
      <div className="text-gray-700 ">Filter by:</div>  

      <select  
        value={subsidiary}  
        onChange={(e) => setSubsidiary(e.target.value  )} 
        className=" bg-pink-300 w-28  underline rounded "  
      >  
        <option value="">All Subsidiaries</option>  
        <option value="Dana Group of Company">Dana Group Of Company</option> 
        <option value="Dana Pharmaceutical Limited">Dana Phermacauticals Limited</option> 
        <option value="Bubble Wrap Nigeria">Bubble Wrap Nigeria</option> 
        <option value="DLC Africa">DLC Africa</option> 
        <option value="DFM Nigeria Limited">DFM Nigeria Limited</option> 
        <option value="Dana Motors Limited">Dana Motors Limited</option> 
        <option value="Dana Plast Limited">Dana Plast Limited</option> 
        
      </select>  

      <select  
        value={location}  
        onChange={(e) => setLocation(e.target.value)} 
        className=" bg-pink-300 w-28  underline rounded "  
      >  
        <option value="">All Locations</option>  
        <option value="Minna, Niger">Minna, Niger, Nigeria</option> 
        <option value="lagos">Lagos, Nigeria</option> 
        <option value="Ibadan, oyo">Ibadan, Oya Nigeria</option> 

        
      </select> 

      <select  
        value={location}  
        
        className=" bg-pink-300  underline rounded "  
      >  
        <option value="true">DESC</option>  
        <option value="false">ASCD</option> 
        

        
      </select>  

    

      <button  
        onClick={handleSearch}  
        className="bg-red-600 text-sm text-white px-3 py-2 rounded hover:bg-red-700"  
      >  
        Search  
      </button> 


    </div>  



<nav className="overflow-x-auto text-xs mx-16 my-10"> {/* Add horizontal scroll if needed */}  
<table className="min-w-full border-collapse"> {/* Table with minimum width */}  
  <thead>  
    <tr className="bg-gray-100"> {/* Light gray header row */}  
      <th className="px-6 py-4 text-left">Job Title</th>  
      <th className="px-6 py-4 text-left">Company</th>  
      <th className="px-6 py-4 text-left">Location</th>  
      <th className="px-6 py-4"></th> {/* Empty column for button */}  
    </tr>  
  </thead>  
{full &&  <tbody>  
    {User.map((job:{ _id:string, jobTitle:string,company:string, loction:string}) => (  
      <tr key  ={job._id} className="border-b hover:bg-blue-700 border-gray-200"> {/* Border between rows */}  
        <td className="px-6 py-4">{job.jobTitle}</td>  
        <td className="px-6 py-4">{job.company}</td>  
        <td className="px-6 py-4">{job.loction}</td>  
        <td className="px-6 py-4 bg-blue-900 text-center hover:bg-blue-900 text-sm text-white hover:cursor-pointer  rounded">  
          <a  className=" text-center hover:bg-blue-700 text-sm text-white   rounded">View /Apply  
          </a>  
        </td>  
      </tr>  
    ))}  

    
  </tbody>  }


  { !full && gen.map((job:{ _id:string, jobTitle:string,company:string, loction:string}) => (  
      <tr key={job._id} className="border-b hover:bg-blue-800 border-gray-200">   
        <td className="px-6 py-4">{job.jobTitle}</td>  
        <td className="px-6 py-4">{job.company}</td>  
        <td className="px-6 py-4">{job.loction}</td>  
        <td className="px-6 py-4 bg-blue-900 text-center hover:bg-blue-900 text-sm text-white hover:cursor-pointer   rounded">  
          <a  className=" text-center hover:bg-blue-700 text-sm text-white   rounded">View /Apply  
          </a>  
        </td>
         
      </tr>  

    ))} 
</table>  
</nav>







</div>
  );  
};  

export default SubsidiaryFilter;