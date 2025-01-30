import React from 'react';
import ProfileDetails from './TradesProfilePage/Components/ProfileDetails';
import ProfileHeader from './TradesProfilePage/Components/ProfileHeader';
import { SlCloudUpload } from 'react-icons/sl';
import JobGalleries from './TradesProfilePage/Components/JobGalleries';
import HomeAddress from './TradesProfilePage/Components/HomeAddress';
import BusinessAddress from './TradesProfilePage/Components/BusinessAddress';
import TradeAndSkills from './TradesProfilePage/Components/TradeAndSkills';

const TradesProfilePage = () => {
    return (
        <div className='space-y-10 text-gray-700'>
            <ProfileHeader></ProfileHeader>

            <div className='space-y-2'>
                <h3 className="text-2xl font-bold">Profile Details</h3>
                <div className='p-10 rounded-md shadow-md bg-white'>
                    <ProfileDetails></ProfileDetails>
                </div>
            </div>
            <div className='space-y-2'>
                <h3 className="text-2xl font-bold">Job Galleries</h3>
                <JobGalleries />
            </div>
            <div className='space-y-2'>
                <h3 className="text-2xl font-bold">Trade and Skills</h3>
                <TradeAndSkills />
            </div>

            <div className='space-y-2'>
                <h3 className="text-2xl font-bold">Home Address</h3>
                <HomeAddress />
            </div>
            <div className='space-y-2'>
                <h3 className="text-2xl font-bold">Business Address</h3>
                <BusinessAddress />
            </div>



            <div className="flex border border-black justify-center gap-6 flex-col items-center">
                <iframe
                    width={200}
                    height={200}
                    src=" https://lottie.host/embed/c3d481de-d25f-432d-b2ec-6c0ee936203d/Jvd8p61WTp.lottie"></iframe>
                <h4 className="text-3xl">Working on this Page</h4>
            </div>
        </div>
    );
};

export default TradesProfilePage;