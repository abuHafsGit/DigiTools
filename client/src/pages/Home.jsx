import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeroFooter from '../components/HeroFooter';

const Home = () => {
    return (
        <div className=' w-[80vw] mx-auto'>
            <Navbar />
            <Hero />
            <HeroFooter />
        </div>
    );
};

export default Home;