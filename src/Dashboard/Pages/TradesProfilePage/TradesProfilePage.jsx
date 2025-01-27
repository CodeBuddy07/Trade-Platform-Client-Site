import React from 'react';
import ProfileDetails from './TradesProfilePage/Components/ProfileDetails';
import ProfileHeader from './TradesProfilePage/Components/ProfileHeader';
import { SlCloudUpload } from 'react-icons/sl';

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
                <div className='p-10 px-32 space-y-10  rounded-md shadow-md bg-white'>
                    <div className='border flex cursor-pointer hover:bg-gray-100 transition-all justify-center  items-center border-dashed border-gray-600 h-40'>
                        <div className='flex flex-col items-center gap-2'>
                            <SlCloudUpload size={30}></SlCloudUpload>
                            <h4>Upload image</h4>
                        </div>
                    </div>
                    <hr className='border-gray-300' />


                    <div className='grid grid-cols-4'>
                        <img className='max-h-40 border' src="https://cdn.pixabay.com/photo/2022/10/23/02/26/hotel-7540353_640.jpg" alt="" />
                        <img className='max-h-40 border' src="https://cdn.pixabay.com/photo/2022/10/23/02/26/hotel-7540353_640.jpg" alt="" />
                        <img className='max-h-40 border' src="https://cdn.pixabay.com/photo/2022/10/23/02/26/hotel-7540353_640.jpg" alt="" />
                        <img className='max-h-40 border' src="https://cdn.pixabay.com/photo/2022/10/23/02/26/hotel-7540353_640.jpg" alt="" />
                        <img className='max-h-40 border' src="https://cdn.pixabay.com/photo/2022/10/23/02/26/hotel-7540353_640.jpg" alt="" />
                        <img className='max-h-40 border' src="https://cdn.pixabay.com/photo/2022/10/23/02/26/hotel-7540353_640.jpg" alt="" />
                        <img className='max-h-40 border' src="https://cdn.pixabay.com/photo/2022/10/23/02/26/hotel-7540353_640.jpg" alt="" />

                    </div>


                    <div className="flex justify-center gap-6 flex-col items-center min-h-screen">
                        <iframe
                            width={600}
                            height={600}
                            src=" https://lottie.host/embed/c3d481de-d25f-432d-b2ec-6c0ee936203d/Jvd8p61WTp.lottie"></iframe>
                        <h4 className="text-3xl">Working on this Page</h4>

                    </div>
                   

                </div>
            </div>


        </div>
    );
};

export default TradesProfilePage;