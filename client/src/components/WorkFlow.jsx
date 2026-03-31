import React from 'react';

const WorkFlow = () => {
    return (
        <div className=' py-28 bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-10 '>
            <div >
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <h2 className=' font-extrabold text-4xl text-white'>Ready to Transform Your Workflow?</h2>
                    <p className=' text-base text-white opacity-80'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                    <div className=' flex gap-2'>
                        <button className="btn  w-auto rounded-full bg-white">Explore Products</button>
                        <button className="btn  w-auto rounded-full text-white border bg-[#4F39F6] outline-none hover:bg-[#4F39F6]">Watch Demo</button>
                    </div>
                    <p className=' text-base text-white opacity-80'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </div>
    )
};

export default WorkFlow;