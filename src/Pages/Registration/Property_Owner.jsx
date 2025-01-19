import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";


const Property_Owner = () => {

    const [selectedService, setSelectedService] = useState();
    const [passShow, setShowPassword] = useState(false)
    const [password, setPassword] = useState()
    const [validPass, setValidPass] = useState()


    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        const form = new FormData(e.target);
        const firstName = form.get('firstName');
        const lastName = form.get('lastName');
        const email = form.get('email');
        const phone = form.get('phone');
        const message = form.get('message');

        const formDetails = {
            firstName: firstName,
            lastName: lastName ? lastName : 'not given',
            email: email,
            phone: phone,
            message: message ? message : 'not given',
            selectedService: selectedService ? selectedService : 'not given',
        }
        console.log(formDetails);

    }



    const inputFilledIdentify = (id) => {

        if (id?.target.value && id?.target.checkValidity()) {
            id?.target.classList.add('bg-gray-200');
        } else {
            id?.target.classList.remove('bg-gray-200');
        }
    }


    return (
        <div>
            <form
                onSubmit={handleFormSubmit}
                className='max-w-3xl bg-white space-y-10 my-20 shadow-md shadow-gray-400 mx-auto border border-gray-300 rounded-xl p-10'>
                <h2 className='text-3xl font-extrabold text-center text-gray-600 '>Create an Account</h2>
                <div className='flex flex-col md:flex-row items-center
                 w-full justify-between gap-10
                  '>
                    <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="Fname" className='
                        pl-1 flex items-center text-sm '>First Name: <sup><IoMdStar className='text-red-700'></IoMdStar></sup> </label>
                        <input
                            onChange={(e) => inputFilledIdentify(e)}
                            type="text"
                            id='Fname'
                            name='firstName'
                            placeholder="First name"
                            className="input focus:outline-none shadow-md focus:shadow-2xl input-bordered border-gray-300  w-full" />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="" className='text-sm flex items-center'>Last Name:</label>
                        <input
                            type="text"
                            id='Lname'
                            name='lastName'
                            onChange={(e) => inputFilledIdentify(e)}
                            placeholder="Last name"
                            className="input shadow-md focus:outline-none focus:shadow-2xl invalid:bg-red-500 input-bordered border-gray-300 w-full " />
                    </div>
                </div>
                <div className='flex  justify-between gap-10 w-full'>
                    <div className=' w-full space-y-10'>
                        <div className="flex flex-col md:flex-row w-full gap-10 justify-between">
                            <div className='flex flex-col gap-1 w-full'>
                                <label htmlFor="phone   " className='text-sm flex items-center'>Phone: <sup><IoMdStar className='text-red-700'></IoMdStar></sup></label>
                                <input
                                    type="tel"
                                    id='phone'
                                    name='phone'
                                    placeholder="Your phone"
                                    onChange={(e) => inputFilledIdentify(e)}
                                    className="input shadow-md invalid:bg-red-600 focus:outline-none focus:shadow-2xl  input-bordered border-gray-300 w-full " />
                            </div>

                            <div className='flex flex-col gap-1 w-full'>
                                <label htmlFor="phone   " className='text-sm flex items-center'>Your Postcode: <sup><IoMdStar className='text-red-700'></IoMdStar></sup></label>
                                <input
                                    type="tel"
                                    id='company'
                                    name='company'
                                    placeholder="Your postcode"
                                    onChange={(e) => inputFilledIdentify(e)}
                                    className="input shadow-md focus:outline-none focus:shadow-2xl  input-bordered border-gray-300 w-full " />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="Email" className='text-sm flex items-center'>Email: <sup><IoMdStar className='text-red-700'></IoMdStar></sup></label>
                            <input
                                type="email"
                                id='Email'
                                name='email'
                                onChange={(e) => inputFilledIdentify(e)}
                                placeholder="Your email"
                                className="input shadow-md focus:outline-none focus:shadow-2xl  input-bordered invalid:text-red-600 invalid:border-red-600 border-gray-300 w-full " />
                        </div>
                        <div className='flex flex-col md:flex-row items-center
                 w-full justify-between gap-10
                  '>
                            <div className='flex flex-col relative gap-1 w-full'>
                                <label htmlFor="Fname" className='
                        pl-1 flex items-center text-sm '>Set password: <sup><IoMdStar className='text-red-700'></IoMdStar></sup> </label>
                                <input
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        inputFilledIdentify(e)
                                    }}
                                    type={passShow ? 'text' : 'password'}
                                    id='Fname'
                                    name='password'
                                    placeholder="Password"
                                    className="input focus:outline-none shadow-md focus:shadow-2xl input-bordered border-gray-300  w-full" />
                                <div onClick={() => setShowPassword(!passShow)} className="absolute bottom-2 cursor-pointer  right-3">
                                    {
                                        passShow ? <FaRegEye size={30} ></FaRegEye> : <FaRegEyeSlash size={30}></FaRegEyeSlash>
                                    }


                                </div>
                            </div>
                            <div className='flex flex-col gap-1 w-full'>
                                <label htmlFor="" className='text-sm flex items-center'>Confirm password:</label>
                                <input
                                    type="password"
                                    id='Lname'
                                    name='confirm-password'
                                    onKeyUp={(e) => {
                                        setValidPass(e.target.value)

                                    }}
                                    placeholder="Confirm password"
                                    className={`${!validPass ? 'bg-white':validPass == password  ? 'bg-gray-200' : 'bg-white border-red-600'} input bg-white shadow-md focus:outline-none focus:shadow-2xl  input-bordered border-gray-300 w-full `} />
                            </div>
                        </div>

                        <div className="flex  items-center gap-2">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-error " required />
                            <p>I agree to the <span className="text-pink-600">Terms of Use</span> and <span className="text-pink-600">Privacy Policy.</span></p>
                        </div>
                    </div>

                </div>
                <div className="text-center">
                    <button className='hover:shadow-md hover:shadow-pink-600 mt-10 btn border-none text-white  text-xl  px-10 bg-gradient-to-b rounded-md from-pink-400 to-pink-900'>SignUp now</button>

                </div>

            </form>
        </div>
    );
};

export default Property_Owner;