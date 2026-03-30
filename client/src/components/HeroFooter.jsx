import React from 'react';

const HeroFooter = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-10">
            <div className=' flex justify-around items-center'>
                <div className=''>
                    <h2 className=' font-extrabold text-6xl text-white'>50K +</h2>
                    <p className=' text-[#FFFFFF] font-medium text-2xl'>Active Users</p>
                </div>
                <div className=''>
                    <h2 className=' font-extrabold text-6xl text-white'>200K +</h2>
                    <p className=' text-[#FFFFFF] font-medium text-2xl'>Premium Tools</p>
                </div>
                <div className=''>
                    <h2 className=' font-extrabold text-6xl text-white'>4.5</h2>
                    <p className=' text-[#FFFFFF] font-medium text-2xl'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default HeroFooter;