import React from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import { assets } from '../assets/assets';

const Navbar = ({ carts }) => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className='sticky top-0 bg-white z-10'>
            <div className='md:w-[80%] mx-auto py-4  px-4 relative'>
                <div className="flex justify-between items-center">
                    <div className="">
                        <img src={assets.DigiTools} alt="" />
                    </div>

                    <div className=' hidden md:flex' >
                        <ul className=' flex gap-4'>
                            <li className=' cursor-pointer'><a >Products</a></li>
                            <li className=' cursor-pointer'><a >Features</a></li>
                            <li className=' cursor-pointer'><a >Pricing</a></li>
                            <li className=' cursor-pointer'><a >Testimonials</a></li>
                            <li className=' cursor-pointer'><a >FAQ</a></li>
                        </ul>
                    </div>

                    <div className="
                 flex justify-center items-center gap-4  ">
                        <div className='flex relative cursor-pointer '>
                            <ShoppingCart />
                            <div className=' absolute -right-2 -top-2.5 text-white w-4 h-4 rounded-full flex justify-center items-center bg-red-500'>{carts.length}</div>
                        </div>
                        <div className=' hidden lg:flex'>
                            <button className='hidde  btn btn-ghost'>loging</button>
                            <button className="btn  w-auto rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                                Get Started
                            </button>
                        </div>

                    </div>
                    <Menu className=' md:hidden sm:flex' onClick={() => setOpen(!open)} />
                    {/* mobile menu */}
                    <div className={`md:hiden lg:hidden sm:hidden absolute top-14 ${open ? ' -right-100' : '-right-6.5'} duration-300 px-0 `} >
                        <ul className='flex flex-col gap-4 mt-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] h-screen px-4 text-white'>
                            <li className=' cursor-pointer'><a >Products</a></li>
                            <li className=' cursor-pointer'><a >Features</a></li>
                            <li className=' cursor-pointer'><a >Pricing</a></li>
                            <li className=' cursor-pointer'><a >Testimonials</a></li>
                            <li className=' cursor-pointer'><a >FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;