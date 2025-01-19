import { Link, NavLink } from 'react-router-dom';
import man from './../../files/posting.png'
import trades from './../../files/trades.png'

const AccountCategory = () => {
    return (
        <div className="min-h-screen  md:p-10 text-gray-700 bg-gray-100 flex items-center justify-center">
            <div className="flex md:mx-20 mx-10 w-full   flex-col lg:flex-row justify-center gap-10 items-center">
                <NavLink to={'property-owner'} className={`hover:shadow-xl`}>
                    <div className="card p-4 flex flex-col md:flex-row card-side bg-base-100 shadow-xl">
                        <figure>
                            <img
                                className='w-[200px] h-[200px]  border-r'
                                src={man}
                                alt="Movie" />
                        </figure>
                        <div className="md:pl-10 space-y-2 flex justify-center items-start flex-col">
                            <h2 className="text-3xl font-semibold">Property Owners</h2>
                            <p className='text-xl'>Create an account to manage your job postings and Profile</p>
                            <div className='flex justify-center md:justify-start  w-full'>
                                <button className='hover:shadow-md hover:shadow-pink-600 mt-10 btn border-none text-white hover:underline text-xl  px-10 bg-gradient-to-b rounded-md from-pink-400 to-pink-900'>I'm a home owner</button>

                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to={'trade'} className={`hover:shadow-xl`}>
                    <div className="card p-4 flex flex-col md:flex-row card-side bg-base-100 shadow-xl">
                        <figure>
                            <img
                                className='w-[200px] h-[200px] border-r'
                                src={trades}
                                alt="Movie" />
                        </figure>
                        <div className="md:pl-10 space-y-2 flex justify-center items-start flex-col">
                            <h2 className="text-3xl font-semibold">Tradespeople</h2>
                            <p className='text-xl'>Unlock 1,000+ job opportunities daily and strengthen your customer network.</p>
                            <div className='flex justify-center md:justify-start  w-full'>

                                <Link to={'/register-as/trades-people'}>
                                    <button className='hover:shadow-md hover:shadow-green-600 mt-10 btn border-none text-white hover:underline text-xl  px-10 bg-gradient-to-b rounded-md from-green-400 to-green-900'>I'm a trade</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default AccountCategory;