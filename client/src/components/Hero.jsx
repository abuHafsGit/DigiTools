import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
    return (
        <div className=' flex  justify-center items-center mt-4 gap-5 lg:w-[80%] mx-auto md:flex-row flex-col-reverse'>
            <div className=' space-y-4 p-4 '>
                <button className=' bg-[#E1E7FF] border border-blue-500 rounded-full p-1  gap-1 flex justify-center items-center text-[#4F39F6]'>
                    <span class="relative flex size-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-indigo-500"></span>
                    </span>

                    New: AI-Powered Tools Available</button>
                <h1 className=' text-4xl md:text-7xl font-extrabold text-center md:text-start'>Supercharge Your Digital Workflow</h1>
                <p className=' space-y-2 text-[#627382] text-center md:text-start'>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products</p>
                <div className='  flex gap-2 justify-center items-center sm:justify-start '>
                    <button className="btn  w-auto rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Explore Products</button>
                    <button className="btn  w-auto rounded-full border border-[#4F39F6] text-[#4F39F6]"><img src={assets.play} alt="" /> Watch Demo</button>
                </div>
            </div>
            <div className=' p-4'>
                <img src={assets.bannar} alt="" />
            </div>
        </div>
    );
};

export default Hero;