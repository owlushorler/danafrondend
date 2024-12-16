const JobPostings = () => {  
    const jobData = [  
      { title: 'IT Officer - Full Stack Developer', company: 'Dana Group of Companies', location: 'Lagos', link: '#' },  
      { title: 'Chief Security Officer', company: 'Dana Group of Companies', location: 'Lagos', link: '#' },  
      { title: 'Maintenance Officer', company: 'Dana Plast Limited', location: 'Lagos', link: '#' },  
      { title: 'Production Engineer', company: 'Dana Plast Limited', location: 'Lagos', link: '#' },  
      // Add more job postings here...  
    ];  
  
    return (  
      <div className="overflow-x-auto text-xs mx-16 my-10"> {/* Add horizontal scroll if needed */}  
        <table className="min-w-full border-collapse"> {/* Table with minimum width */}  
          <thead>  
            <tr className="bg-gray-100"> {/* Light gray header row */}  
              <th className="px-6 py-4 text-left">Job Title</th>  
              <th className="px-6 py-4 text-left">Company</th>  
              <th className="px-6 py-4 text-left">Location</th>  
              <th className="px-6 py-4"></th> {/* Empty column for button */}  
            </tr>  
          </thead>  
          <tbody>  
            {jobData.map((job) => (  
              <tr key={job.title} className="border-b border-gray-200"> {/* Border between rows */}  
                <td className="px-6 py-4">{job.title}</td>  
                <td className="px-6 py-4">{job.company}</td>  
                <td className="px-6 py-4">{job.location}</td>  
                <td className="px-6 py-4">  
                  <a href={job.link} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">  
                    View / Apply  
                  </a>  
                </td>  
              </tr>  
            ))}  
          </tbody>  
        </table>  
      </div>  
    );  
  };  
  
  export default JobPostings;