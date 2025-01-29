import { Link, NavLink } from 'react-router-dom';
import man from './../../files/posting.png';
import trades from './../../files/trades.png';

const AccountCategory = () => {
    return (
        <div className="min-h-screen md:p-10 text-gray-700 bg-gray-50 flex items-center justify-center">
            <div className="flex md:mx-20 mx-10 w-full flex-col lg:flex-row justify-center gap-10 items-center">
                {/* Service Seekers Card */}
                <NavLink to={'service-seeker'} className="hover:shadow-2xl transition-shadow duration-300 w-full">
                    <div className="card p-6 flex flex-col md:flex-row card-side bg-white shadow-lg rounded-lg">
                        <div className='w-80'>
                            <img
                                className="w-full border-r border-gray-200"
                                src={man}
                                alt="Service Seeker"
                            />
                        </div>
                        <div className="md:pl-10 space-y-4 flex justify-center items-start flex-col">
                            <h2 className="text-3xl font-semibold text-blue-700">
                                Customer Portal
                            </h2>
                            <p className="text-lg text-gray-600">
                                Need skilled professionals for your projects? Sign up to post jobs and hire trusted tradespeople today.
                            </p>
                            <div className="flex justify-center md:justify-start w-full">
                                <button className="hover:shadow-md hover:shadow-blue-500 mt-8 px-8 py-3 btn text-white text-lg rounded-lg bg-blue-600 hover:bg-blue-700 border-none transition-transform hover:scale-105">
                                    I'm Looking for Services
                                </button>
                            </div>
                        </div>
                    </div>
                </NavLink>

                {/* Tradespeople Card */}
                <NavLink to={'trade'} className="hover:shadow-2xl transition-shadow duration-300 w-full">
                    <div className="card p-6 flex flex-col md:flex-row card-side bg-white shadow-lg rounded-lg">
                        <div className='w-80'>
                            <img
                                className="w-full  border-r border-gray-200"
                                src={trades}
                                alt="Tradespeople"
                            />
                        </div>
                        <div className="md:pl-10 space-y-4 flex justify-center items-start flex-col">
                            <h2 className="text-3xl font-semibold text-green-700">
                                Trades Person Portal
                            </h2>
                            <p className="text-lg text-gray-600">
                                Looking for work opportunities? Register as a tradesperson and gain access to hundreds of job postings daily to grow your business.
                            </p>
                            <div className="flex justify-center md:justify-start w-full">
                                <Link to={'/register-as/trades-people'}>
                                    <button className="hover:shadow-md hover:shadow-green-500 mt-8 px-8 py-3 btn text-white text-lg rounded-lg bg-green-600 hover:bg-green-700 border-none transition-transform hover:scale-105">
                                        Register as Tradesperson
                                    </button>
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
