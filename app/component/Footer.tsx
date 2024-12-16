

const FooterSection = () => {  
  return (  
    <footer className="bg-blue-900 text-white p-8"> {/* Dark blue background, white text */}  
      <div className="container mx-auto flex flex-col md:flex-row justify-between"> {/* Container for responsive layout */}  

        <div className="mb-8 md:mb-0"> {/* Mission statement */}  
          <p className="">  
            We're committed to improving people's lives and the environment with a diversified and sustainable business portfolio.  
          </p>  
        </div>  

        <div> {/* Connect With Us */}  
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>  
          <ul className="">  
            <li>Head Office, Dana House, 116, Oshodi-Apapa Expressway, Isolo, Lagos State</li>  
            <li>+234 (1) 280 9999</li>  
          </ul>  
        </div>  

        <div> {/* Our Subsidiaries */}  
          <h3 className="text-xl font-bold mb-4">Our Subsidiaries</h3>  
          <ul className=" list-disc list-inside"> {/* Use list-disc for bullet points */}  
            <li>Dana Airlines</li>  
            <li>Kia Nigeria</li>  
            <li>DFM Nigeria</li>  
            <li>Dana Plastics</li>  
          </ul>  
        </div>  

      </div>  
    </footer>  
  );  
};  

export default FooterSection;