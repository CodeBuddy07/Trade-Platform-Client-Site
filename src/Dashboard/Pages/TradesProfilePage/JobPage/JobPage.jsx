import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JobDetailsPage from './JobDetailsPage';

const JobPage = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const [selectedJobId, setSelectedJobId] = useState()
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
      
    
      


    const handleJobClick = (jobId) => {
        // console.log(jobId);
        if (window.innerWidth < 1024) {
            navigate(`/my-trade-account/jobs/details/${jobId}`);
        }
        else {
            setSelectedJobId(jobId)
        }
    };

    return (
        <div className="flex flex-wrap text-gray-700 h-screen">
            {/* Job List (Left Section) */}
            <div className="w-full lg:w-1/3 bg-gray-100 p-4 h-full scrollbar-thin overflow-y-auto">
                <div className="mb-4">
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="Search jobs..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="space-y-4">
                    {jobs
                        .filter((job) =>
                            job.title.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((job) => (
                            <div
                                key={job.id}
                                className="p-4 bg-white border rounded shadow cursor-pointer hover:bg-gray-200"
                                onClick={() => handleJobClick(job?.id)}
                            >
                                <h3 className="text-xl font-semibold">{job.title}</h3>
                                <p>{job.about}</p>
                            </div>
                        ))}
                </div>
            </div>

            {/* Job Details (Right Section) */}
            {/* This will only be visible on large devices */}
            <div className="w-full lg:w-2/3 p-4 hidden lg:block">
                <JobDetailsPage selectedJobId={selectedJobId}></JobDetailsPage>
            </div>
        </div>
    );
};

export default JobPage;
