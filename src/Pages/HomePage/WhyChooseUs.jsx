import { LuHandshake } from 'react-icons/lu';
import image from './../../files/whyUs.jpg'
import { FaRegThumbsUp } from 'react-icons/fa';
import { BsShieldCheck } from 'react-icons/bs';

const WhyChooseUs = () => {
    return (
        <div className='text-center space-y-2 md:px-20 px-5 py-20 bg-[rgba(94,94,94,0.8)]'>
            <h1 className='text-4xl font-bold'>Why MyBuilder is Your Trusted Choice</h1>
            <p className="max-w-3xl mx-auto ">Finding the right trades person for your project can be challenging. MyBuilder makes it simple and reliable to connect with trusted professionals.</p>
            <div className='flex text-start flex-col md:flex-row md:p-20 gap-10 justify-center items-center max-w-7xl mx-auto'>
                <div>
                   <div className='md:w-[500px] md:h-[600px] '>
                   <img className="rounded-md  object-cover h-full w-full" src={image} alt="" />
                   </div>
                </div>
                <div className='space-y-10'>
                    <div className='flex gap-4 shadow-md shadow-pink-400 p-4 items-center'>
                        <LuHandshake size={40}></LuHandshake>
                        <div className='border-l-4 px-4 border-pink-600'>
                            <h4 className='text-2xl font-semibold'>The Experts You Need</h4>
                            <p>List your job for free and connect with skilled tradespeople who are ready to help. You decide who to contact and move forward with.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 shadow-md shadow-pink-400  p-4 items-center'>
                        <FaRegThumbsUp size={40}></FaRegThumbsUp>
                        <div className='border-l-4 px-4 border-pink-600'>

                            <h4 className='text-2xl font-semibold'>Honest Customer Feedback</h4>
                            <p>Our detailed review system ensures you can read authentic feedback from real customers, helping you choose the best tradesperson for your needs.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 shadow-md shadow-pink-400  p-4 items-center'>
                        <BsShieldCheck size={40}></BsShieldCheck>
                        <div className='border-l-4 px-4 border-pink-600'>

                            <h4 className='text-2xl font-semibold'>Stay in Control</h4>
                            <p>Browse profiles, check work history, and review feedback before making your decision. Only the tradespeople you approve can reach out to you.</p>
                            <button>Post a job</button>
              

                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;