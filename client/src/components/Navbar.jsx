import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
    return (
        <div className=' '>
            <div className="flex justify-between items-center">
                <div className="">
                    <a className=' text-4xl'>DigiTools</a>
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

                <div className="flex justify-center items-center gap-4  ">
                    <div className='flex'>
                        <ShoppingCart />
                        <p className=' absolute right-1'>{0}</p>
                    </div>
                    <button className=' btn btn-ghost'>loging</button>
                    <button className="btn  w-auto rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                        Get Started
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;