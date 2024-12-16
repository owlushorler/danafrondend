

const Navigation = () => {  
  return (  
    <nav className="bg-white p-4 flex px-20 justify-between space-x-8"> {/* White background, padding, horizontal alignment, spacing */}  
    <div>
        <a className="text-blue-900 hover:underline">logo</a>  
    </div>
    <div className='flex gap-6' >
        <a className="text-blue-900 hover:underline">Our Subsidiaries</a>  
    
        <a className="text-blue-900 hover:underline">About Us</a>  
     
        <a className="text-blue-900 hover:underline">Contact Us</a>  
    
        <a className="text-blue-900 hover:underline">Career</a>  
        </div>
    </nav>  
  );  
};  

export default Navigation;