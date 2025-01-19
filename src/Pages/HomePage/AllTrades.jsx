import plumber from './../../files/plumber.jpg'


const AllTrades = () => {
    return (
        <div className='flex  flex-col md:px-10 lg:p-20 p-5 py-20 justify-center items-center  text-gray-700'>
            <div className=''>
                <h1 className='text-5xl  font-bold'>All trades</h1>
                <hr className='border-2 border-pink-600 mt-2 w-3/12' />
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto p-5 md:p-10 lg:p-20'>
                <div className=' cardBg border bg-white border-gray-300 shadow-2xl rounded-md  '>
                    <div className=''>
                        <img className='rounded-md' src={plumber} alt="" />
                        <div className='p-4 space-y-2'>
                            <h4 className='text-2xl'>Electrician</h4>
                            <hr className='w-1/12 border-2' />
                            <p>Ensure your home’s electrical systems are safe and efficient with our expert electricians. From installations to repairs, we handle it all with precision and care.</p>
                            <hr className='' />
                            <div>
                                <p>28,765 electricians</p>
                                <p>in the UK</p>
                            </div>


                        </div>
                    </div>
                    <div className='text-center mb-5'>
                        <button className='hover:shadow-md hover:shadow-green-600 mt-10 btn border-none text-white hover:underline text-xl  px-10 bg-gradient-to-b rounded-md from-green-400 to-green-900'>View details</button>
                    </div>

                </div>
                <div className='cardBg border hover:shadow-2xl bg-white border-gray-300  rounded-md  '>
                    <div className=''> 
                        <img className='rounded-md ' src={plumber} alt="" />
                        <div className='p-4 space-y-2'>
                            <h4 className='text-2xl'>Electrician</h4>
                            <hr className='w-1/12 border-2' />
                            <p>Ensure your home’s electrical systems are safe and efficient with our expert electricians. From installations to repairs, we handle it all with precision and care.</p>
                            <hr className='' />
                            <div>
                                <p>28,765 electricians</p>
                                <p>in the UK</p>
                            </div>


                        </div>
                    </div>
                    <div className='text-center mb-5'>
                        <button className='hover:shadow-md hover:shadow-green-600 mt-10 btn border-none text-white hover:underline text-xl  px-10 bg-gradient-to-b rounded-md from-green-400 to-green-900'>View details</button>
                    </div>

                </div>
                <div className='cardBg border bg-white border-gray-300 shadow-2xl rounded-md  '>
                    <div className=''>
                        <img className='rounded-md' src={plumber} alt="" />
                        <div className='p-4 space-y-2'>
                            <h4 className='text-2xl'>Electrician</h4>
                            <hr className='w-1/12 border-2' />
                            <p>Ensure your home’s electrical systems are safe and efficient with our expert electricians. From installations to repairs, we handle it all with precision and care.</p>
                            <hr className='' />
                            <div>
                                <p>28,765 electricians</p>
                                <p>in the UK</p>
                            </div>


                        </div>
                    </div>
                    <div className='text-center mb-5'>
                        <button className='hover:shadow-md hover:shadow-green-600 mt-10 btn border-none text-white hover:underline text-xl  px-10 bg-gradient-to-b rounded-md from-green-400 to-green-900'>View details</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllTrades;