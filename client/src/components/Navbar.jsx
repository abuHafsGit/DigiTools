import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { assets } from '../assets/assets';

const Navbar = ({ carts }) => {
    return (
        <div className='sticky top-0 bg-white z-10'>
            <div className='w-[80%] mx-auto py-4 '>
                <div className="flex justify-between items-center">
                    <div className="">
                        <img src={assets.DigiTools} alt="" />
                    </div>

                    <div >
                        <ul className=' flex gap-4'>
                            <li><a >Products</a></li>
                            <li><a >Features</a></li>
                            <li><a >Pricing</a></li>
                            <li><a >Testimonials</a></li>
                            <li><a >FAQ</a></li>
                        </ul>
                    </div>

                    <div className="
                 flex justify-center items-center gap-4  ">
                        <div className='flex relative '>
                            <ShoppingCart />
                            <p className=' absolute -right-2 -top-2.5 text-red-400'>{carts.length}</p>
                        </div>
                        <button className=' btn btn-ghost'>loging</button>
                        <button className="btn  w-auto rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                            Get Started
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;