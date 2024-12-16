import Link from 'next/link';  

const CareerOpportunities = () => {  
  return (  
    <section className="bg-blue-900 text-white p-8 text-center "> {/* Dark blue background, white text, padding */}  
      <h2 className="text-4xl font-bold mb-4">Career Opportunities</h2> {/* Large, bold heading */}  
      <p className="text-lg">  
        Explore our open positions at one of our industry-leading subsidiaries.  
      </p>  
      <Link href="/careers"> {/* Replace /careers with your actual career page route */}  
       
      </Link>  
    </section>  
  );  
};  

export default CareerOpportunities;