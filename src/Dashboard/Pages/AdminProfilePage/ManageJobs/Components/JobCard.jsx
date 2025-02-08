import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            {/* Image */}
            <img
                src="https://images.pexels.com/photos/6345317/pexels-photo-6345317.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Card Image"
                className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-5">
                <div className="flex items-center space-x-3">
                    {/* Owner Image */}
                    <img
                        src="/owner1.jpg"
                        alt="Owner"
                        className="w-10 h-10 rounded-full border border-gray-300"
                    />
                    <div>
                        <p className="text-gray-800 font-semibold">{job?.owner?.name}</p>
                        <p className="text-sm text-gray-500">{job?.date}</p>
                    </div>
                </div>

                {/* Price */}
                <p className="text-lg font-bold text-gray-900 mt-3">{job?.price} euro</p>

                {/* Contact Info */}
                <div className="mt-3 text-gray-600 text-sm">
                    <p>Email: <span className="">{job?.contact?.email}</span></p>
                    <p>Phone: <span className="">{job?.contact?.phone}</span></p>
                </div>
                <div className=" border space-y-2 mt-3">
                    <Link to={`/admin/manage_jobs/${job?.id}`}>
                        <button className="hover:underline w-full  underline-offset-4 bg-gray-500 text-white px-8 py-2 text-sm hover:scale-105">see details</button>
                    </Link>
                    <button className="w-full bg-pink-500 text-white  px-8 py-2 text-sm hover:scale-105">block this job</button>
                </div>
                
            </div>
        </div>
    );
};

export default JobCard;