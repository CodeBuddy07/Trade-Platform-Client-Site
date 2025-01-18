import image from './../files/joinAsTrader.jpg'

const JoinAsTrades = () => {
    return (
        <div className='md:px-20 py-20 text-black  p-5'>

            <div className='flex flex-col md:flex-row rounded-md bg-[rgba(255,255,255,0.7)] md:p-20 p-5 gap-20 justify-center items-center'>
                <img className='w-[400px] object-cover rounded-md h-[400px]' src={image} alt="" />
                <div className='space-y-8'>
                    <h3 className='text-3xl font-bold'>Looking for More Work?</h3>
                    <p>Expand your business with MyBuilder. Sign up for free and start receiving job opportunities that match your expertise. Whether you're looking for large projects or smaller tasks, you'll find the right leads to grow your business.</p>

                    <button className=' btn border-none text-white hover:underline text-xl hover:shadow-md hover:shadow-green-700  px-10 bg-gradient-to-b rounded-md from-green-400 to-green-900'>Join for free</button>
                
            </div>

        </div>

        </div >
    );
};

export default JoinAsTrades;