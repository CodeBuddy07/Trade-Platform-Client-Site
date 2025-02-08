import { useState, useEffect } from "react";
import { FaCamera, FaTimes } from "react-icons/fa";
import TradeManageCard from "./TradeManageCard";
import { toast } from "sonner";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { IoCloudUploadOutline } from "react-icons/io5";

const ManageTrades = () => {
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [trades, setTrades] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [tradeImage, setTradeImage] = useState(null);
  const axiosSecure = useAxiosSecure();

  const getTrades = async () => {
    try {
      const res = await axiosSecure.get("/trades");
      setTrades(res.data.trades);
      console.log(trades);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    }
  };

  useEffect(() => {
    const storedSkills = JSON.parse(localStorage.getItem("skills"));
    if (storedSkills) {
      setSkills(storedSkills);
    }

    getTrades();
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
    setTradeImage(file);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name.value;
    const description = e.target.description.value;

    if (!name || !description || skills.length == 0 || !tradeImage) {
      toast.error("Fill all the fields.");
      setLoading(false);
      return;
    }

    const formDataToSend = new FormData();

    const formData = {
      name,
      description,
      skills,
    };

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    formDataToSend.append("tradeImage", tradeImage);

    try {
      const res = await axiosSecure.post("/trades", formDataToSend);
      getTrades();
      toast.success(res.data.message);
      setLoading(false);
      e.target.reset();
      setSkills([]);
      setImagePreview();
      setTradeImage(null);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="bg-white p-10">
        <h1 className="my-10 text-3xl font-bold px-4">Add New Trade</h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="space-y-6 grid grid-cols-12 gap-10"
        >
          <div className="lg:col-span-8 col-span-12 lg:border-r border-gray-300 lg:pr-10">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Trade Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
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
                    <span
                      key={index}
                      className="flex items-center bg-gray-200 px-3 py-1 rounded-md text-sm"
                    >
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
                name="description"
                className="textarea  focus:outline-none h-24 w-full border border-gray-300 bg-gray-50 p-2 textarea-md  "
              ></textarea>
            </div>
            <h5>Trade Image</h5>
            <div className="relative group border w-80 h-48 ">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile"
                  className="w-80 h-48 object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-full flex justify-center items-center">
                  <IoCloudUploadOutline size={30} />
                </div>
              )}

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
              disabled={loading}
              className="px-10 py-3 text-white bg-pink-500 hover:bg-pink-600 rounded-lg shadow-md transition-all duration-200 mt-6"
            >
              {loading ? "Saving Changes..." : "Save Changes"}
            </button>
          </div>

          <div className="md:col-span-4 hidden lg:block space-y-4 col-span-12">
            <p className="text-lg font-semibold">Added Skills</p>
            <hr />
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center bg-gray-200 px-3 py-1 rounded-md text-sm"
                >
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
      <h1 className="my-10 text-3xl font-bold px-4">
        All <span className="text-green-600">Active</span> Trades
      </h1>
      <TradeManageCard trades={trades} getTrades={getTrades} />
    </div>
  );
};

export default ManageTrades;
