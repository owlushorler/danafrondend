"use client"

import { useState } from 'react';  

const HRLogin = () => {  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
 






  return (  <div>
        <div className='bg-gray-300 text-center py-9' >

        LOGO

        

        </div>
    <div className="bg-gray-300 min-h-screen flex items-center justify-center"> {/* Light gray background, full viewport height */}  
      
      <div className="bg-white p-8 rounded shadow-md w-screen mx-36"> {/* White box with shadow */}  
        <div className="bg-blue-900 text-white p-4 rounded-t-lg"> {/* Blue header */}  
          <h2 className="text-1xl font-bold">HR Career Portal</h2>  
        </div>  
        <form  className="p-4"> {/* Form with padding */}  
          <div className="mb-4">  
            <label htmlFor="email" className="block  text-gray-700 font-bold mb-2">  
              Enter your email  
            </label>  
            <input  
              type="email"  
              id="email"  
              value={email}
              placeholder='your mail'  
              onChange={(e) => setEmail(e.target.value)}  
              className="w-72 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"  
              required  
            />  
          </div>  
          <div className="mb-4">  
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">  
              Password  
            </label>  
            <input  
              type="password"  
              id="password"  
              value={password}
              placeholder='password'  
              onChange={(e) => setPassword(e.target.value)}  
              className="w-72 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"  
              required  
            />  
          </div>  
          <div className="mb-4">  
            <button  
               
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  
            >  
              Log In  
            </button>  
            
          </div>  
        </form>  
      </div>  
    </div>  
    </div>
  );  
};  

export default HRLogin;