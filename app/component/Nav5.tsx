const JoinOurTeam = () => {  
    return (  
      <section className="bg-gray-200 p-16 flex gap-4 flex-col items-center md:flex md:flex-row justify-between"  > {/* Gray background, padding, flexbox for alignment */}  
        <div>  
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Join Our Team</h2> {/* Blue heading */}  
          <p className=" text-gray-700 mb-4">  
            If you're eager to join our team but haven't discovered an opening in your desired area, we'd love to keep you informed when a suitable position becomes available.  
          </p>  
          <p className=" text-gray-700">  
            Simply submit your CV, along with your interests and skills, and we'll reach out to you as soon as possible.  
          </p>  
        </div>  
        <button  
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"  
        >  
          Join Our Talent Community  
        </button>  
      </section>  
    );  
  };  
  
  export default JoinOurTeam;