import React, { useEffect, useState } from "react";
import ProfileDetails from "./TradesProfilePage/Components/ProfileDetails";
import ProfileHeader from "./TradesProfilePage/Components/ProfileHeader";
import JobGalleries from "./TradesProfilePage/Components/JobGalleries";
import HomeAddress from "./TradesProfilePage/Components/HomeAddress";
import BusinessAddress from "./TradesProfilePage/Components/BusinessAddress";
import TradeAndSkills from "./TradesProfilePage/Components/TradeAndSkills";
import { motion } from "framer-motion";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "sonner";

const tabList = [
  { key: "profile", label: "Profile Details" },
  { key: "gallery", label: "Job Galleries" },
  { key: "skills", label: "Trade & Skills" },
  { key: "home", label: "Home Address" },
  { key: "business", label: "Business Address" },
];

const TradesProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("get-profile")
      .then((res) => {
        setUser(res?.data?.tradePerson);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong!");
      });
  }, []);

  return (
    <div className=" mx-auto text-gray-700 p-6">
      {/* Profile Header (Always Visible) */}
      <ProfileHeader />

      {/* Modern Tabs Navigation */}
      <div className="relative flex justify-start border-b border-gray-300 gap-6 overflow-x-auto mt-6">
        {tabList.map((tab) => (
          <button
            key={tab.key}
            className={`relative px-6 py-3 transition-all duration-300 ${
              activeTab === tab.key
                ? "text-blue-600 bg-white rounded-md"
                : "text-gray-500 rounded-md bg-gray-100 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            {activeTab === tab.key && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 bottom-0 h-[3px] bg-blue-600 rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content with Smooth Transition */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className=" mt-6"
      >
        {user.profileImage?.url && activeTab === "profile" && (
          <ProfileDetails user={user} />
        )}
        {user.profileImage?.url && activeTab === "gallery" && (
          <JobGalleries user={user} />
        )}
        {user.profileImage?.url && activeTab === "skills" && (
          <TradeAndSkills user={user} />
        )}
        {user.profileImage?.url && activeTab === "home" && (
          <HomeAddress user={user} />
        )}
        {user.profileImage?.url && activeTab === "business" && (
          <BusinessAddress user={user} />
        )}
      </motion.div>

      {/* Work in Progress Animation
      <div className="flex flex-col items-center justify-center gap-6 border border-gray-300 rounded-lg p-6 mt-10">
        <iframe
          width={200}
          height={200}
          src="https://lottie.host/embed/c3d481de-d25f-432d-b2ec-6c0ee936203d/Jvd8p61WTp.lottie"
        ></iframe>
        <h4 className="text-2xl font-semibold">🚀 Working on this Page</h4>
      </div> */}
    </div>
  );
};

export default TradesProfilePage;
