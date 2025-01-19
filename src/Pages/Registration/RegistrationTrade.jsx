import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";


const RegistrationTrade = () => {
    const [imageSelection, setImageSelection] = useState(false)
    const [showCompanyInput, setShowCompanyInput] = useState(false)
    console.log(showCompanyInput);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        console.log(file);
        const imagePreview = document.getElementById('fileShowField');

        if (file) {
            // Preview the selected image
            const fileReader = new FileReader();
            fileReader.onload = function (e) {
                imagePreview.src = e.target.result; // Display the image preview
            };
            fileReader.readAsDataURL(file); // Read the file to generate a data URL

            // Send the file via XMLHttpRequest (simulation)
            uploadFile(file);

        }

        // Function to simulate file upload with XMLHttpRequest
        function uploadFile(file) {
            setImageSelection(true)
            const xhr = new XMLHttpRequest();
            const formData = new FormData();

            // Prepare the request
            xhr.open('POST', '/upload', true); // Replace '/upload' with your actual server endpoint
            xhr.onload = function () {
                if (xhr.status === 200) {
                    console.log('File uploaded successfully');
                    // You can handle the server response here, e.g., show success message
                } else {
                    console.error('Error uploading the file');
                }
            };

            // Append the file to FormData
            formData.append('image', file);
            console.log(formData);

            // Send the request with the file
            xhr.send(formData);
        }




        console.log(imagePreview);

    };

    const handleCompany = (e) => {
        setShowCompanyInput(!showCompanyInput)
    }



    return (
        <div>
            <div className="flex my-20 items-center rounded-md justify-center min-h-screen ">
                <form className="w-full max-w-5xl  space-y-10 bg-gradient-to-t   from-gray-300 to-gray-200 shadow-lg rounded-md">


                    <div className="h-[200px] py-4 relative rounded-tr-md rounded-tl-md bg-gradient-to-b from-green-800 to-green-400">
                        <h1 className="md:text-3xl text-2xl text-white font-bold text-center ">
                            Create a Trade Account
                        </h1>
                        <div className="absolute w-full   justify-center items-center md:-bottom-5 -bottom-10">


                            <div className="flex items-center  justify-center">
                                <div className="relative group">
                                    {/* Image display */}

                                    <div>
                                        <img
                                            src=''
                                            id="fileShowField"
                                            className="w-36 h-36 border-4 border-white bg-gray-300 rounded-full object-cover"
                                        />
                                        {
                                            !imageSelection && <p className="absolute text-center bottom-[50%] translate-y-[50%] left-[50%] -translate-x-[50%]">Upload Photo</p>
                                        }
                                    </div>

                                    {/* Overlay and Camera Icon */}
                                    <div className="absolute inset-0   flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-full">
                                        <label
                                            htmlFor="imageInput"
                                            className="flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <FaCamera className="text-white text-2xl" />
                                        </label>
                                    </div>

                                    {/* Hidden file input */}
                                    <input
                                        type="file"
                                        id="imageInput"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                </div>
                            </div>



                        </div>
                    </div>


                    <div className="p-10 space-y-10">


                        {/* Name */}
                        <div className="flex w-full items-center flex-col md:flex-row md:space-y-0 space-y-6 md:space-x-4">
                            <div className="flex-1 w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="First"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="flex-1 w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Last"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                            </div>
                        </div>

                        {/* email, phone */}
                        <div className="flex w-full items-center flex-col md:flex-row md:space-y-0 space-y-6 md:space-x-4">
                            <div className="flex-1 w-full">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your email"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="flex-1 w-full">
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="+44 ### ### ####"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                            </div>
                        </div>











                        {/* Select options */}
                        <div className="flex w-full items-center flex-col md:flex-row md:space-y-0 space-y-6 md:space-x-4">
                            <div className="flex-1 w-full w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Trade/Profession
                                    <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-indigo-500">
                                    <option value="">Select trade</option>
                                    <option value="Electrician">Electrician</option>
                                    <option value="Plumber">Plumber</option>
                                    <option value="Heating Engineer">Heating Engineer</option>
                                    <option value="Plasterer">Plasterer</option>
                                    <option value="Joiner">Joiner</option>
                                </select>
                            </div>
                            <div className="flex-1 w-full">
                                <label htmlFor="certificateName" className="block mb-2 text-sm font-medium text-gray-700">
                                    Certifications/Licenses <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="certificateName"
                                    name="certificateName"
                                    placeholder="Certificate name/License number"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                            </div>
                        </div>
                        {/* experience */}

                        <div className="flex w-full items-center flex-col md:flex-row md:space-y-0 space-y-6 md:space-x-4">
                            <div className="flex-1 w-full">
                                <label htmlFor="experience" className="block mb-2 text-sm font-medium text-gray-700">
                                    Years of Experience <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    name="experience"
                                    id="experience"
                                    placeholder="Years of experience"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="flex-1 w-full">

                            </div>
                        </div>


                        {/* Gender */}
                        {/* <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Gender <span className="text-red-500">*</span>
                            </label>
                            <div className="flex w-full items-center flex-col md:flex-row md:space-y-0 space-y-6 md:space-x-4">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        className="w-4 h-4 text-indigo-500 border-gray-300 focus:ring-indigo-500"
                                    />
                                    <span>Male</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        className="w-4 h-4 text-indigo-500 border-gray-300 focus:ring-indigo-500"
                                    />
                                    <span>Female</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="other"
                                        className="w-4 h-4 text-indigo-500 border-gray-300 focus:ring-indigo-500"
                                    />
                                    <span>Other</span>
                                </label>
                            </div>
                        </div> */}


                        <div className="bg-gray-50 p-4 rounded-md space-y-6">
                            <div className="flex items-center  gap-10">

                                <div className="flex items-center gap-4">
                                    <input type="checkbox"
                                        onClick={(e) => handleCompany(e.target.value)}
                                        className="checkbox bg-white" /><p>Company-based</p>
                                </div>
                            </div>
                            {/* company based */}
                            <div className={`${showCompanyInput ? 'block' : 'hidden'} space-y-6`}>
                                <div className="flex w-full items-center flex-col md:flex-row md:space-y-0 space-y-6 md:space-x-4 ">
                                    <div className="flex-1 w-full">
                                        <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-700">
                                            Company Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            id="companyName"
                                            placeholder="Company Name"
                                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div className="flex-1 w-full">
                                        <label htmlFor="Insurance Information" className="block mb-2 text-sm font-medium text-gray-700">
                                            Proof of Insurance (Upload photo) <span className="text-xs">(.jpg,.jpeg,.png)</span> <span className="text-red-500">*</span>
                                        </label>
                                        <label className="form-control w-full ">

                                            <input type="file" accept=".jpg,.jpeg,.png" className="file-input file-input-bordered w-full " />

                                        </label>
                                    </div>
                                </div>
                                {/*employer */}
                                <div>
                                    <div className="flex w-full items-center flex-col md:flex-row md:space-y-0 space-y-6 md:space-x-4">
                                        <div className="flex-1 w-full">
                                            <label htmlFor="employer" className="block mb-2 text-sm font-medium text-gray-700">
                                                Employers <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                name="employer"
                                                id="employer"
                                                placeholder="employers Count"
                                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                            />
                                        </div>
                                        <div className="flex-1 w-full">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>









                        {/* password */}

                        <div className="flex w-full items-center flex-col md:flex-row md:space-y-0 space-y-6 md:space-x-4">
                            <div className="flex-1 w-full">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                                    Set password <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                            </div>
                            <div className="flex-1 w-full">
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-700">
                                    Confirm password <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="confirm-password"
                                    name="confirm-password"
                                    placeholder="Confirm password"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                />
                            </div>
                        </div>

                        <div className="flex  items-start gap-2">
                            <input type="checkbox" required className="checkbox bg-white "  />
                            <p>I agree to the <span className="text-pink-600">Terms of Use</span> and <span className="text-pink-600">Privacy Policy.</span></p>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center items-center">
                            <button
                                type="submit"
                                className=" px-14 border-none py-2 text-white text-xl rounded  focus:outline-none focus:ring-1
                                hover:shadow-pink-600 bg-gradient-to-b btn from-pink-400 to-pink-900
                                "
                            >
                                Submit Form
                            </button>
                        </div>
                        <div>
                            <p className="text-center"><span className="italic">Already have account?</span> <Link
                                to={'/account/login'}
                                className="text-pink-600 hover:underline underline-offset-4">Login now</Link></p>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default RegistrationTrade;