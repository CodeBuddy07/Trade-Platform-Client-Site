import { useState, useEffect } from "react";
import { FaCamera, FaTimes } from "react-icons/fa";
import TradeManageCard from "./TradeManageCard";


const trades = [
    {
        title: "Electrician",
        img: 'https://images.pexels.com/photos/8486927/pexels-photo-8486927.jpeg?auto=compress&cs=tinysrgb&w=600',
        description:
            "Ensure your home’s electrical systems are safe and efficient with our expert electricians. From installations to repairs, we handle it all with precision and care.",
        count: "28,765 electricians",
        location: "in the UK",
    },
    {
        title: "Plumber",
        img: "https://images.pexels.com/photos/8486927/pexels-photo-8486927.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Fix leaks and improve your plumbing with our skilled plumbers. Whether it’s installations or emergency repairs, we’ve got you covered.",
        count: "19,432 plumbers",
        location: "in the UK",
    },
    {
        title: "Joiner",
        img: "https://images.pexels.com/photos/8486927/pexels-photo-8486927.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Craft beautiful and functional furniture or repair woodwork with the expertise of our Joiners. From cabinets to custom designs.",
        count: "10,200 Joiners",
        location: "in the UK",
    },
    {
        title: "Joiner",
        img: "https://images.pexels.com/photos/8486927/pexels-photo-8486927.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Craft beautiful and functional furniture or repair woodwork with the expertise of our Joiners. From cabinets to custom designs.",
        count: "10,200 Joiners",
        location: "in the UK",
    },
    {
        title: "Joiner",
        img: "https://images.pexels.com/photos/8486927/pexels-photo-8486927.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Craft beautiful and functional furniture or repair woodwork with the expertise of our Joiners. From cabinets to custom designs.",
        count: "10,200 Joiners",
        location: "in the UK",
    },
    {
        title: "Joiner",
        img: "https://images.pexels.com/photos/8486927/pexels-photo-8486927.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Craft beautiful and functional furniture or repair woodwork with the expertise of our Joiners. From cabinets to custom designs.",
        count: "10,200 Joiners",
        location: "in the UK",
    },
    {
        title: "Joiner",
        img: "https://images.pexels.com/photos/8486927/pexels-photo-8486927.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Craft beautiful and functional furniture or repair woodwork with the expertise of our Joiners. From cabinets to custom designs.",
        count: "10,200 Joiners",
        location: "in the UK",
    },
    // Add more trades here as needed...
];


const ManageTrades = () => {
    const [imagePreview, setImagePreview] = useState("");
    const [skills, setSkills] = useState([]);
    const [skillInput, setSkillInput] = useState("");

    useEffect(() => {
        const storedSkills = JSON.parse(localStorage.getItem("skills"));
        if (storedSkills) {
            setSkills(storedSkills);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("skills", JSON.stringify(skills));
    }, [skills]);

    const handleAddSkill = () => {
        if (skillInput.trim() !== "" && !skills.includes(skillInput)) {
            setSkills([...skills, skillInput]);
            setSkillInput("");
        }
    };

    const handleRemoveSkill = (index) => {
        const newSkills = skills.filter((_, i) => i !== index);
        setSkills(newSkills);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAddSkill();
        }
    };

    return (
        <div className="">
            <div className="bg-white p-10">
                <h1 className="my-10 text-3xl font-bold px-4">Add New Trade</h1>
                <form className="space-y-6 grid grid-cols-12 gap-10">
                    <div className="lg:col-span-8 col-span-12 lg:border-r border-gray-300 lg:pr-10">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Trade Title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter trade title"
                                    className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Skills <span className="text-red-500">*</span>
                                </label>
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        value={skillInput}
                                        onChange={(e) => setSkillInput(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Add skills"
                                        className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddSkill}
                                        className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                            <div className="md:col-span-4 lg:hidden block space-y-4 col-span-12">
                                <p className="text-lg font-semibold">Added Skills</p>
                                <hr />
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <span key={index} className="flex items-center bg-gray-200 px-3 py-1 rounded-md text-sm">
                                            {skill}
                                            <FaTimes
                                                className="ml-2 text-red-500 cursor-pointer"
                                                onClick={() => handleRemoveSkill(index)}
                                            />
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className=" flex-1">
                            <h6 className="text-start mt-4">Description</h6>
                            <textarea
                                placeholder="Add description"
                                className="textarea  focus:outline-none h-24 w-full border border-gray-300 bg-gray-50 p-2 textarea-md  "></textarea>

                        </div>
                        <h5>Trade Image</h5>
                        <div className="relative group border w-80 h-48 ">

                            <img
                                src={imagePreview || "https://picsum.photos/200"}
                                alt="Profile"
                                className="w-80 h-48 object-cover rounded-md"
                            />
                            <label
                                htmlFor="imageInput"
                                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity cursor-pointer"
                            >
                                <FaCamera className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            </label>
                            <input
                                type="file"
                                id="imageInput"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                        </div>

                        <button
                            type="submit"
                            className="px-10 py-3 text-white bg-pink-500 hover:bg-pink-600 rounded-lg shadow-md transition-all duration-200 mt-6"
                        >
                            Save changes
                        </button>
                    </div>

                    <div className="md:col-span-4 hidden lg:block space-y-4 col-span-12">
                        <p className="text-lg font-semibold">Added Skills</p>
                        <hr />
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span key={index} className="flex items-center bg-gray-200 px-3 py-1 rounded-md text-sm">
                                    {skill}
                                    <FaTimes
                                        className="ml-2 text-red-500 cursor-pointer"
                                        onClick={() => handleRemoveSkill(index)}
                                    />
                                </span>
                            ))}
                        </div>
                    </div>
                </form>
            </div>
            <h1 className="my-10 text-3xl font-bold px-4">All <span className="text-green-600">Active</span> Trades</h1>
            <TradeManageCard trades={trades} />
        </div>
    );
};

export default ManageTrades;
