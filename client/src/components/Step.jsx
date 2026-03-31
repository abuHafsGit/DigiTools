import React from 'react'
import { assets } from '../assets/assets'

function Step() {
    return (
        <div className=' bg-[#F9FAFC] '>
            <div className=' w-[80vw] mx-auto my-5 py-15'>
                <div className=' flex justify-center flex-col items-center text-center'>
                    <h1 className=' text-5xl font-extrabold'>Get Started in 3 Steps</h1>
                    <p>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className=' grid grid-cols-3 mt-5'>
                    <div className="card w-96 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <div className=' flex flex-col justify-center items-center text-center space-y-4'>
                                <div className=' w-22 h-22 rounded-full bg-gray-200 flex items-center justify-center'>
                                    <img className=' w-20 h-20' src={assets.user} alt="" />
                                </div>
                                <h2 className="card-title">Create an Account</h2>
                                <p>Sign up for free in seconds. No credit card required to get started.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <div className=' flex flex-col justify-center items-center text-center space-y-4'>
                                <div className=' w-22 h-22 rounded-full bg-gray-200 flex items-center justify-center'>
                                    <img className=' w-20 h-20' src={assets.package_} alt="" />
                                </div>
                                <h2 className="card-title">Choose Products</h2>
                                <p>Browse our catalog and select the toolsthat fit your needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <div className=' flex flex-col justify-center items-center text-center space-y-4'>
                                <div className=' w-22 h-22 rounded-full bg-gray-200 flex items-center justify-center'>
                                    <img className=' w-18 h-18' src={assets.rocket} alt="" />
                                </div>
                                <h2 className="card-title">Start Creating</h2>
                                <p>Download and start using your premium tools immediately.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step
