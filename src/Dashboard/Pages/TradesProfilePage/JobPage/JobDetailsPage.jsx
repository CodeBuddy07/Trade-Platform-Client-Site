import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostTimeAgo from './PostTimeAgo'
import { FaLocationDot, FaBriefcase, FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const JobDetailsPage = ({ selectedJobId }) => {
  console.log(selectedJobId);
  const jobs = [
    { 
      id: 1, 
      title: 'Fix Misaligned TV Aerial', 
      location: 'Woodford Green IG8', 
      distance: 39, 
      postCode: 'IG8', 
      about: 'My aerial has been moved by the high winds we have been having and it is not giving good picture.', 
      jobCategory: 'Aerial & Satellite Dish', 
      customerName: 'John Doe', 
      phone: '(020) 555-1234', 
      email: 'john.doe@email.com', 
      postDate: '30th Jan 25 07:25',
      postDetails: [
        { question: "I am a...", answer: "Homeowner" },
        { question: "What type of property is the quote for?", answer: "House" },
        { question: "I require quotes for...", answer: "Labour & Materials" },
        { question: "Are you ready to hire a tradesperson?", answer: "Depends on the price" },
        { question: "When do you need the job doing?", answer: "Sometime this week" },
        { question: "How would you prefer to be contacted by local trades?", answer: "By email" },
        { question: "When would you prefer to be contacted?", answer: "In the afternoon" },
        { question: "How would you rate the difficulty of the job?", answer: "Handyperson" },
        { question: "Have you looked for a tradesperson elsewhere?", answer: "Yes" }
      ]
    },
    { 
      id: 2, 
      title: 'Repair Faulty Kitchen Light', 
      location: 'Manchester M2', 
      distance: 20, 
      postCode: 'M2', 
      about: 'The light fixture in my kitchen has stopped working, possibly a wiring issue.', 
      jobCategory: 'Electrical', 
      customerName: 'Jane Smith', 
      phone: '(0161) 555-5678', 
      email: 'jane.smith@email.com', 
      postDate: '30th Jan 25 08:00',
      postDetails: [
        { question: "I am a...", answer: "Tenant" },
        { question: "What type of property is the quote for?", answer: "Bungalow" },
        { question: "I require quotes for...", answer: "Labour Only" },
        { question: "Are you ready to hire a tradesperson?", answer: "Yes, once I've compared quotes" },
        { question: "When do you need the job doing?", answer: "Sometime this week" },
        { question: "How would you prefer to be contacted by local trades?", answer: "By email" },
        { question: "Do you have permission from the property owner to carry out the work?", answer: "Yes" },
        { question: "Have you looked for a tradesperson elsewhere?", answer: "No" }
      ]
    },
    { 
      id: 3, 
      title: 'Install Garden Fencing', 
      location: 'Bristol BS3', 
      distance: 50, 
      postCode: 'BS3', 
      about: 'I need a new fence installed in my backyard for extra privacy and security.', 
      jobCategory: 'Gardening & Landscaping', 
      customerName: 'Alex Brown', 
      phone: '(0117) 555-3456', 
      email: 'alex.brown@email.com', 
      postDate: '29th Jan 25 18:45',
      postDetails: [
        { question: "I am a...", answer: "Homeowner" },
        { question: "What type of property is the quote for?", answer: "House" },
        { question: "I require quotes for...", answer: "Labour & Materials" },
        { question: "Are you ready to hire a tradesperson?", answer: "Depends on the price" },
        { question: "When do you need the job doing?", answer: "Sometime this week" },
        { question: "How would you prefer to be contacted by local trades?", answer: "By phone" },
        { question: "When would you prefer to be contacted?", answer: "Morning" },
        { question: "How would you rate the difficulty of the job?", answer: "Average" },
        { question: "Have you looked for a tradesperson elsewhere?", answer: "Yes" }
      ]
    },
    { 
      id: 4, 
      title: 'Fix Leaky Roof', 
      location: 'Leeds LS6', 
      distance: 45, 
      postCode: 'LS6', 
      about: 'There is a leak in my roof that needs urgent repair before it gets worse during the rain.', 
      jobCategory: 'Roofing', 
      customerName: 'Sarah Green', 
      phone: '(0113) 555-6789', 
      email: 'sarah.green@email.com', 
      postDate: '28th Jan 25 15:30',
      postDetails: [
        { question: "I am a...", answer: "Homeowner" },
        { question: "What type of property is the quote for?", answer: "House" },
        { question: "I require quotes for...", answer: "Labour & Materials" },
        { question: "Are you ready to hire a tradesperson?", answer: "Yes" },
        { question: "When do you need the job doing?", answer: "Urgently" },
        { question: "How would you prefer to be contacted by local trades?", answer: "By phone" },
        { question: "When would you prefer to be contacted?", answer: "Morning" },
        { question: "How would you rate the difficulty of the job?", answer: "High" },
        { question: "Have you looked for a tradesperson elsewhere?", answer: "No" }
      ]
    },
    { 
      id: 5, 
      title: 'Install New Shower Unit', 
      location: 'Liverpool L1', 
      distance: 40, 
      postCode: 'L1', 
      about: 'I would like to replace my old shower unit with a new one for better water pressure and efficiency.', 
      jobCategory: 'Plumbing', 
      customerName: 'David White', 
      phone: '(0151) 555-2345', 
      email: 'david.white@email.com', 
      postDate: '27th Jan 25 10:00',
      postDetails: [
        { question: "I am a...", answer: "Homeowner" },
        { question: "What type of property is the quote for?", answer: "House" },
        { question: "I require quotes for...", answer: "Labour Only" },
        { question: "Are you ready to hire a tradesperson?", answer: "Yes, once I've compared quotes" },
        { question: "When do you need the job doing?", answer: "Sometime this week" },
        { question: "How would you prefer to be contacted by local trades?", answer: "By email" },
        { question: "When would you prefer to be contacted?", answer: "Afternoon" },
        { question: "How would you rate the difficulty of the job?", answer: "Medium" },
        { question: "Have you looked for a tradesperson elsewhere?", answer: "Yes" }
      ]
    }
  ];
  


  const { id } = useParams();
  const [job, setJob] = useState(null);




  // time from post date
  const postDateString = `${job?.postDate}`.replace(/(\d+)(st|nd|rd|th)/, "$1");
  const formattedPostDate = new Date(postDateString);


  useEffect(() => {
    const jobId = Number(id);
    const selectedId = Number(selectedJobId);
    console.log(jobId, selectedId);

    if (jobs.find(job => job.id === jobId) || jobs.find(job => job.id === selectedId)) {

      // id from params
      if (jobId) {
        const findByJobId = jobs.find(job => job.id === jobId);
        setJob(findByJobId)
      }
      // id from props
      else {
        const findBySelectedId = jobs.find(job => job.id === selectedId);
        setJob(findBySelectedId)

      }
    }
  }, [id, selectedJobId]);


console.log(job?.postDate);

  return (
    <div>
      {
        job ? <div className="p-6 bg-white rounded-xl shadow-lg border max-w-2xl mx-auto transition-all duration-300 hover:shadow-xl">
        {/* Header Section */}
        <div className="space-y-1">
          <h2 className="text-2xl font-extrabold text-gray-900">{job?.title}</h2>
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <FaUser className="text-blue-500" />
            <span>Posted by {job?.customerName}, {PostTimeAgo(formattedPostDate)}</span>
          </p>
        </div>
      
        <hr className="border-gray-200 my-4" />
      
        {/* Job Details */}
        <div className="space-y-4 text-gray-700">
          {/* Location */}
          <div>
            <p className="text-gray-500 font-semibold">Job Location</p>
            <p className="flex items-center gap-2 text-lg font-medium">
              <FaLocationDot className="text-blue-500" />
              <span>{job?.location}, {job?.distance} mins from {job?.postCode}</span>
            </p>
          </div>
      
          {/* Job Description */}
          <div>
            <p className="text-gray-500 font-semibold">Job Description</p>
            <p className="text-gray-800 leading-relaxed">{job?.about}</p>
          </div>
      
          {/* Job Category */}
          <div>
            <p className="text-gray-500 font-semibold">Job Category</p>
            <p className="flex items-center gap-2 text-lg font-medium">
              <FaBriefcase className="text-blue-500" />
              <span>{job?.jobCategory}</span>
            </p>
          </div>
      
          {/* Contact Details */}
          <div>
            <p className="text-gray-500 font-semibold">Contact Details</p>
            <div className="space-y-1 text-lg">
              <p className="flex items-center gap-2">
                <FaPhone className="text-blue-500" />
                <span>{job?.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-blue-500" />
                <span>{job?.email}</span>
              </p>
            </div>
          </div>
      
          {/* Questions & Answers */}
          <div>
            <p className="text-gray-500 font-semibold">Customer responses</p>
            <div className="space-y-1 bg-gray-300 p-4 rounded-md">
              {job?.postDetails?.map((detail, index) => (
                <div key={index} className="border-b pl-1 border-gray-400   rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
                  <span className="text-sm text-gray-600">{detail.question}</span>
                  <span className="text-lg font-medium text-gray-800">ans: {detail.answer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      
        {/* Apply Button */}
        <div className="mt-6">
          <button className="w-40 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
            Purchase
          </button>
        </div>
      </div>
      :
      <div>
       <h1 className="text-3xl font-bold">Job Details</h1>
       <p> Please select a job to view details</p>
      </div>
      }
    </div>
  
  
  );
};

export default JobDetailsPage;