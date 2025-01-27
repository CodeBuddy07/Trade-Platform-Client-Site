
const ProfileHeader = () => {
    return (
        <div className='flex p-10 shadow-md rounded-md bg-white items-center gap-10 '>
                <div className='w-52 h-52' >
                    <img className='w-full h-full object-cover rounded-full' src="https://img.freepik.com/premium-photo/casual-young-man-shirt_146377-2992.jpg?ga=GA1.1.1916364276.1721111746&semt=ais_hybrid" alt="" />
                </div>
                <div className='flex-1 space-y-2'>
                    <div>
                        <h5 className='text-2xl font-semibold'>Profile complete</h5>
                        <div className='flex items-center gap-1'>
                            <div className='w-full h-1 bg-blue-600'></div>
                            <p>100%</p>
                        </div>
                    </div>
                    <div>
                        <h6 className='font-semibold'>Bio</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis!</p>
                    </div>
                    <button
                        type="submit"
                        className="px-10 py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-md transition-all duration-200"
                    >
                        View as public
                    </button>
                </div>
            </div>
    );
};

export default ProfileHeader;